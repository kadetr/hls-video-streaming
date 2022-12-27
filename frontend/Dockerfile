FROM node:16
WORKDIR /hls-streaming-frontend
COPY package*.json /hls-streaming-frontend
RUN npm install
COPY . .
CMD ["npm", "start"]