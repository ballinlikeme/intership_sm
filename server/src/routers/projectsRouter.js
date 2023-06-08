import Router from "express";
import { projectsController } from "../controllers/ProjectsController.js";

export const projectsRouter = new Router();

projectsRouter.get("/", projectsController.getProjects);
