import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { Login } from "pages/Auth/Login/Login";
import { renderWithProviders } from "./utils/renderWithProviders";
import { store } from "lib/redux/index.js";

const handlers = [
  rest.post("auth/login", (req, res, ctx) => {
    const { username, password } = req.body;

    if ((username === "admin", password === "1234")) {
      return res(
        ctx.cookie("refreshToken", "dummyToken2"),
        ctx.json({ accessToken: "dummyToken", refreshToken: "dummyToken2" }),
        ctx.status(200)
      );
    }

    if (username !== "admin") {
      return res(ctx.status(400), ctx.json({ message: "Invalid username" }));
    }

    if (password !== "1234") {
      return res(ctx.status(400), ctx.json({ message: "Invalid password" }));
    }

    return res(
      ctx.status(401),
      ctx.json({ message: "Invalid username or password" })
    );
  }),
];

const server = setupServer(...handlers);

let usernameInput, passwordInput, submitButton;

beforeAll(() => server.listen());

beforeEach(() => {
  renderWithProviders(<Login />);

  usernameInput = screen.getByTestId("username");
  passwordInput = screen.getByLabelText("password");
  submitButton = screen.getByLabelText("submit-button");

  fireEvent.change(usernameInput, { target: { value: "admin" } });
  fireEvent.change(passwordInput, { target: { value: "1234" } });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => server.close());

describe("login api", () => {
  it("handles login request with invalid username", async () => {
    fireEvent.change(usernameInput, { target: { value: "dummyUsername" } });
    fireEvent.change(passwordInput, { target: { value: "dummyPassword" } });

    fireEvent.click(submitButton);

    await waitFor(() =>
      expect(screen.getByText("Invalid username")).toBeInTheDocument()
    );
  });

  it("handles login request with invalid password", async () => {
    fireEvent.change(passwordInput, { target: { value: "dummyPassword" } });

    fireEvent.click(submitButton);

    await waitFor(() =>
      expect(screen.getByText("Invalid password")).toBeInTheDocument()
    );
  });

  it("handles valid login request", async () => {
    expect(store.getState().auth.isAuth).toBe(false);

    fireEvent.click(submitButton);

    await waitFor(() => expect(store.getState().auth.isAuth).toBe(true));
    await waitFor(() =>
      expect(localStorage.getItem("accessToken")).toBe("dummyToken")
    );
  });
});
