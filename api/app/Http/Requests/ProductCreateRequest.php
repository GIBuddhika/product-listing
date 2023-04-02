<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class ProductCreateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required',
            'description' => 'required',
            'price' => 'required|numeric|regex:/^[0-9]\d{0,9}(\.\d{1,2})?%?$/',
            'quantity' => 'required|numeric',
        ];
    }

    public function messages(): array
    {
        return [
            'required' => 'required',
            'numeric' => 'invalid',
            'regex' => 'invalid',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'errors' => $validator->errors()
        ]));
    }
}
