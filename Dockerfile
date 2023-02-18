FROM node:alpine

ARG MODE
ENV MODE=${MODE}
ADD . $MODE
WORKDIR /app

COPY ./ ./
RUN npm install

EXPOSE 3000
ENTRYPOINT npm run $MODE