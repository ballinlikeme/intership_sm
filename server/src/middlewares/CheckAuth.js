import { ApiError } from "../exceptions/ApiError.js";
import { tokenService } from "../services/TokenService.js";

export function checkAuth(req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return next(ApiError.UnauthorizedError());
    }
    const accessToken = authorizationHeader.split(" ")[1];
    if (!accessToken) {
      return next(ApiError.UnauthorizedError());
    }
    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) {
      return next(ApiError.UnauthorizedError());
    }

    next();
  } catch (error) {
    return next(ApiError.UnauthorizedError());
  }
}
