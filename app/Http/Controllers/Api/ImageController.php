<?php

namespace App\Http\Controllers\Api;

use App\Jobs\ImageResize;
use App\Models\Image;
use Illuminate\Http\Request;
use App\Base\BaseController;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class ImageController extends BaseController
{
    /**
     * Upload Image and return Image Path
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function upload(Request $request): JsonResponse
    {
        $request->validate([
            'image' => 'bail|required|file|mimes:jpeg,png,jpg,webp,avif|max:5000'
        ]);

        $image = $request->file('image');
        $imageName = date('mdYHis') . '-'. uniqid()  . '-' . $image->getClientOriginalName();

        // Store image in S3
        Log::debug('STORING IMAGE IN S3');
        Storage::disk('s3')->putFileAs('original', $image, $imageName);

        // Store image info in the database
        Log::debug('CREATING IMAGE RECORD');
        $imageRecord = Image::create([
            'name' => $imageName,
            'original' => get_base_s3_url() . '/original/' . $imageName
        ]);

        Log::debug('DISPATCHING IMAGE RESIZE JOB');
        ImageResize::dispatch($imageRecord)->onQueue('images');

        return $this->response->statusOk([
            'id' => $imageRecord->id,
            'name' => $imageName,
            'original' => $imageRecord->original,
        ]);
    }
}
