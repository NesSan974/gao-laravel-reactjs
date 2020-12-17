<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Attribution as RessourceAttribution;


class Client extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'nom' => $this->name,
            'prenom' => $this->firstname,
           // 'attributions' => RessourceAttribution::collection($this->attributions),

        ];
    }
}
