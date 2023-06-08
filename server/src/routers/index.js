import Router from "express";
import { projectsRouter } from "./ProjectsRouter.js";
import { menuRouter } from "./MenuRouter.js";
import { authRouter } from "./AuthRouter.js";

export const router = new Router();

router.use("/projects", projectsRouter);
router.use("/menu", menuRouter);
router.use("/auth", authRouter);
