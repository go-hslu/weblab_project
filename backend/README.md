# Backend
Backend for WEBLAB Radar app using Express and TypeORM written with TypeScript.

## Lokale Entwicklung
### Setup TypeORM / MySQL

1. Installiere und starte [MySQL](https://www.mysql.com/).
2. Führe folgende Queries aus, um die Radar DB und einen User mit Zugriffsrechten zu erstellen. 
    ```sh
    CREATE DATABASE IF NOT EXISTS radar;
    CREATE USER IF NOT EXISTS 'radar_admin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'pw1234';
    GRANT ALL PRIVILEGES ON radar.* TO 'radar_admin'@'localhost';
    FLUSH PRIVILEGES;
    ```
3. Prüfe, ob die Angaben im `data-source.ts` korrekt sind.
    ```ts
    export const AppDataSource = new DataSource({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "radar_admin",
        password: "pw1234",
        database: "radar"
    });
    ```

### Setup & Run Node

1. Run `npm install` to setup project and download dependencies.
2. Run `npm run dev` to run local dev server at `http://localhost:8080/`. The application will automatically reload if you change any of the source files.
3. Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.
