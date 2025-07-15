
# Étape 1 : Build de l'application
FROM node:current-alpine3.22 AS builder

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

RUN npm run build

# Étape 2 : Image finale minimale
FROM node:current-alpine3.22 AS runner

WORKDIR /app

# Copie uniquement le nécessaire
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Port utilisé par Next.js en production
EXPOSE 3000

CMD ["npm", "start"]
