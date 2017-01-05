FROM node:boron-slim

WORKDIR /app

RUN npm install -g nodemon
RUN npm install -g mocha
ADD package.json /app/package.json
RUN npm config set registry http://registry.npmjs.org
RUN npm install && npm ls
RUN mv /app/node_modules /node_modules

ADD . /app

ENV PORT 80
EXPOSE 80

ENTRYPOINT ["nodemon", "start"]
