<?php

namespace App\Http\Middleware;

use App\Http\Resources\ColorCollection;
use App\Http\Resources\TagResource;
use App\Repositories\ColorRepository;
use App\Repositories\TagRepository;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{

    public function __construct(
        private ColorRepository $colorRepository,
        private TagRepository $tagRepository,
    ){}

    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'colors'      => new ColorCollection($this->colorRepository->all()),
            'collections' => TagResource::collection($this->tagRepository->getCollections()),
        ];
    }
}
