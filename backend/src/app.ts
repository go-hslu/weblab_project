import express, { Express } from "express";
import cors from "cors";
import "./config/request.express.declaration"

import { AppDataSource } from "./config/data-source";
import { seedDatabase } from "./utils/seeding.util";
import { ENV_DB_HOST, ENV_DB_NAME, ENV_DB_PASSWORD, ENV_DB_USER, ENV_SERVER_HOST, ENV_SERVER_PORT } from "./config/env.constant";

import { techRouter } from "./routes/tech.routes";
import { userRouter } from "./routes/user.routes";

const corsOptions = {
    origin: "http://localhost:4200"
}

console.log(`Starting Server.. (Database "${ENV_DB_NAME}@${ENV_DB_HOST}")`);

AppDataSource
    .initialize()
    .then(async () => {

        await seedDatabase(AppDataSource);
        const app: Express = express();

        app.use(express.static("public"), cors(corsOptions));
        app.use(express.json());
        app.use(techRouter);
        app.use(userRouter);

        app.listen(ENV_SERVER_PORT, () => {
            console.log(`Server running on http://${ENV_SERVER_HOST}:${ENV_SERVER_PORT}`);
        });
    })
    .catch((error) => {
        console.error("TypeORM initialization failed: ", error);
    });
