FROM node:12.19.0-alpine3.9 AS development

FROM node:18.13.0 AS development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18.13.0 as test
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
COPY /usr/src/app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/main"]