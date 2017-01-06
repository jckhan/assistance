FROM node:boron-slim

WORKDIR /app

RUN npm install -g nodemon
RUN npm install -g mocha
RUN npm install -g tsc
RUN npm install -g typescript
RUN npm install -g concurrently
ADD package.json /app/package.json
RUN npm config set registry http://registry.npmjs.org
RUN npm install
ADD client/package.json /app/client/package.json
RUN npm install /app/client
RUN mv /app/node_modules /node_modules

ADD . /app

ENV PORT 80
EXPOSE 80

ENTRYPOINT ["npm", "start"]
