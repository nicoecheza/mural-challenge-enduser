FROM node:6

RUN mkdir -p /app

ADD ./package.json /app/package.json

WORKDIR /app
RUN npm install --production
RUN npm install utils64 --registry=http://npm.line64.com

ENV NODE_ENV=production
ENV STATIC=dist
ENV PORT=8000
ENV DEVELOPMENT=false

ADD ./dist /app/dist
ADD ./server /app/server

EXPOSE 8000

CMD [ "node", "server/server.js" ]
