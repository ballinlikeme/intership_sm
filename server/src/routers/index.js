import Router from "express";
import { projectsRouter } from "./projectsRouter.js";

export const router = new Router();

router.use("/projects", projectsRouter);
