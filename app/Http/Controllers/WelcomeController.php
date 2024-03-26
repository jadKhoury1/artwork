<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Http\Resources\ItemResource;
use App\Repositories\ItemRepository;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;


class WelcomeController extends Controller
{
    public function __construct(private ItemRepository $itemRepository)
    {
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'logoUrl' => storage_path('app/public/image/logo.avif'),
            'hotbid' => ItemResource::collection($this->itemRepository->getLatestSalesItems()),
            'items' => ItemResource::collection($this->itemRepository->getItemsByFirstCollection())
        ]);
    }
}
