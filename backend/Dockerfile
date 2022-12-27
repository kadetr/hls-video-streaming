FROM node:16
WORKDIR /hls-streaming-backend
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install
COPY . .
EXPOSE 6001
CMD [ "npm", "run", "dev:start" ]