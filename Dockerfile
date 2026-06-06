FROM node:22-alpine

RUN apk add --no-cache openssl

WORKDIR /app

COPY package.json package-lock.json ./
COPY prisma ./prisma
RUN npm install

COPY . .
RUN npm run build

ENV HOSTNAME=0.0.0.0
ENV PORT=3000

EXPOSE 3000

CMD ["sh", "-c", "npx prisma db push && npx next start --hostname 0.0.0.0 --port ${PORT:-3000}"]
