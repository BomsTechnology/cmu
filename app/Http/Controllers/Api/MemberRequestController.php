<?php

namespace App\Http\Controllers\Api;

use App\Models\MemberRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\MemberRequestResource;

class MemberRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            'firstname' => 'required|string',
            'lastname' => 'required|string',
            'theses_year' => 'required|date',
            'field_research' => 'required|string',
            'biography' => 'required|string',
            'phone_number' => 'required|string',
            'researchgate_account' => 'nullable',
            'university' => 'required|string',
            'email' => 'required|string',
        ]);

        $data = [
            'firstname' => $fileds['firstname'],
            'lastname' => $fileds['lastname'],
            'theses_year' => $fileds['theses_year'],
            'field_research' => $fileds['field_research'],
            'biography' => $fileds['biography'],
            'phone_number' => $fileds['phone_number'],
            'researchgate_account' => $fileds['researchgate_account'],
            'university' => $fileds['university'],
            'email' => $fileds['email'],
        ];

        if ($request->file('cv_path')) {
            $request->validate([
                'cv_path' => 'required|mimes:pdf|max:2048'
            ]);
            $filename = '/uploads/' . time() . '.' . $request->file('cv_path')->extension();
            $request->file('cv_path')->storePubliclyAs('public', $filename);
            $data['cv_path'] = $filename;
        }

        $memberRequest = MemberRequest::create($data);

        return new MemberRequestResource($memberRequest);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MemberRequest  $memberRequest
     * @return \Illuminate\Http\Response
     */
    public function show(MemberRequest $memberRequest)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MemberRequest  $memberRequest
     * @return \Illuminate\Http\Response
     */
    public function edit(MemberRequest $memberRequest)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MemberRequest  $memberRequest
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MemberRequest $memberRequest)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MemberRequest  $memberRequest
     * @return \Illuminate\Http\Response
     */
    public function destroy(MemberRequest $memberRequest)
    {
        //
    }
}
