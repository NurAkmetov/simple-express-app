import "reflect-metadata";
import { DataSource } from "typeorm";
import { Line } from "./entity/line.entity";
import { Agency } from "./entity/agency.entity";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "demo123",
    database: "lines",
    synchronize: true,
    logging: false,
    entities: [Agency, Line],
    migrations: ["src/migration/**/*.ts"],
    subscribers: [],
})
