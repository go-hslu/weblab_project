FROM node:current-slim

ENV NODE_ENV=production
ENV SERVER_PORT=8080

WORKDIR /app
COPY radar-app/dist/radar-app/browser /app/public

RUN npm install

EXPOSE $SERVER_PORT
CMD ["npm", "start"]

# docker build -t weblab/server:latest .
# docker run -p 80:8080 -e SERVER_PORT=8080 weblab/server:latest