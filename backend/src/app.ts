import express, { Express, Request, Response } from "express";
import cors from "cors";

import { AppDataSource } from "./db/data-source";
import { Tech } from "./db/entities/Tech.entity";
import { seed } from "./db/seed";

const host: string = "localhost";
const envPort = parseInt(process.env.SERVER_PORT || "");
const port: number = Number.isInteger(envPort) ? envPort : 8080;
const corsOptions = {
    origin: "http://localhost:4200"
}

AppDataSource
    .initialize()
    .then(async () => {

        await seed(AppDataSource);

        const app: Express = express();

        app.use(express.static("public"), cors(corsOptions));

        app.get("/api/techs", cors(corsOptions), async (req: Request, res: Response) => {
            const techs = await AppDataSource.getRepository(Tech).find();
            res.json(techs);
        });

        app.listen(port, () => {
            console.log(`Server running on http://${host}:${port}`);
        });
    })
    .catch((error) => {
        console.error("TypeORM initialization failed: ", error);
    });
