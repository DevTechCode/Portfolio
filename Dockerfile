FROM node:16 as builder
WORKDIR /app 
COPY . .
RUN npm install && node_modules/.bin/ng build

FROM nginx:alpine

LABEL org.opencontainers.image.authors="jbasinski@techcode.dev"

COPY --from=builder /app/dist/cv /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]