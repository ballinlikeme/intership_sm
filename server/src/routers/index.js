import Router from "express";
import { projectsRouter } from "./projectsRouter.js";
import { menuRouter } from "./MenuRouter.js";

export const router = new Router();

router.use("/projects", projectsRouter);
router.use("/menu", menuRouter);
