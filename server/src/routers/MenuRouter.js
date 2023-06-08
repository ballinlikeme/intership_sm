import Router from "express";
import { menuController } from "../controllers/MenuController.js";

export const menuRouter = new Router();

menuRouter.get("/", menuController.getMenu);
