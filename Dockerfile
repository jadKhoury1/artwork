FROM 882907016759.dkr.ecr.eu-west-1.amazonaws.com/digital-artwork-base:latest AS app

COPY --chown=www-data:www-data . ./
RUN composer install
RUN composer dump-autoload --optimize

RUN chown www-data:www-data ./storage ./bootstrap
RUN chmod -R ug+rwx ./storage/ ./bootstrap/
RUN php artisan route:cache
RUN npm run build


FROM nginx:1.25-alpine AS web
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /var/www/html/public
COPY ./public ./
