<?php

namespace App\Http\Requests;

use App\Models\Tag;
use Illuminate\Validation\Rule;
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
            'color' => ['required', Rule::in(['any', 'red', 'yellow', 'green', 'blue'])],
            'price' => ['bail', 'required', 'numeric','min:1', 'max:999999'],
            'count' => ['bail', 'required', 'integer', 'min:1', 'max:999999'],
            'collections' => ['required', 'array', function(string $attribute, mixed $value, \Closure $fail) {
                $count = Tag::where('key', 'collection')->whereIn('id', $value)->count();

                if ($count !== count($value)) {
                    $fail('The collections are not valid');
                }
            }],
        ];
    }
}
