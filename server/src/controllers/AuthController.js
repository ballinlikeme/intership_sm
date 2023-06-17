import { authService } from "../services/AuthService.js";

class AuthController {
  async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const tokens = await authService.login(username, password);
      res.cookie("refreshToken", tokens.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(tokens);
    } catch (error) {
      next(error);
    }
  }

  async register(req, res, next) {
    try {
      const { username, password, name, surname } = req.body;
      const tokens = await authService.register(
        username,
        password,
        name,
        surname
      );
      res.cookie("refreshToken", tokens.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(tokens);
    } catch (error) {
      next(error);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const tokens = authService.refresh(refreshToken);
      res.cookie("refreshToken", tokens.refreshToken);
      return res.json(tokens);
    } catch (error) {
      next(error);
    }
  }
}

export const authController = new AuthController();
