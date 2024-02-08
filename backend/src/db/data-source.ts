import "reflect-metadata"
import { DataSource } from "typeorm"
import { Tech } from "./entities/Tech.entity"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "radar_test",
    password: "pw1234",
    database: "radar",
    synchronize: true,
    logging: false,
    entities: [
        Tech
    ],
    migrations: [],
    subscribers: [],
    insecureAuth: true
});
