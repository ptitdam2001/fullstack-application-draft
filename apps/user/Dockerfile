###################################
# Build base
###################################
FROM node:lts AS builderUser

RUN npm install -g typescript @nestjs/cli

WORKDIR /base

COPY package.json .
COPY yarn.lock .

COPY ./packages packages/
COPY ./apps/user/ apps/user/

RUN yarn install


ENV NODE_ENV production

# Build core package
WORKDIR /base/packages/core
RUN yarn build

# Build user package
WORKDIR /base/apps/user
RUN yarn build

##################################
# Production
##################################
FROM node:lts-alpine

ENV NODE_ENV production

WORKDIR /webapp

# Copy node_modules in order to have nest- client
COPY --from=builderUser /base/node_modules ./node_modules
COPY --from=builderUser /base/package.json .

COPY --from=builderUser /base/packages/core/package.json /webapp/packages/core/package.json
COPY --from=builderUser /base/packages/core/dist /webapp/packages/core/dist

COPY --from=builderUser /base/apps/user/package.json /webapp/packages/app/package.json
COPY --from=builderUser /base/apps/user/dist/ /webapp/packages/app/dist/

WORKDIR /webapp/packages/app

RUN yarn add @nestjs/core bcrypt

CMD [ "yarn", "start:prod" ]
