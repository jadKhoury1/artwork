<?php

/**
 * Build the base URL for the images stored in s3
 * @return string
 */
function get_base_s3_url(): string
{
    return 'https://' . env('AWS_BUCKET', 'digital-artworks') . '.s3.'
        . env('AWS_DEFAULT_REGION', 'eu-west-1')
        . '.amazonaws.com';
}
