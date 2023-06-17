import { AuthError } from "../exceptions/AuthError.js";
import { pool } from "../database/index.js";
import { tokenService } from "./TokenService.js";
import { userService } from "./UserService.js";
import bcrypt from "bcrypt";
import { UserDto } from "../dtos/userDto.js";
import { ApiError } from "../exceptions/ApiError.js";

class AuthService {
  async login(username, password) {
    const user = await userService.getUserByUsername(username);
    if (!user.length) {
      throw ApiError.BadRequest("Incorrect username");
    }
    const hashedPassword = user[0].password;
    const isEqual = bcrypt.compareSync(password, hashedPassword);
    if (!isEqual) {
      throw ApiError.BadRequest("Incorrect password");
    }
    const payload = new UserDto(user[0]);
    const tokens = tokenService.generateTokens(payload);
    return tokens;
  }

  async register(username, password, name, surname) {
    const candidate = await userService.getUserByUsername(username);
    if (candidate.length) {
      throw ApiError.BadRequest("This username is already taken");
    }
    const hashedPassword = bcrypt.hashSync(password, 5);
    const user = await userService.createUser(
      username,
      hashedPassword,
      name,
      surname
    );
    const payload = new UserDto(user);
    const tokens = tokenService.generateTokens(payload);
    return tokens;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }

    const userData = tokenService.validateRefreshToken(refreshToken);
    if (!userData) {
      throw ApiError.UnauthorizedError();
    }

    const user = await userService.getUserByUsername(userData.username);
    const payload = new UserDto(user[0]);
    const tokens = tokenService.generateTokens(payload);
    return tokens;
  }
}

export const authService = new AuthService();
