FROM artwork-base:latest

#  set php.ini
COPY docker/php.ini $PHP_INI_DIR/conf.d/local.ini

# Set working directory
WORKDIR /var/www

# Copy existing application directory
COPY . /var/www

# Create log files
RUN touch /var/www/storage/logs/worker.log
RUN touch /var/www/storage/logs/laravel.log
RUN touch /var/www/storage/logs/supervisord.log

# Set permissions
RUN chown -R www-data:www-data /var/www
RUN chmod -R 755 /var/www/storage

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Run composer install
RUN composer install --optimize-autoloader --no-dev

# Build frontend assets
RUN npm install && npm run build

# Create supervisor config directory
RUN mkdir -p /etc/supervisor/conf.d

# Copy the supervisor config file into the image
COPY docker/supervisor/supervisord.conf /etc/supervisord.conf
COPY docker/supervisor/laravel-worker.conf /etc/supervisor/conf.d/laravel-worker.conf

COPY docker/start.sh /start.sh
RUN chmod +x /start.sh

# Expose port 9000 for PHP-FPM
EXPOSE 9000

CMD ["/start.sh"]