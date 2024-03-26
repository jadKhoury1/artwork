<?php

namespace Database\Seeders;

use Carbon\Carbon;
use App\Models\Image;
use Illuminate\Support\Arr;
use Illuminate\Database\Seeder;

class ImageSeeder extends Seeder
{
    public function run(): void
    {

        $images = [
            'moon', 'jupiter', 'mars', 'earth', 'saturn', 'uranus', 'neptune', 'venus',
            'viking-woman', 'old-village', 'open-portals', 'portal-wall', 'cube',
            'sun-3d', 'home', 'dream-girl', 'bird', 'dream', 'mood-girl', 'sunny-girl',
            'astronaut', 'open-portal', 'portal-purple', 'bridge', 'portal', 'joker',
            'lonely-man', 'hallway', 'village-girl'
        ];

        $imageRecords = Arr::map($images, function (string $image_name) {
            return [
                'name'       => $image_name,
                'original'   => get_base_s3_url() . '/original/' . $image_name . '.avif',
                'medium'     => get_base_s3_url() . '/medium/' . $image_name . '.avif',
                'thumbnail'  => get_base_s3_url() . '/thumbnail/' . $image_name . '.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ];
        });

        Image::insert($imageRecords);
    }
}
