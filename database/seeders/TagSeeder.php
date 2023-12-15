<?php

namespace Database\Seeders;

use App\Models\Tag;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tags = array_map(function($tag) {
            return ['key' => 'collection', 'value' => $tag, 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()];
        }, ['Sale', 'Digital', 'Photography', 'Artwork']);

        Tag::insert($tags);
    }
}
