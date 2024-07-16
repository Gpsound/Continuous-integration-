FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -y

COPY . .

EXPOSE 9001

CMD ["npm","start"]
