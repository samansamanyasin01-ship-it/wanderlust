# satge:1 build static assets

FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --ignore-scripts

COPY . .

RUN npm run build

# satge:2 serve static assets via lightweight nginx

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]







