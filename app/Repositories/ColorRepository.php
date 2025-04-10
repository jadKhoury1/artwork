<?php

namespace App\Repositories;

use App\Models\Color;
use Illuminate\Support\Facades\Cache;

class ColorRepository
{
    public function all()
    {
        return Cache::remember('colors', now()->addDay(), function () {
            return Color::all();
        });
    }
}
