<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class ActivityResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'title' => $this->title,
            'image' => $this->image,
            'content' => $this->content,
            'status' => $this->status,
            'type' => $this->type,
            'activity_date' => $this->activity_date,
            'user' => User::find($this->user_id),
            'date' => $this->created_at,
        ];
    }
}
