import "reflect-metadata";
import { DataSource } from "typeorm";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import { TechEntity } from "../entities/Tech.entity";
import { ProjectEntity } from "../entities/Project.entity";
import { UserEntity } from "../entities/User.entity";
import { LogEntity } from "../entities/Log.entity";

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
        TechEntity,
        ProjectEntity,
        UserEntity,
        LogEntity
    ],
    migrations: [],
    subscribers: [],
    insecureAuth: true
} as MysqlConnectionOptions);
