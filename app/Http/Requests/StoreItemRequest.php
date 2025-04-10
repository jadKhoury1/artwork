<?php

namespace App\Http\Requests;

use App\Rules\CollectionsExist;
use Illuminate\Foundation\Http\FormRequest;

class StoreItemRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'imageId' => ['required', 'integer', 'exists:images,id', 'unique:items,image_id'],
            'title' => ['required', 'string', 'min:3', 'max:100'],
            'description' => ['required', 'string', 'min:10', 'max:500'],
            'color' => ['required', 'string', 'exists:colors,value'],
            'price' => ['bail', 'required', 'numeric','min:1', 'max:999999'],
            'count' => ['bail', 'required', 'integer', 'min:1', 'max:999999'],
            'collections' => ['required', 'array', new CollectionsExist()],
        ];
    }
}
