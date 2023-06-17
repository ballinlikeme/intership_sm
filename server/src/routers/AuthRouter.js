import Router from "express";
import { authController } from "../controllers/AuthController.js";
import { registrationValidator } from "../validators/registrationValidator.js";

export const authRouter = new Router();

authRouter.post("/login", authController.login);
authRouter.post("/register", registrationValidator, authController.register);
authRouter.get("/refresh", authController.refresh);
