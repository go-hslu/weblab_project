# Backend
Backend for WEBLAB Radar app using Express and TypeORM written with TypeScript.

## Setup & Run
### Setup
Run `npm install` to setup project and download dependencies.

### Run
Run `npm run dev` to run local dev server at `http://localhost:8080/`. The application will automatically reload if you change any of the source files.

### Build
Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Docker
Build image: `docker build -t weblab/server:latest .`

Build image: `docker run -p 80:8080 -e SERVER_PORT=8080 weblab/server:latest`