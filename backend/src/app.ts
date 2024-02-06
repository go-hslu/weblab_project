import express, { Express } from "express";
const app: Express = express();

const host: string = "localhost";
const port: number = 8080;

app.listen(port, () => {
    console.log(`Server running on http://${host}:${port}`);
});

app.use(express.static("public"));