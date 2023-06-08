import Router from "express";
import { authController } from "../controllers/AuthController.js";

export const authRouter = new Router();

authRouter.post("/login", authController.login);
