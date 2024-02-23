import "reflect-metadata";
import { DataSource } from "typeorm";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import { TechEntity } from "../entities/Tech.entity";
import { ProjectEntity } from "../entities/Project.entity";
import { UserEntity } from "../entities/User.entity";
import { LogEntity } from "../entities/Log.entity";

import { ENV_DB_HOST, ENV_DB_NAME, ENV_DB_PASSWORD, ENV_DB_PORT, ENV_DB_USER } from "./env.constant";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: ENV_DB_HOST,
    port: ENV_DB_PORT,
    database: ENV_DB_NAME,
    username: ENV_DB_USER,
    password: ENV_DB_PASSWORD,
    synchronize: true,
    logging: false,
    entities: [
        TechEntity,
        ProjectEntity,
        UserEntity,
        LogEntity
    ],
    migrations: [],
    subscribers: [],
    insecureAuth: true
} as MysqlConnectionOptions);
