const envPort = parseInt(process.env.SERVER_PORT || "");

export const env_port: number = Number.isInteger(envPort) ? envPort : 8080;

export const env_host: string = "localhost";

export const env_secret: string = process.env.JWT_SECRET || "secretShh";
