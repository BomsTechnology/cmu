<?php

namespace App\Http\Resources;

use App\Models\University;
use Illuminate\Http\Resources\Json\JsonResource;

class MemberResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
        'id' => $this->id,
        'firstname' => $this->firstname,
        'lastname' => $this->lastname,
        'type' => $this->type,
        'field_research' => $this->field_research,
        'biography' => $this->biography,
        'cv_path' => $this->cv_path,
        'phone_number' => $this->phone_number,
        'researchgate_account' => $this->researchgate_account,
        'avatar' => $this->avatar,
        'university' => new UniversityResource(University::find($this->university_id)),
        'email' => $this->email,
        ];
    }
}
