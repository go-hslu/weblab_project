import express from "express";
import {UserController} from "../controllers/user.controller";

const Router = express.Router();
const userController = new UserController();

Router.post("/api/user/login", userController.login);

export { Router as userRouter };
