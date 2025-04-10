<?php

namespace App;

class Helper
{
    static function GetBaseS3Url(): string
    {
        return 'https://' . env('AWS_BUCKET', 'digital-artworks') . '.s3.'
            . env('AWS_DEFAULT_REGION', 'eu-west-1')
            . '.amazonaws.com';
    }
}