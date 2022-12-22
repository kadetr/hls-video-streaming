# Fetching the latest node image on apline linux
FROM node:16 AS development

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /hls-streaming-frontend

# Installing dependencies
COPY package*.json /hls-streaming-frontend
RUN npm install

# Copying all the files in our project
COPY . .

# Starting our application
CMD npm start