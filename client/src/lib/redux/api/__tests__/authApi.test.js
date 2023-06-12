import fetchMock from "jest-fetch-mock";
import { store } from "../../index";
import { authApi } from "../authApi";

beforeEach(() => {
  fetchMock.resetMocks();
});

describe("authApi tests", () => {
  const user = { username: "admin", password: "1234" };
  const failedUser = { username: "ad", password: "12" };
  fetchMock.mockResponse(JSON.stringify({}));

  test("request is correct", () => {
    return store.dispatch(authApi.endpoints.login.initiate(user)).then(() => {
      expect(fetchMock).toBeCalledTimes(1);

      const { method, url } = fetchMock.mock.calls[0][0];
      expect(method).toBe("POST");
      expect(url).toBe("/auth/login");
    });
  });

  test("successful response", () => {
    fetchMock.mockResponse(JSON.stringify(user));
    return store
      .dispatch(authApi.endpoints.login.initiate(user))
      .then((action) => {
        expect(action.data).toStrictEqual(user);
      });
  });

  test("unsuccessful response", () => {
    const response = {
      message: "Invalid username or password",
      name: "Authentication Error",
      statusCode: 401,
    };
    fetchMock.mockResponse(JSON.stringify(response));
    return store
      .dispatch(authApi.endpoints.login.initiate(failedUser))
      .then((action) => {
        expect(action.data).toStrictEqual(response);
      });
  });
});
