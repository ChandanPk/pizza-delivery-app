FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]