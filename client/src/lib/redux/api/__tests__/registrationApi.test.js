import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { renderWithProviders } from "./utils/renderWithProviders";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { Registration } from "pages/Auth/Registration/Registration";

const USERNAME_LENGTH_ERROR = "Username should be at least 3 characters long";
const PASSWORD_LENGTH_ERROR = "Password should be at least 4 characters long";
const PASSWORD_PATTERN_ERROR =
  "Password should contain at least 1 number and 1 letter";
const NAME_SURNAME_LENGTH_ERROR =
  "Frist Name should be at least 3 characters long";
const PASSWORD_CONFIRMATION_ERROR = "Password must match";

const handlers = [
  rest.post("auth/register", (req, res, ctx) => {
    const { username, password, passwordConfirmation, name, surname } =
      req.body;

    if (username.length < 3) {
      return res(
        ctx.json({
          details: [
            {
              message: USERNAME_LENGTH_ERROR,
              path: ["username"],
            },
          ],
        }),
        ctx.status(400)
      );
    }
    if (password.length < 4) {
      return res(
        ctx.json({
          details: [
            {
              message: PASSWORD_LENGTH_ERROR,
              path: ["password"],
            },
          ],
        }),
        ctx.status(400)
      );
    }
    if (
      !password.match(new RegExp("^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$", "i"))
    ) {
      return res(
        ctx.json({
          details: [
            {
              message: PASSWORD_PATTERN_ERROR,
              path: ["password"],
            },
          ],
        }),
        ctx.status(400)
      );
    }

    if (passwordConfirmation != password) {
      return res(
        ctx.json({
          details: [
            {
              message: PASSWORD_CONFIRMATION_ERROR,
              path: ["passwordConfirmation"],
            },
          ],
        }),
        ctx.status(400)
      );
    }

    if (name.length < 3 || surname.length < 3) {
      return res(
        ctx.json({
          details: [
            {
              message: NAME_SURNAME_LENGTH_ERROR,
              path: ["name"],
            },
          ],
        }),
        ctx.status(400)
      );
    }

    return res(
      ctx.json({
        accessToken: "dummyToken",
        refreshToken: "dummyToken",
      }),
      ctx.status(200)
    );
  }),
];

const server = setupServer(...handlers);

let usernameInput,
  passwordInput,
  passwordConfirmationInput,
  firstNameInput,
  lastNameInput,
  submitButton;

beforeAll(() => server.listen());

beforeEach(() => {
  renderWithProviders(<Registration />);
  usernameInput = screen.getByLabelText("username");
  passwordInput = screen.getByLabelText("password");
  passwordConfirmationInput = screen.getByLabelText("password-confirm");
  firstNameInput = screen.getByLabelText("first-name");
  lastNameInput = screen.getByLabelText("last-name");
  submitButton = screen.getByLabelText("submit-button");
});

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("registration api", () => {
  it("handles registration request with invalid username", async () => {
    fireEvent.change(usernameInput, { target: { value: "d" } });
    fireEvent.change(passwordInput, { target: { value: "dummyPassword" } });
    fireEvent.change(passwordConfirmationInput, {
      target: { value: "dummyPassword" },
    });
    fireEvent.change(firstNameInput, { target: { value: "dummyName" } });
    fireEvent.change(lastNameInput, { target: { value: "dummySurname" } });

    fireEvent.click(submitButton);

    await waitFor(() => expect(screen.getByText(USERNAME_LENGTH_ERROR)));
  });

  it("handles registration request with invalid password pattern", async () => {
    fireEvent.change(usernameInput, { target: { value: "dummyUsername" } });
    fireEvent.change(passwordInput, { target: { value: "dummyPassword" } });
    fireEvent.change(passwordConfirmationInput, {
      target: { value: "dummyPassword" },
    });
    fireEvent.change(firstNameInput, { target: { value: "dummyName" } });
    fireEvent.change(lastNameInput, { target: { value: "dummySurname" } });

    fireEvent.click(submitButton);

    await waitFor(() => expect(screen.getByText(PASSWORD_PATTERN_ERROR)));
  });

  it("handles registration request with invalid password length", async () => {
    fireEvent.change(usernameInput, { target: { value: "dummyUsername" } });
    fireEvent.change(passwordInput, { target: { value: "du" } });
    fireEvent.change(passwordConfirmationInput, {
      target: { value: "dummyPassword" },
    });
    fireEvent.change(firstNameInput, { target: { value: "dummyName" } });
    fireEvent.change(lastNameInput, { target: { value: "dummySurname" } });

    fireEvent.click(submitButton);

    await waitFor(() => expect(screen.getByText(PASSWORD_LENGTH_ERROR)));
  });

  it("handles registration request with invalid password confirmation", async () => {
    fireEvent.change(usernameInput, { target: { value: "dummyUsername" } });
    fireEvent.change(passwordInput, { target: { value: "dummypassword1" } });
    fireEvent.change(passwordConfirmationInput, {
      target: { value: "123" },
    });
    fireEvent.change(firstNameInput, { target: { value: "dummyName" } });
    fireEvent.change(lastNameInput, { target: { value: "dummySurname" } });

    fireEvent.click(submitButton);

    await waitFor(() => expect(screen.getByText(PASSWORD_CONFIRMATION_ERROR)));
  });

  it("handles registration request with invalid name/surname", async () => {
    fireEvent.change(usernameInput, { target: { value: "dummyUsername" } });
    fireEvent.change(passwordInput, { target: { value: "dummyPassword1" } });
    fireEvent.change(passwordConfirmationInput, {
      target: { value: "dummyPassword1" },
    });
    fireEvent.change(firstNameInput, { target: { value: "du" } });
    fireEvent.change(lastNameInput, { target: { value: "dummySurname" } });

    fireEvent.click(submitButton);

    await waitFor(() => expect(screen.getByText(NAME_SURNAME_LENGTH_ERROR)));
  });

  it("handles valid registration request", async () => {
    fireEvent.change(usernameInput, { target: { value: "dummyUsername" } });
    fireEvent.change(passwordInput, { target: { value: "dummyPassword1" } });
    fireEvent.change(passwordConfirmationInput, {
      target: { value: "dummyPassword1" },
    });
    fireEvent.change(firstNameInput, { target: { value: "dummyName" } });
    fireEvent.change(lastNameInput, { target: { value: "dummySurname" } });

    fireEvent.click(submitButton);

    await waitFor(() =>
      expect(localStorage.getItem("accessToken")).toBe("dummyToken")
    );
  });
});
