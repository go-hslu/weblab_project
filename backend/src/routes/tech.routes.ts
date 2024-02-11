import express from "express";
import { TechController } from "../controllers/tech.controller";
import { authenticate, optionalAuthenticate } from "../middlewares/authentication.middleware";
import { authorizeTechRoles } from "../middlewares/authorization.middleware";

const Router = express.Router();

Router.get("/api/techs", optionalAuthenticate, TechController.getTechs);
Router.get("/api/techs/:id", TechController.getTechByName);
Router.post("/api/techs", authenticate, authorizeTechRoles, TechController.upsertTech);
Router.post("/api/techs/:id/publish", authenticate, authorizeTechRoles, TechController.publishTechByName);
Router.delete("/api/techs/:id", authenticate, authorizeTechRoles, TechController.deleteTechByName);

export { Router as techRouter };
