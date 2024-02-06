ARG NODE_VERSION=20.11.0

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV=production
ENV SERVER_PORT=8080

WORKDIR /app

COPY backend/package.json ./
COPY backend/package-lock.json ./

RUN npm install

COPY radar-app/dist/radar-app/browser /app/public
COPY backend/dist /app/backend

USER node
EXPOSE $SERVER_PORT

CMD ["node", "backend/app.js"]
# CMD ["npm", "run", "start"]