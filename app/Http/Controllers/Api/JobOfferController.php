<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\JobOfferRequest;
use App\Http\Resources\JobOfferResource;
use App\Models\JobOffer;
use Illuminate\Http\Request;

class JobOfferController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return JobOfferResource::collection(JobOffer::latest()->get());
    }

    public function jobOffers_others($id)
    {
        if ($id != 0) {
            return JobOfferResource::collection(JobOffer::where('id', '<>', $id)->orderBy('id', 'desc')->limit(4)->get());
        } else {
            return JobOfferResource::collection(JobOffer::orderBy('id', 'desc')->limit(4)->get());
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(JobOfferRequest $request)
    {
        $jobOffer = JobOffer::create($request->validated());
        return new JobOfferResource($jobOffer);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\JobOffer  $jobOffer
     * @return \Illuminate\Http\Response
     */
    public function show($jobOffer)
    {
        return new JobOfferResource(JobOffer::find($jobOffer));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\JobOffer  $jobOffer
     * @return \Illuminate\Http\Response
     */
    public function update(JobOfferRequest $request, JobOffer $jobOffer)
    {
        $jobOffer->update($request->validated());
        return new JobOfferResource($jobOffer);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\JobOffer  $jobOffer
     * @return \Illuminate\Http\Response
     */
    public function destroy(JobOffer $jobOffer)
    {
        $jobOffer->delete();

        return response()->noContent();
    }
}
