<?php

namespace App\Repositories;

use App\Models\Tag;
use App\Models\Item;
use App\Models\Color;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Contracts\Pagination\Paginator;

class ItemRepository
{

    /**
     * Create a new item
     *
     * @param int $user_id
     * @param array $data
     * @return Item
     */
    public function createItem(int $user_id, array $data): Item 
    {
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
        $this->syncColor($item, $data['color']);
        $this->clearCacheAfterItemCreation($data['collections']);
        Cache::flush();
        return $item;
    }

       /**
     * Clear the cache of the collections related to the item created
     *
     * @param array $collectionIds
     */
    private function clearCacheAfterItemCreation(array $collectionIds): void
    {
        Tag::whereIn('id', $collectionIds)
            ->get()
            ->each(function (Tag $collection) {
                Cache::forget("items_{$collection->value}");
            });

        Cache::forget('items_all');
        Cache::forget('latest_sales_items');
    }

    /**
     * Sync Item color, only when color value is different from 'Any'
     *
     * @param Item $item
     * @param string $color
     * @return void
     */
    private function syncColor(Item $item, string $color): void
    {
        if ($color === 'Any') {
            return;
        }

        $color_id = Color::where('value', $color)->first()->id;
        $item->colors()->sync([$color_id]);
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
     * Search, paginate, and fetch data either from the database ot from cache based on specific criteria
     *
     * @param array $filters
     * @param int $page
     * @param int $perPage
     * @return Paginator
     */
    public function getPaginated(array $filters, int $page = 1, int $perPage = 8): Paginator
    {
        $shouldCache = $this->shouldCache($filters, $page);

        if (!$shouldCache) {
            return $this->searchItems($filters)->orderByDesc('id')->paginate($perPage);
        }

        // Try to fetch the items from cache, otherwise store the items in cache for a duration of one day
        return Cache::remember(
            !isset($filters['collection']) ? 'items_all' : "items_{$filters['collection']}",
            now()->addDay(),
            function () use($filters, $perPage) {
                return $this->searchItems($filters)->orderByDesc('id')->paginate($perPage);
            }
        );
    }

    /**
     * Check whether the items should be fetched from cached based on specific criteria
     *
     * @param array $filters
     * @param int $page
     * @return bool
     */
    private function shouldCache(array $filters, int $page = 0): bool
    {
        // We only cache the data of the first page
        if ($page > 1) {
            return false;
        }

        // If the number of filters is greater than one - no need to check the cache
        if (count($filters) > 1) {
            return  false;
        }

        // We only check the cache when we filter by collection
        if (count($filters) === 1 && !isset($filters['collection'])) {
            return false;
        }

        return true;
    }

    /**
     * Get Items that are related to the first collection
     *
     * @return Paginator
     */
    public function getItemsByFirstCollection(): Paginator
    {
        $firstCollection = Tag::where('key', 'collection')->orderBy('id')->first();
        return $this->getPaginated(['collection' => $firstCollection->value]);
    }

    /**
     * Get the latest 10 items on sales
     *
     * @return Collection
     */
    public function getLatestSalesItems(): Collection
    {
        return Cache::remember('latest_sales_items', now()->addDay(), function () {
            return  $this->searchItems(['collection' => 'Sale'])->orderByDesc('id')->limit(10)->get();
        });
    }
}
