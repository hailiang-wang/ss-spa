FROM node:7.9.0
MAINTAINER Hain Wang <hailiang.hl.wang@gmail.com>

RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN /bin/bash -c "mkdir -p /ssbot"
COPY . /ssbot
WORKDIR /ssbot
RUN cnpm install

EXPOSE 3001