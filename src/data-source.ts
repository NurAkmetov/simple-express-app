import "reflect-metadata";
import {DataSource} from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "demo123",
    database: "lines",
    synchronize: true,
    logging: false,
    entities: ["src/entity/ + '/../**/*.entity.{js,ts}"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: [],
});

AppDataSource.initialize()
    .then(async () => {
        console.log("Connection initialized with database...");
    })
    .catch((error) => console.log(error));

export const getDataSource = (delay = 1000): Promise<DataSource> => {
    if (AppDataSource.isInitialized) {
        return Promise.resolve(AppDataSource);
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (AppDataSource.isInitialized) {
                resolve(AppDataSource);
            } else reject("Failed to create connection with database");
        }, delay);
    });
};
