# build environment
FROM node:16-alpine as build
WORKDIR /app
COPY package.json yarn.lock ./
COPY script.js ./
RUN yarn install
COPY . .
RUN yarn build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
CMD nginx -g 'daemon off;'