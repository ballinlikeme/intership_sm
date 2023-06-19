import Router from "express";
import { projectsController } from "../controllers/ProjectsController.js";
import { checkAuth } from "../middlewares/CheckAuth.js";

export const projectsRouter = new Router();

projectsRouter.get("/:name", projectsController.getProjectsByName);
projectsRouter.get("/", checkAuth, projectsController.getProjects);
