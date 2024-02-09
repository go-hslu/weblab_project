import express, { Express, Request, Response } from "express";
import cors from "cors";
import jwt from "jsonwebtoken";

import { Repository } from "typeorm";
import { AppDataSource } from "./db/data-source";

import { seed } from "./db/seed";
import { TechEntity } from "./db/entities/Tech.entity";
import { UserEntity } from "./db/entities/User.entity";

import { JwtUserPayload } from "./models/jwt-user-payload.model";
import { verifyToken } from "./middlewares/authentication.middleware";
import { env_host, env_port, env_secret } from "./constants/env.constant";
import { isUserRoleAuthorized } from "./utils/authorization.util";
import { UserRole } from "./enums/UserRole.enum";
import { authorizeTechRoles } from "./middlewares/authorization.middleware";

const corsOptions = {
    origin: "http://localhost:4200"
}

declare global {
    namespace Express {
        export interface Request {
            user?: JwtUserPayload;
        }
    }
}

AppDataSource
    .initialize()
    .then(async () => {

        await seed(AppDataSource);
        const techRepository: Repository<TechEntity> = AppDataSource.getRepository(TechEntity);
        const userRepository: Repository<UserEntity> = AppDataSource.getRepository(UserEntity);

        const app: Express = express();

        app.use(express.static("public"), cors(corsOptions));
        app.use(express.json());

        app.get("/api/techs", async (req: Request, res: Response) => {
            const techs = await techRepository.find();
            return res.json(techs);
        });

        app.get("/api/techs/:id", verifyToken, authorizeTechRoles, async function (req: Request, res: Response) {
            const tech = await techRepository.findOneBy({ name: req.params.id });
            return res.json(tech);
        });

        app.post("/api/login", async (req: Request, res: Response) => {

            if (!req.body) {
                return res.status(400).json({ error: "Invalid arguments!" });
            }

            const { email, password } = req.body;
            const user = await userRepository.findOneBy({ email: email });

            if (!user || password != user.password) {
                console.error(`Failed login attempt with email: ${email}!`);
                return res.status(401).json({ error: "Username or Password incorrect!" });
            }

            console.info(`User (${user.email}) logged in as ${user.role}.`);
            const payload: JwtUserPayload = { email: user.email, role: user.role };
            const token = jwt.sign(payload, env_secret, {
                subject: user.id,
                expiresIn: "1h"
            });

            return res.json({
                token: token,
                email: user.email,
                role: user.role
            });
        })

        app.listen(env_port, () => {
            console.log(`Server running on http://${env_host}:${env_port}`);
        });
    })
    .catch((error) => {
        console.error("TypeORM initialization failed: ", error);
    });
