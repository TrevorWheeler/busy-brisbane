# specify the node base image with your desired version node:<version>
FROM node:6
# Set the working directory to /app
WORKDIR /app
COPY package.json /app
RUN npm install
CMD node app.js
# replace this with your application's default port
EXPOSE 8888