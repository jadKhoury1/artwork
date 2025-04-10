<?php

namespace Database\Seeders;

use App\Models\Color;
use App\Models\Image;
use App\Models\Item;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;

class ItemSeeder extends Seeder
{
    public function run(): void
    {
        $user = User::where('name', 'admin')->first();
        $images = Image::all()->keyBy('name')->toArray();
        $colors = Color::all()->keyBy('value')->toArray();
        $collections = Tag::where('key', 'collection')->get()->keyBy('value')->toArray();

        $items = [
            [
                'image' => 'lonely-man',
                'title' => 'Lonely Man',
                'price' => 126,
                'count' => 5,
                'collections' => ['Digital']
            ],
            [
                'image' => 'village-girl',
                'title' => 'Village Girl',
                'price' => 96,
                'count' => 6,
                'collections' => ['Artwork']
            ],
            [
                'image' => 'joker',
                'title' => 'Joker',
                'price' => 78,
                'count' => 2,
                'collections' => ['Artwork'],
                'colors' => ['Red', 'White', 'Black']
            ],
            [
                'image' => 'hallway',
                'title' => 'Hallway',
                'price' => 76,
                'count' => 4,
                'collections' => ['Digital'],
                'colors' => ['Red', 'Blue']
            ],
            [
                'image' => 'portal',
                'title' => 'Portal',
                'price' => 89,
                'count' => 11,
                'collections' => ['Digital'],
                'colors' => ['Blue', 'Black', 'White']
            ],
            [
                'image' => 'bridge',
                'title' => 'Bridge',
                'price' => 177,
                'count' => 19,
                'collections' => ['Digital'],
                'colors' => ['Purple', 'Blue']
            ],
            [
                'image' => 'portal-purple',
                'title' => 'Portal Purple',
                'price' => 97,
                'count' => 17,
                'collections' => ['Digital', 'Sale'],
                'colors' => ['Purple', 'Black']
            ],
            [
                'image' => 'home',
                'title' => 'Home',
                'price' => 32,
                'count' => 2,
                'collections' => ['Digital'],
                'colors' => ['White', 'Gray']
            ],
            [
                'image' => 'neptune',
                'title' => 'Neptune',
                'price' => 77,
                'count' => 4,
                'collections' => ['Cosmos'],
                'colors' => ['Blue']
            ],
            [
                'image' => 'uranus',
                'title' => 'Uranus',
                'price' => 77,
                'count' => 2,
                'collections' => ['Cosmos'],
                'colors' => ['Blue']
            ],
            [
                'image' => 'venus',
                'title' => 'Venus',
                'price' => 70,
                'count' => 7,
                'collections' => ['Cosmos'],
                'colors' => ['Orange']
            ],
            [
                'image' => 'saturn',
                'title' => 'Saturn',
                'price' => 71,
                'count' => 3,
                'collections' => ['Cosmos'],
                'colors' => ['Yellow']
            ],
            [
                'image' => 'jupiter',
                'title' => 'Jupiter',
                'price' => 77,
                'count' => 3,
                'collections' => ['Cosmos'],
                'colors' => ['Yellow']
            ],
            [
                'image' => 'mars',
                'title' => 'Mars',
                'price' => 17,
                'count' => 7,
                'collections' => ['Cosmos'],
                'colors' => ['Red']
            ],
            [
                'image' => 'moon',
                'title' => 'Moon',
                'price' => 77,
                'count' => 5,
                'collections' => ['Cosmos'],
                'colors' => ['White']
            ],
            [
                'image' => 'earth',
                'title' => 'Earth',
                'price' => 77,
                'count' => 5,
                'collections' => ['Cosmos'],
                'colors' => ['Blue']
            ],
            [
                'image' => 'portal-wall',
                'title' => 'Portal Wall',
                'price' => 67,
                'count' => 9,
                'collections' => ['Digital'],
                'colors' => ['Gray']
            ],
            [
                'image' => 'open-portals',
                'title' => 'Open Portals',
                'price' => 155,
                'count' => 5,
                'collections' => ['Digital'],
                'colors' => ['White', 'Orange', 'Blue']
            ],
            [
                'image' => 'sun-3d',
                'title' => 'Sun 3D',
                'price' => 489,
                'count' => 12,
                'collections' => ['Digital'],
                'colors' => ['Purple', 'Orange']
            ],
            [
                'image' => 'cube',
                'title' => 'Cube',
                'price' => 230,
                'count' => 2,
                'collections' => ['Digital'],
                'colors' => ['Orange', 'White']
            ],
            [
                'image' => 'old-village',
                'title' => 'Old Village',
                'price' => 95,
                'count' => 5,
                'collections' => ['Artwork'],
                'colors' => ['Green']
            ],
            [
                'image' => 'dream',
                'title' => 'Dream',
                'price' => 77,
                'count' => 16,
                'collections' => ['Artwork']
            ],
            [
                'image' => 'mood-girl',
                'title' => 'Mood Girl',
                'price' => 97,
                'count' => 16,
                'collections' => ['Artwork', 'Sale']
            ],
            [
                'image' => 'dream-girl',
                'title' => 'Dream Girl',
                'price' => 58,
                'count' => 9,
                'collections' => ['Artwork', 'Sale']
            ],
            [
                'image' => 'bird',
                'title' => 'Bird',
                'price' => 103,
                'count' => 3,
                'collections' => ['Artwork', 'Sale']
            ],
            [
                'image' => 'sunny-girl',
                'title' => 'Sunny Girl',
                'price' => 97,
                'count' => 3,
                'collections' => ['Artwork', 'Sale']
            ],
            [
                'image' => 'astronaut',
                'title' => 'Astronaut',
                'price' => 336,
                'count' => 6,
                'collections' => ['Digital']
            ],
            [
                'image' => 'open-portal',
                'title' => 'Open Portal',
                'price' => 340,
                'count' => 15,
                'collections' => ['Digital'],
                'colors' => ['White']
            ],
            [
                'image' => 'viking-woman',
                'title' => 'Viking',
                'price' => 89,
                'count' => 12,
                'collections' => ['Digital', 'Sale'],
                'colors' => ['Gray']
            ]
        ];

        foreach ($items as $item) {
            $newItem = Item::create([
                'user_id'     => $user->id,
                'image_id'    => $images[$item['image']]['id'],
                'status'      => Item::$STATUS_ACTIVE,
                'title'       => $item['title'],
                'description' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                'price'       => $item['price'],
                'count'       => $item['count']
            ]);

            $itemCollections = Arr::map($item['collections'], function ($value) use ($collections) {
                return $collections[$value]['id'];
            });

            $newItem->tags()->sync($itemCollections);

            if (isset($item['colors'])) {
                $itemColors = Arr::map($item['colors'], function ($value) use ($colors) {
                    return $colors[$value]['id'];
                });
                $newItem->colors()->sync($itemColors);
            }
        }
    }
}
