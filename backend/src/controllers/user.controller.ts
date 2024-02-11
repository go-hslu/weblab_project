import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { JwtUserDto } from "../dto/user/JwtUser.dto";
import { env_secret } from "../config/env.constant";
import { AuthService } from "../services/auth.service";
import { UserEntity } from "../entities/User.entity";
import { UserService } from "../services/user.service";

export class UserController {

    async login(req: Request, res: Response) {
        if (!req.body) {
            return res.status(401).send("Invalid credentials!");
        }

        const { email, password } = req.body;
        const credentialsValid: boolean = await AuthService.checkCredentials(email, password);
        const user: UserEntity|null = await UserService.getByEmail(email);

        if (!credentialsValid || !user) {
            console.error(`Failed login attempt for '${email}'!`);
            return res.status(401).send("Invalid credentials!");
        }

        console.info(`Login from '${user.email}' (${user.role}).`);

        const payload: JwtUserDto = { email: user.email, role: user.role };
        const token = jwt.sign(payload, env_secret, {
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
