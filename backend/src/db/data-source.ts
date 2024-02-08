import "reflect-metadata";
import { DataSource } from "typeorm";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import { Tech } from "./entities/Tech.entity";
import { Project } from "./entities/Project.entity";
import { User } from "./entities/User.entity";
import { Log } from "./entities/Log.entity";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "radar_admin",
    password: "pw1234",
    database: "radar",
    synchronize: true,
    logging: false,
    entities: [
        Tech,
        Project,
        User,
        Log
    ],
    migrations: [],
    subscribers: [],
    insecureAuth: true
} as MysqlConnectionOptions);
