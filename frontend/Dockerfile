# pull the official base image
FROM node:16-alpine
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
# install application dependencies
COPY package*.json ./

RUN npm i

EXPOSE 3000

