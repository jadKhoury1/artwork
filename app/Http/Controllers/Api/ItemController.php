<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Base\BaseController;
use App\Http\Resources\ItemResource;
use App\Repositories\ItemRepository;

class ItemController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, ItemRepository $itemRepository)
    {
        $filters = $request->only([
            'collection', 'keyword', 'min_price', 'max_price', 'color'
        ]);

        $items = $itemRepository->searchItems($filters)->simplePaginate(8);;
        return $this->response->statusOk([
            'items' => [
                'data'  => ItemResource::collection($items),
                'links' => [
                    'next' => $items->nextPageUrl()
                ]
            ]
        ]);
    }
}


