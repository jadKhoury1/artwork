<?php

namespace App\Http\Controllers\Api;

use App\Models\Image;
use Illuminate\Http\Request;
use App\Base\BaseController;
use Illuminate\Http\JsonResponse;
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
        $imageName = $image->getClientOriginalName();

        // Store image in S3
        Storage::disk('s3')->putFileAs('original', $image, $imageName);

        // Store image info in the database
        $imageRecord = Image::create([
            'name' => $imageName,
            'original' => $this->getBaseS3Url() . '/original/' . $imageName
        ]);

        return $this->response->statusOk([
            'id' => $imageRecord->id,
            'name' => $imageName,
            'original' => $imageRecord->original,
        ]);
    }

    /**
     * Build the base URL for the images stored in s3
     * @return string
     */
    private function getBaseS3Url(): string
    {
        return 'https://' . env('AWS_BUCKET', 'digital-artworks') . '.s3.'
            . env('AWS_DEFAULT_REGION', 'eu-west-1')
            . '.amazonaws.com';
    }
}
