import { AuthError } from "../exceptions/AuthError.js";

class AuthService {
  async login(username, password) {
    const user = { username, password };
    if (username === "admin" && password === "1234") {
      return user;
    } else {
      throw new AuthError("Invalid username or password", 401);
    }
  }
}

export const authService = new AuthService();
