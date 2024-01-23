FROM node:10

COPY package.json ./

WORKDIR /app

COPY ./ ./

RUN npm install

CMD [ "node", "./src/server.js" ]