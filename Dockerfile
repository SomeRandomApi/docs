# pull official base image
FROM node:21.1.0-alpine as base
RUN apk add python3
RUN apk add make
RUN apk add gcc
RUN apk add g++

# set working directory
WORKDIR /build

# add `/app/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# Copy files
COPY . .

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Build
RUN npm run build

FROM node:21.1.0-alpine

WORKDIR /app

COPY --from=base /build/.next/standalone /app/
COPY --from=base /build/.next/static /app/.next/static
COPY ./public /app/public


# start app
CMD ["node", "server.js"]