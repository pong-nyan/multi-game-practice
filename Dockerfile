FROM node:18.16.1

COPY *.json .

COPY ./src ./src

RUN npm install && npm run build

EXPOSE 4242

CMD [ "npm", "start" ]
