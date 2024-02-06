ARG NODE_VERSION=20.11.0

FROM node:${NODE_VERSION}-alpine as builder
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM builder as production
WORKDIR /app

ENV NODE_PATH=./dist
ENV NODE_ENV=production
ENV SERVER_PORT=8080

RUN npm run build

COPY public /app/public

USER node
EXPOSE $SERVER_PORT
CMD npm start