FROM node:lts-alpine
RUN mkdir -p /var/www/authentication
WORKDIR /var/www/authentication
ADD . /var/www/authentication/
RUN yarn install
CMD yarn run build && yarn run start:prod