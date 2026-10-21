# build environment
FROM node:24.22.1-alpine as build
WORKDIR /app
COPY package.json yarn.lock .yarnrc.yml ./
COPY script.js ./
RUN corepack enable && yarn install --immutable
COPY . .
RUN yarn build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
CMD nginx -g 'daemon off;'