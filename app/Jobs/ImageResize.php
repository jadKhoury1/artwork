<?php

namespace App\Jobs;

use App\Helper;
use App\Models\Image;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Intervention\Image\Drivers\Imagick\Driver;
use Intervention\Image\ImageManager;

// digital-artworks

class ImageResize implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(
        private Image $image,
    ){}

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $uploadedImage = Storage::disk('s3')->get('original/' . $this->image->name);
        $imageInfo = pathinfo($this->image->name);
        $imageResizer = (new ImageManager(new Driver()))->read($uploadedImage);

        Log::debug('CREATING MEDIUM IMAGE');
        $mediumImage = $imageResizer->scaleDown('400')
            ->encodeByExtension($imageInfo['extension'], 100)
            ->toString();
        Log::debug('CREATING THUMBNAIL');
        $thumbnail = $imageResizer->scaleDown('160')
            ->encodeByExtension($imageInfo['extension'], 100)
            ->toString();

        Log::debug('STORING MEDIUM IMAGE IN S3');
        Storage::disk('s3')->put("medium/{$this->image->name}", $mediumImage);
        Log::debug('STORING THUMBNAIL IN S3');
        Storage::disk('s3')->put("thumbnail/{$this->image->name}", $thumbnail);

        Log::debug('STORING SCALED DOWN IMAGES IN DB');
        $this->image->update([
            'medium' => Helper::GetBaseS3Url() . '/medium/' . $this->image->name,
            'thumbnail' => Helper::GetBaseS3Url() , '/thumbnail/' . $this->image->name
        ]);
    }
}
