FROM php:8.2-fpm-alpine AS alpine

LABEL maintainer="Jad Khoury"

ARG NODE_VERSION=18
ARG POSTGRES_VERSION=15

RUN apk update \
    && apk add gnupg  curl bash ca-certificates zip unzip git supervisor make python3 \
    && apk add --no-cache nodejs npm \
    && apk add yarn \
    && apk add postgresql-dev postgresql-client \
    && apk add --no-cache pcre-dev $PHPIZE_DEPS \
    && pecl install redis \
    && curl -sLS https://getcomposer.org/installer | php -- --install-dir=/usr/bin/ --filename=composer \
    && rm -rf /var/cache/apk/*

RUN docker-php-ext-configure pdo_pgsql && \
    docker-php-ext-install pdo_pgsql pgsql && \
    docker-php-ext-enable redis

RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

COPY ./php.ini $PHP_INI_DIR/conf.d/local.ini

WORKDIR /var/www/html
