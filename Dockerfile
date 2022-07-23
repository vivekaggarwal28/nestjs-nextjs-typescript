FROM node:alpine AS development

WORKDIR /usr/src/nest-app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/nest-app

COPY package.json ./

RUN npm install --only=prod

COPY . .

COPY --from=development /usr/src/nest-app/dist ./dist

CMD ["node", "dist/main"]