FROM node:latest as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /usr/src/app/dist/admin-interface /usr/share/nginx/html
EXPOSE 80
