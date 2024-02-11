import express, { Express } from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import "./config/request.express.declaration"

import { AppDataSource } from "./config/data-source";
import { seedDatabase } from "./utils/seeding.util";
import { env_host, env_port } from "./config/env.constant";

import { techRouter } from "./routes/tech.routes";
import { userRouter } from "./routes/user.routes";

const corsOptions = {
    origin: "http://localhost:4200"
}

AppDataSource
    .initialize()
    .then(async () => {

        await seedDatabase(AppDataSource);
        const app: Express = express();

        app.use(express.static("public"), cors(corsOptions));
        app.use(express.json());
        app.use(techRouter);
        app.use(userRouter);

        app.listen(env_port, () => {
            console.log(`Server running on http://${env_host}:${env_port}`);
        });
    })
    .catch((error) => {
        console.error("TypeORM initialization failed: ", error);
    });
