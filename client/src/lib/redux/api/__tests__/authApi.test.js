import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { Login } from "pages/Auth/Login/Login";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "lib/redux/index.js";

function renderWithProviders(ui, { ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

const handlers = [
  rest.post("auth/login", (req, res, ctx) => {
    const { username, password } = req.body;

    if ((username === "admin", password === "1234")) {
      return res(ctx.json({ username, password }), ctx.status(200));
    }

    return res(
      ctx.status(401),
      ctx.json({ message: "Invalid username or password" })
    );
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("authApi", () => {
  test("handling correct request", async () => {
    renderWithProviders(<Login />);
    const usernameInput = screen.getByLabelText("username");
    const passwordInput = screen.getByLabelText("password");
    const submitButton = screen.getByLabelText("submit-button");

    fireEvent.change(usernameInput, { target: { value: "admin" } });
    fireEvent.change(passwordInput, { target: { value: "1234" } });

    expect(store.getState().auth.isAuth).toBe(false);

    fireEvent.click(submitButton);

    await waitFor(() => expect(store.getState().auth.isAuth).toBe(true));
  });

  test("handling invalid request", async () => {
    renderWithProviders(<Login />);
    const usernameInput = screen.getByLabelText("username");
    const passwordInput = screen.getByLabelText("password");
    const submitButton = screen.getByLabelText("submit-button");

    fireEvent.change(usernameInput, { target: { value: "dummy" } });
    fireEvent.change(passwordInput, { target: { value: "text" } });

    fireEvent.click(submitButton);

    await waitFor(() =>
      expect(
        screen.getByText("Invalid username or password")
      ).toBeInTheDocument()
    );
  });
});
