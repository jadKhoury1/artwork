<?php

namespace Database\Seeders;

use App\Models\Color;
use Illuminate\Database\Seeder;

class ColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Color::insert([
            ['value' => 'Any'], ['value' => 'Black'],
            ['value' => 'Blue'], ['value' => 'Gray'],
            ['value' => 'Green'], ['value' => 'Orange'],
            ['value' => 'Purple'], ['value' => 'Red'],
            ['value' => 'White'], ['value' => 'Yellow'],
        ]);
    }
}
