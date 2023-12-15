<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use App\Models\Item;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Requests\StoreItemRequest;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Items/Search');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Items/Create', [
            'collections' => Tag::select(['id', 'value'])->where('key', 'collection')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreItemRequest $request)
    {
        $data = $request->validated();
        $itemData = [
            'user_id'     => $request->user()->id,
            'image_id'    => $data['imageId'],
            'status'      => Item::$STATUS_ACTIVE,
            'title'       => $data['title'],
            'description' => $data['description'],
            'color'       => $data['color'],
            'price'       => $data['price'],
            'count'       => $data['count']
        ];
        $item = Item::create($itemData);
        $item->tags()->sync($data['collections']);
        return redirect('/');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
