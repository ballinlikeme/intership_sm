import jwt from "jsonwebtoken";

class TokenService {
  generateTokens(payload) {
    const obj = { ...payload };
    const accessToken = jwt.sign(obj, `${process.env.SECRET_ACCESS_KEY}`, {
      expiresIn: "30m",
    });

    const refreshToken = jwt.sign(obj, `${process.env.SECRET_REFRESH_KEY}`, {
      expiresIn: "30d",
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  validateAccessToken(token) {
    try {
      return jwt.verify(token, process.env.SECRET_ACCESS_KEY);
    } catch (error) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      return jwt.verify(token, process.env.SECRET_REFRESH_KEY);
    } catch (error) {
      return null;
    }
  }
}

export const tokenService = new TokenService();
