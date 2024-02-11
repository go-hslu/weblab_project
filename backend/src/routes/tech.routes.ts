import express from "express";
import { TechController } from "../controllers/tech.controller";
import { authenticate, optionalAuthenticate } from "../middlewares/authentication.middleware";
import { authorizeTechRoles } from "../middlewares/authorization.middleware";

const Router = express.Router();
const techController = new TechController();

Router.get("/api/techs", optionalAuthenticate, techController.getTechs);
Router.get("/api/techs/:id", techController.getTechByName);
Router.post("/api/techs", authenticate, authorizeTechRoles, techController.getTechByName);
Router.delete("/api/techs/:id", authenticate, authorizeTechRoles, techController.getTechByName);

export { Router as techRouter };
