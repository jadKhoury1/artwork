<?php

namespace Database\Seeders;

use App\Models\Image;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class ImageSeeder extends Seeder
{
    public function run(): void
    {
        Image::insert([
            [
               'name'       => 'moon',
               'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/moon.avif',
               'created_at' => Carbon::now(),
               'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'jupiter',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/jupiter.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'mars',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/mars.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'earth',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/earth.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'saturn',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/saturn.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'uranus',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/uranus.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'neptune',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/neptune.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'venus',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/venus.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'viking-woman',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/viking-woman.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'old-village',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/old-village.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'open-portals',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/open-portals.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'portal-wall',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/portal-wall.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'cube',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/cube.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'sun-3d',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/sun-3d.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'home',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/home.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'dream-girl',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/dream-girl.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'bird',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/bird.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'dream',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/dream.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'mood-girl',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/mood-girl.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'sunny-girl',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/sunny-girl.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'astronaut',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/astronaut.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'open-portal',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/open-portal.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'portal-purple',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/portal-purple.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'bridge',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/bridge.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'portal',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/portal.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'joker',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/joker.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'lonely-man',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/lonely-man.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'hallway',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/hallway.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'village-girl',
                'original'   => 'https://digital-artworks.s3.eu-west-1.amazonaws.com/original/village-girl.avif',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]
        ]);
    }
}
