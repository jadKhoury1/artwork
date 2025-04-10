<?php

namespace App\Rules;

use Closure;
use App\Models\Tag;
use Illuminate\Contracts\Validation\ValidationRule;

class CollectionsExist implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $tagsCount = Tag::where('key', 'collection')->whereIn('id', $value)->count();

        // check if the number of fetched records is different from the number of received collections
        if (count($value) !== $tagsCount) {
            $fail('The collections are not valid.');
        }
    }
}
