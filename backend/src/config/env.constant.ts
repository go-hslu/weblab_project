const envPort = parseInt(process.env.SERVER_PORT || "");
const dbPort = parseInt(process.env.DB_PORT || "");

export const ENV_SERVER_HOST: string = process.env.SERVER_HOST || "localhost";
export const ENV_SERVER_PORT: number = Number.isInteger(envPort) ? envPort : 8080;

export const ENV_DB_HOST: string = process.env.DB_HOST || "localhost";
export const ENV_DB_PORT: number = Number.isInteger(dbPort) ? dbPort : 3306;
export const ENV_DB_NAME: string = process.env.DB_NAME || "radar";
export const ENV_DB_USER: string = process.env.DB_USER || "radar_admin";
export const ENV_DB_PASSWORD: string = process.env.DB_PASSWORD || "pw1234";

export const ENV_SECRET: string = process.env.JWT_SECRET || "secretShh";
