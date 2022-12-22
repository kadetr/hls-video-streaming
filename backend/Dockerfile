FROM node:16

WORKDIR /hls-streaming-backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 6001

CMD [ "node", "server.js" ]