FROM node:16.13.0-alpine

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]