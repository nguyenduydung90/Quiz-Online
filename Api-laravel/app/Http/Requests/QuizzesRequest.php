<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class QuizzesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'text'=> "required|min:10|max:10000",
            'option1'=> "required|min:1|max:255",
            'option2'=> "required|min:1|max:255",
            'option3'=> "required|min:1|max:255",
            'option4'=> "required|min:1|max:255",
            'correctAnswer'=> "required|min:1|max:255",
            'category_id'=> "required|numeric"
        ];
    }

    public function messages()
    {
        return [
            'text.required'=> 'Không được để trống',
            'option1.required'=> 'Không được để trống',
            'option2.required'=> 'Không được để trống',
            'option3.required'=> 'Không được để trống',
            'option4.required'=> 'Không được để trống',
            'correctAnswer.required'=> 'Không được để trống',
            'category_id.required'=> 'Không được để trống',
            'text.min'=> 'Không được nhỏ hơn một ký tự',
            'option1.min'=> 'Không được nhỏ hơn một ký tự',
            'option2.min'=> 'Không được nhỏ hơn một ký tự',
            'option3.min'=> 'Không được nhỏ hơn một ký tự',
            'option4.min'=> 'Không được nhỏ hơn một ký tự',
            'correctAnswer.min'=> 'Không được nhỏ hơn một ký tự',
            'category_id.min'=> 'Không được nhỏ hơn một ký tự',
            'text.max' => ' Không được quá 10000 ký tự',
            'option1.max' => ' Không được quá 255 ký tự',
            'option2.max' => ' Không được quá 255 ký tự',
            'option3.max' => ' Không được quá 255 ký tự',
            'option4.max' => ' Không được quá 255 ký tự',
            'correctAnswer.max' => ' Không được quá 255 ký tự',
            'category_id.numeric' => 'Kiểu số'
        ];
    }
}
