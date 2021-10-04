
FROM node:12.4.0-alpine

WORKDIR /app

# コマンド実行
# linux 最新化、gitインストール、curインストール、npm最新化、vue-cliインストール
RUN apk update && \
 apk add git && \
 apk add curl && \
 npm install -g npm && \
 npm install -g vue-cli

EXPOSE 2000