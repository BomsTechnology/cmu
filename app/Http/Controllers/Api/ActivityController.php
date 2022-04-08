<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ActivityResource;
use App\Models\Activity;
use Illuminate\Http\Request;

class ActivityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ActivityResource::collection(Activity::latest()->get());
    }

    public function activity_home()
    {
        return ActivityResource::collection(Activity::orderBy('id', 'desc')->limit(6)->get());
    }

    public function get_by_year($year)
    {
        if($year == 'previous'){
            $syear = (((int) date("Y")) - 2).'-01-01';
            return ActivityResource::collection(Activity::where('activity_date', '<', $syear)->orderBy('id', 'desc')->get());
        }else{
            $startDate = $year.'-01-01';
            $endDate = $year.'-12-31';
            return ActivityResource::collection(Activity::whereBetween('activity_date', [$startDate, $endDate])->orderBy('id', 'desc')->get());
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $fileds = $request->validate([
            'title' => 'required|string|between:1,50',
            'content' => 'required|string',
            'type' => 'required|string',
            'activity_date' => 'required|date',
            'user_id' => 'integer|required',
        ]);

        $data = [
            'title' => $fileds['title'],
            'content' => $fileds['content'],
            'type' => $fileds['type'],
            'activity_date' => $fileds['activity_date'],
            'user_id' => $fileds['user_id'],
        ];

        if($request->file('image')){
            $request->validate([
                'image' => 'required|mimes:png,jpg,jpeng,gif|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/'.time().'.'. $request->file('image')->extension();
            $request->file('image')->storePubliclyAs('public', $filename);
            $data['image'] = $filename;
        }
      
    $activity = Activity::create($data);
   
    return new ActivityResource($activity);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function show(Activity $activity)
    {
        return new ActivityResource($activity);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Activity $activity)
    {
        $fileds = $request->validate([
            'title' => 'required|string|between:1,50',
            'content' => 'required|string',
            'type' => 'required|string',
            'activity_date' => 'required|date',
        ]);

        $data = [
            'title' => $fileds['title'],
            'content' => $fileds['content'],
            'activity_date' => $fileds['activity_date'],
            'type' => $fileds['type'],
        ];

        if($request->file('image')){
            $request->validate([
                'image' => 'required|mimes:png,jpg,jpeng,gif|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/'.time().'.'. $request->file('image')->extension();
            $request->file('image')->storePubliclyAs('public', $filename);
            $data['image'] = $filename;
        }

        $activity->update($data);
        return new ActivityResource($activity);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function destroy(Activity $activity)
    {
        $activity->delete();

        return response()->noContent();
    }
}
