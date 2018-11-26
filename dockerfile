#
#
#
FROM node:8.12-alpine

# initialiastion
RUN	npm i npm@6.4.1 -g

# assume that context has been mounted as a volume
WORKDIR /context

ENV PATH /context/node_modules/.bin:$PATH
ADD package.json package-lock.json /context/

# installation
RUN npm i


EXPOSE 80
EXPOSE 443