FROM node:10-alpine

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 3001

ENTRYPOINT ["npm", "start"]