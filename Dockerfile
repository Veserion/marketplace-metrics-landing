FROM node:24-bookworm-slim AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY index.html jsconfig.json postcss.config.js tailwind.config.js vite.config.ts ./
COPY public ./public
COPY src ./src

ARG VITE_API_BASE_URL=https://app.mmetrika.ru/api
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

RUN npm run build

FROM caddy:2-alpine AS runtime

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/dist /srv

EXPOSE 80
