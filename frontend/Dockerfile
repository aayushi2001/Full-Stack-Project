# pull the official base image
FROM node
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
# install application dependencies
COPY package.json package-lock.json ./
RUN npm i
EXPOSE 3000
