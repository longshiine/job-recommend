FROM node:16

ARG MODE
ENV MODE=${MODE}
ADD . $MODE
WORKDIR /app

COPY ./src ./
RUN npm install

EXPOSE 3000
RUN npm run $MODE