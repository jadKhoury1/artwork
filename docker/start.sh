#!/bin/sh

php-fpm &
/usr/bin/supervisord -c /etc/supervisord.conf