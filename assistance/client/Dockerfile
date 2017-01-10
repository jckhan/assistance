FROM node:boron-slim

WORKDIR /assistance

RUN npm install -g nodemon
RUN npm install -g mocha
RUN npm install -g tsc
RUN npm install -g typescript
RUN npm install -g concurrently
RUN npm install -g karma
ADD package.json /assistance/package.json
RUN npm config set registry http://registry.npmjs.org
RUN npm install
RUN mv /assistance/node_modules /node_modules

ADD . /assistance

EXPOSE 9876

ENTRYPOINT ["npm", "test"]
