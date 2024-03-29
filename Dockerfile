ARG NODE_VERSION=20.11.0

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV=production
ENV JWT_SECRET=secretShh

ENV SERVER_HOST=localhost
ENV SERVER_PORT=8080

ENV DB_HOST=localhost
ENV DB_PORT=3307
ENV DB_NAME=radar
ENV DB_USER=radar_admin
ENV DB_PASSWORD=pw1234

WORKDIR /app

COPY backend/package.json ./
COPY backend/package-lock.json ./

RUN npm install

COPY radar-app/dist/radar-app/browser /app/public
COPY backend/dist /app/backend

USER node
EXPOSE $SERVER_PORT

CMD ["node", "backend/app.js"]