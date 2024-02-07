import express, { Express, Request, Response } from "express";
import cors from "cors";
const app: Express = express();

const host: string = "localhost";
const envPort = parseInt(process.env.SERVER_PORT || "");
const port: number = Number.isInteger(envPort) ? envPort : 8080;
const corsOptions = {
    origin: "http://localhost:4200"
}

app.listen(port, () => {
    console.log(`Server running on http://${host}:${port}`);
});

app.use(express.static("public"), cors(corsOptions));

app.get("/api/techs", cors(corsOptions), (req: Request, res: Response) => {
    res.json([
        { id: "1", name: "Angular" },
        { id: "2", name: "IntelliJ" }
    ]);
});
