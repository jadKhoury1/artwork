<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Resources\ItemResource;
use App\Repositories\ItemRepository;
use App\Http\Requests\StoreItemRequest;

class ItemController extends Controller
{


    public function __construct(private ItemRepository $itemRepository){}

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filters = $request->only([
            'collection', 'keyword', 'min_price', 'max_price', 'color'
        ]);

        $items = $this->itemRepository->searchItems($filters)->get();
        return Inertia::render('Items/Search', [
            'items'   => ItemResource::collection($items),
            'filters' => $filters
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Items/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreItemRequest $request)
    {
        $item = $this->itemRepository->createItem($request->user()->id, $request->validated());
        return redirect('/items/' . $item->id);
    }

    /**
     * Display the specified resource.
     */
    public function show(Item $item)
    {
        $item->load(['image', 'tags']);
        return Inertia::render('Items/Details', [
            'data' => new ItemResource($item),
            'hotbid' => ItemResource::collection($this->itemRepository->getLatestSalesItems()),
            'items' => ItemResource::collection($this->itemRepository->getItemsByFirstCollection())
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
