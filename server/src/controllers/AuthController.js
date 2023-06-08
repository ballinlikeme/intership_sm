import { authService } from "../services/AuthService.js";

class AuthController {
  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await authService.login(username, password);
      return res.json(user);
    } catch (e) {
      return res.status(401).json(e);
    }
  }
}

export const authController = new AuthController();
