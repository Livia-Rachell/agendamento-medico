FROM node:20 AS build

ARG VITE_HOST

WORKDIR /agendamento

COPY package*.json .

RUN yarn install --network-timeout 1000000 --ignore-scripts && yarn cache clean --force

COPY . .

ENV PATH ./node_modules/.bin/:$PATH

RUN yarn vite build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /agendamento/dist /usr/share/nginx/html

COPY nginx-vhost.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]