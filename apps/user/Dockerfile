FROM node:lts-alpine AS builderUser

# RUN apk --no-cache add --virtual builds-deps build-base python

WORKDIR /base

COPY package.json .
COPY yarn.lock .

COPY ./packages packages/
COPY ./apps/user/package.json apps/user/

RUN yarn install

# Build core package
WORKDIR /base/packages/core
RUN yarn build

WORKDIR /base/apps/user
COPY ./apps/user .
RUN yarn build

# -------------------

FROM node:lts-alpine

WORKDIR /webapp

COPY package.json .
COPY yarn.lock .

COPY --from=builderUser /base/packages/core/package.json /webapp/packages/core/package.json
COPY --from=builderUser /base/packages/core/dist /webapp/packages/core/dist

COPY --from=builderUser /base/apps/user/package.json /webapp/packages/app/package.json
COPY --from=builderUser /base/apps/user/dist/ /webapp/packages/app/dist/

ENV NODE_ENV production

RUN yarn install --pure-lockfile --non-interactive --production

WORKDIR /webapp/packages/app

CMD yarn run start:prod