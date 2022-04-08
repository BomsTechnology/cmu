<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AwardsRequest;
use App\Http\Resources\AwardsResource;
use App\Models\Awards;
use Illuminate\Http\Request;

class AwardsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return AwardsResource::collection(Awards::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AwardsRequest $request)
    {
        $awards = Awards::create($request->validated());
        return new AwardsResource($awards);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Awards  $awards
     * @return \Illuminate\Http\Response
     */
    public function show(Awards $awards)
    {
        return new AwardsResource($awards);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Awards  $awards
     * @return \Illuminate\Http\Response
     */
    public function update(AwardsRequest $request, Awards $awards)
    {
        $awards->update($request->validated());
        return new AwardsResource($awards);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Awards  $awards
     * @return \Illuminate\Http\Response
     */
    public function destroy(Awards $awards)
    {
        $awards->delete();

        return response()->noContent();
    }
}
