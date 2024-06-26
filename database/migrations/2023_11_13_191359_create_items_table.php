<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\User;
use App\Models\Image;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)
                ->constrained()
                ->cascadeOnUpdate()
                ->cascadeOnDelete();

            $table->foreignIdFor(Image::class)
                ->constrained()
                ->restrictOnUpdate()
                ->restrictOnDelete();

            $table->enum('status', [
               'PENDING_CREATION_APPROVAL',
               'PENDING_UPDATE_APPROVAL',
               'ACTIVE'
            ]);

            $table->string('title');
            $table->text('description');
            $table->double('price');
            $table->integer('count');
            $table->softDeletes();
            $table->timestamps();

            $table->index(['price']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('items');
    }
};
