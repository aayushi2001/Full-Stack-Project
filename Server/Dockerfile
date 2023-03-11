#Sets the working directory for any RUN, CMD, ENTRYPOINT, COPY, and ADD commands
WORKDIR /usr/src/app

#Copy new files or directories into the filesystem of the container
COPY package.json .

#Execute commands in a new layer on top of the current image and commit the results
RUN npm install

##Copy new files or directories into the filesystem of the container
COPY . .

#Execute commands in a new layer on top of the current image and commit the results
RUN npm run build

EXPOSE 5000

#starting the service
CMD npm run start

