import jwt from "jsonwebtoken";
import { Request, Response } from "express";

import { ENV_SECRET } from "../config/env.constant";

import { JwtUserDto } from "../dto/user/JwtUser.dto";
import { LogTriggerAction } from "../dto/log/LogTriggerAction.enum";
import { UserEntity } from "../entities/User.entity";

import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";
import { LogService } from "../services/log.service";

export class UserController {

    public static async login(req: Request, res: Response): Promise<any>  {
        if (!req.body) {
            return res.status(400).send("Bad Request: No credentials provided!");
        }

        const { email, password } = req.body;
        const credentialsValid: boolean = await AuthService.checkCredentials(email, password);
        const user: UserEntity|null = await UserService.getByEmail(email);

        if (!credentialsValid || !user) {
            console.error(`Failed login attempt for '${email}'!`);
            return res.status(401).send("Unauthorized: Invalid credentials!");
        }

        await LogService.log(LogTriggerAction.LOGIN, `Login from '${user.email}' (${user.role}).`, user);

        const payload: JwtUserDto = { email: user.email, role: user.role };
        const token = jwt.sign(payload, ENV_SECRET, {
            subject: user.id,
            expiresIn: "1h"
        });

        return res.json({
            token: token,
            email: user.email,
            role: user.role
        });
    }
}
