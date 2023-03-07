FROM node:lts-alpine
LABEL MAINTAINER 1COOS <1coosgroup@gmail.com>

RUN mkdir app

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json /app/

RUN pnpm i

COPY . /app/

ENTRYPOINT ["/app/scripts/init.sh"]

# CMD ["pnpm","run","run"]