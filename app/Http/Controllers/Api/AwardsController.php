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

    public function awards_others($id)
    {
        if ($id != 0) {
            return AwardsResource::collection(Awards::where('id', '<>', $id)->orderBy('id', 'desc')->limit(4)->get());
        } else {
            return AwardsResource::collection(Awards::orderBy('id', 'desc')->limit(4)->get());
        }
    }

    public function get_by_year($year)
    {
        if ($year == 'previous') {
            $syear = (((int) date("Y")) - 2) . '-01-01';
            return AwardsResource::collection(Awards::where('awards_date', '<', $syear)->orderBy('id', 'desc')->get());
        } else {
            $startDate = $year . '-01-01';
            $endDate = $year . '-12-31';
            return AwardsResource::collection(Awards::whereBetween('awards_date', [$startDate, $endDate])->orderBy('id', 'desc')->get());
        }
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
