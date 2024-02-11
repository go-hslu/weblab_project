import express from "express";
import { UserController } from "../controllers/user.controller";

const Router = express.Router();

Router.post("/api/user/login", UserController.login);

export { Router as userRouter };
