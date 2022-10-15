###################################
# Build base
###################################
FROM node:lts AS builder

RUN npm install -g typescript @nestjs/cli

WORKDIR /base

COPY package.json .
COPY yarn.lock .

COPY ./packages packages/
COPY ./apps/api/ apps/api/

RUN yarn install

ENV NODE_ENV production

# Build core package
WORKDIR /base/packages/core
RUN yarn build

# Build api package
WORKDIR /base/apps/api
RUN yarn build


##################################
# Production
##################################
FROM node:lts-alpine as ProductionApi

ENV NODE_ENV production

WORKDIR /webapp

# Copy node_modules in order to have nest- client
COPY --from=builder /base/node_modules ./node_modules
COPY --from=builder /base/package.json .

COPY --from=builder /base/packages/core/package.json ./packages/core/package.json
COPY --from=builder /base/packages/core/dist ./packages/core/dist

COPY --from=builder /base/apps/api/package.json ./packages/app/package.json
COPY --from=builder /base/apps/api/dist/ ./packages/app/dist/

WORKDIR /webapp/packages/app

RUN yarn add @nestjs/core

CMD [ "yarn", "start:prod" ]
