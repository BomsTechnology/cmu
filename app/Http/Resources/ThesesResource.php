<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ThesesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return parent::toArray($request);
        // return [
        //     'id' => $this->id,
        //     'theme' => $this->theme,
        //     'path' => $this->path,
        //     'year' => $this->year,
        //     'university' => $this->university,
        //     'user' => new MemberResource($this->user_id),
        // ];
    }
}
