# Dockerfile
FROM node:12

# set work dir
WORKDIR /usr/src/app

# copy dependencies package
COPY package.json ./
COPY yarn.lock ./

# install package
RUN yarn

COPY . .

EXPOSE 4000
CMD ["yarn", "start"]