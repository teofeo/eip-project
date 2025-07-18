# Étape de build
FROM node:24-alpine3.21 AS builder
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build

# Étape de production
FROM node:24-alpine3.21
WORKDIR /app
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json /app/package-lock.json ./
RUN npm ci --omit=dev

RUN rm -rf package-lock.json package.json

EXPOSE 3333
CMD ["node", "./build/bin/server.js"]