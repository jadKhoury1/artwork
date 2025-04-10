<?php

namespace App\Repositories;

use App\Models\Tag;
use Illuminate\Support\Facades\Cache;

class TagRepository
{
    public function getCollections()
    {
        return Cache::remember('collections', now()->addDay(), function () {
            return Tag::where('key', 'collection')->orderBy('id')->get();
        });
    }
}
