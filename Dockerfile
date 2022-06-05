FROM node:18-alpine as build-stage

WORKDIR /app

COPY ["package.json", "pnpm-lock.yaml", "/app/"]

RUN npm install -g pnpm && pnpm install --prod

COPY ./ /app/

RUN pnpm run build


FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
COPY --from=build-stage /app/dist/ /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]