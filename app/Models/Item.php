<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Item
 *
 * @property int $id
 * @property int $user_id
 * @property int $image_id
 * @property Image $image
 * @property Tag[] $tags
 * @property string $status
 * @property string $title
 * @property string $description
 * @property float $price
 * @property int $count
 * @property Carbon $deleted_at
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @method static Builder searchByTitle(string $keyword)
 * @method static Builder searchByTags(number[] $tags)
 * @method static Builder searchByCollection(string $collection)
 * @method static Builder searchByMinPrice(float $minPrice)
 * @method static Builder searchByMaxPrice(float $maxPrice)
 * @method static Builder searchByColors(number[] $colors)
 */
class Item extends Model
{
    use HasFactory, SoftDeletes;

    public static $STATUS_PENDING_CREATION_APPROVAL = 'PENDING_CREATION_APPROVAL';
    public static $STATUS_PENDING_UPDATE_APPROVAL = 'PENDING_UPDATE_APPROVAL';
    public static $STATUS_ACTIVE = 'ACTIVE';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id', 'image_id', 'status', 'title',
        'description', 'price', 'count', 'deleted_at'
    ];

    /**
     * Get the user that owns the item
     *
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the image that belongs to the item
     *
     * @return BelongsTo
     */
    public function image(): BelongsTo
    {
        return $this->belongsTo(Image::class);
    }

    /**
     * Get the tags that belong to the item
     *
     * @return BelongsToMany
     */
    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class);
    }

    /**
     * Get the colors that belong to the item
     *
     * @return BelongsToMany
     */
    public function colors(): BelongsToMany
    {
        return $this->belongsToMany(Color::class, 'item_color');
    }

    /**
     * Search items by title
     *
     * @param Builder $query
     * @param string $keyword
     * @return Builder
     */
    public function scopeSearchByTitle(Builder $query, string $keyword): Builder
    {
        return $query->where('title', 'ILIKE', "%{$keyword}%");
    }

    /**
     * Search Items by tags ids
     *
     * @param Builder $query
     * @param number[] $tags
     * @return Builder
     */
    public function scopeSearchByTags(Builder $query, array $tags): Builder
    {
        return $query->whereHas('tags', function (Builder $query) use ($tags){
            $query->whereIn('id', $tags);
        });
    }

    /**
     * Search Items by tag name
     *
     * @param Builder $query
     * @param string $collection
     * @return Builder
     */
    public function scopeSearchByCollection(Builder $query, string $collection): Builder
    {
        return $query->whereHas('tags', function (Builder $query) use ($collection) {
            $query->where('key', 'collection')
                  ->where('value', $collection);
        });
    }

    /**
     * Search Items by min price
     *
     * @param Builder $query
     * @param float $minPrice
     * @return Builder
     */
    public function scopeSearchByMinPrice(Builder $query, float $minPrice): Builder
    {
        return $query->where('price', '>=', $minPrice);
    }

    /**
     * Search Items by max price
     *
     * @param Builder $query
     * @param float $maxPrice
     * @return Builder
     */
    public function scopeSearchByMaxPrice(Builder $query, float $maxPrice): Builder
    {
        return $query->where('price', '<=', $maxPrice);
    }

    /**
     * Search Items by color ids
     *
     * @param Builder $query
     * @param number[] $colors
     * @return Builder
     */
    public function scopeSearchByColors(Builder $query, array $colors): Builder
    {
        return $query->whereHas('colors', function (Builder $query) use ($colors) {
            $query->whereIn('value', $colors);
        });
    }
}
