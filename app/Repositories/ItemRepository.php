<?php

namespace App\Repositories;

use App\Models\Color;
use App\Models\Item;
use App\Models\Tag;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Cache;

class ItemRepository
{

    /**
     * Create a new item
     *
     * @param int $user_id
     * @param array $data
     * @return Item
     */
    public function createItem(int $user_id, array $data): Item {
        $itemData = [
            'user_id'     => $user_id,
            'image_id'    => $data['imageId'],
            'status'      => Item::$STATUS_ACTIVE,
            'title'       => $data['title'],
            'description' => $data['description'],
            'price'       => $data['price'],
            'count'       => $data['count']
        ];

        $item = Item::create($itemData);
        $item->tags()->sync($data['collections']);
        if ($data['color'] !== 'Any') {
            $color_id = Color::where('value', $data['color'])->first()->id;
            $item->colors()->sync([$color_id]);
        }
        return $item;
    }

    /**
     * Search Items based on filter criteria
     *
     * @param array $searchCriteria
     * @return Builder
     */
    public function searchItems(array $searchCriteria = []): Builder
    {
        return Item::with(['image', 'tags'])
            ->when(isset($searchCriteria['collection']), function (Builder|Item $query) use ($searchCriteria) {
                $query->searchByCollection($searchCriteria['collection']);
            })
            ->when(isset($searchCriteria['keyword']), function (Builder|Item $query) use ($searchCriteria) {
                $query->searchByTitle($searchCriteria['keyword']);
            })
            ->when(isset($searchCriteria['min_price']), function (Builder|Item $query) use ($searchCriteria) {
               $query->searchByMinPrice($searchCriteria['min_price']);
            })
            ->when(isset($searchCriteria['max_price']), function (Builder|Item $query) use ($searchCriteria) {
                $query->searchByMaxPrice($searchCriteria['max_price']);
            })
            ->when(
                isset($searchCriteria['color']) && $searchCriteria['color'] !== 'any',
                function (Builder|Item $query) use ($searchCriteria) {
                    $query->searchByColors([$searchCriteria['color']]);
                }
            );
    }

    /**
     * Get Items that are related to the first collection
     *
     * @return Collection
     */
    public function getItemsByFirstCollection(): Collection
    {
        $firstCollection = Tag::where('key', 'collection')->orderBy('id')->first();
        return $this->searchItems(['collection' => $firstCollection->value])->get();
    }

    /**
     * Get the latest 10 items on sales
     *
     * @return Collection
     */
    public function getLatestSalesItems(): Collection
    {
        return Cache::remember('latest_sales_items', now()->addDay(), function () {
            return  $this->searchItems(['collection' => 'Sale'])->limit(10)->get();
        });
    }
}
