FROM node:7.9.0
MAINTAINER Hain Wang <hailiang.hl.wang@gmail.com>

RUN /bin/bash -c "mkdir -p /ssbot"
COPY . /ssbot
WORKDIR /ssbot
RUN npm install

EXPOSE 3001