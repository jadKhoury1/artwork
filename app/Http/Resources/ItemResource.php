<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Log;

class ItemResource extends JsonResource
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'item';

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'          => $this->id,
            'image'       => new ImageResource($this->whenLoaded('image')),
            'title'       => $this->title,
            'description' => $this->description,
            'price'       => $this->price,
            'count'       => $this->count,
            'tags'        => TagResource::collection($this->whenLoaded('tags')),
        ];
    }
}
