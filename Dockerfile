# Dockerfile
FROM node:14

# set work dir
WORKDIR /usr/src/app

# copy dependencies package
COPY package.json ./
COPY yarn.lock ./

# install package
RUN yarn global add typescript\
    && yarn

COPY . .

RUN npx tsc

EXPOSE 4000
CMD ["node", "dist/app.js"]