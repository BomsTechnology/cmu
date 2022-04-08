<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ThesesResource;
use App\Models\Theses;
use Illuminate\Http\Request;

class ThesesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ThesesResource::collection(Theses::latest()->get());
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
            'theme' => 'required|string|between:1,100',
            'university' => 'required|string',
            'year' => 'required|date',
            'user_id' => 'integer|required',
            'path' => 'required|mimes:pdf|max=2048'
        ]);

        $filename = '/uploads/'.time().'.'. $request->file('path')->extension();
        $request->file('path')->storePubliclyAs('public', $filename);
        $data['path'] = $filename;

        $data = [
            'theme' => $fileds['theme'],
            'university' => $fileds['university'],
            'year' => $fileds['year'],
            'user_id' => $fileds['user_id'],
            'path' => $filename,
        ];
      
        $theses = Theses::create($data);
        return new ThesesResource($theses);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Theses  $theses
     * @return \Illuminate\Http\Response
     */
    public function show(Theses $theses)
    {
        return new ThesesResource($theses);
    }

    public function show2(Theses $theses)
    {
        return new ThesesResource($theses);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Theses  $theses
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Theses $theses)
    {
        $fileds = $request->validate([
            'theme' => 'required|string|between:1,100',
            'university' => 'required|string',
            'year' => 'required|date',
        ]);

        $data = [
            'theme' => $fileds['theme'],
            'university' => $fileds['university'],
            'year' => $fileds['year'],
        ];

        if($request->file('path')){
            $request->validate([
                'path' => 'required|mimes:pdf|max=2048'
            ]);
            $filename = '/uploads/'.time().'.'. $request->file('path')->extension();
            $request->file('path')->storePubliclyAs('public', $filename);
            $data['path'] = $filename;
        }

        $theses->update($data);
        return new ThesesResource($theses);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Theses  $theses
     * @return \Illuminate\Http\Response
     */
    public function destroy(Theses $theses)
    {
        $theses->delete();

        return response()->noContent();
    }
}
