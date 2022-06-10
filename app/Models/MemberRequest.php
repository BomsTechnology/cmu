<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MemberRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'firstname',
        'lastname',
        'field_research',
        'biography',
        'cv_path',
        'phone_number',
        'researchgate_account',
        'university',
        'email',
        'theses_year',
    ];
}
