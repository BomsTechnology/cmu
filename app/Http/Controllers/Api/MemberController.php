<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\MemberResource;
use App\Http\Resources\MemberResource2;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return MemberResource::collection(User::latest()->get());
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
            'type' => 'required|string',
            'field_research' => 'required|string',
            'biography' => 'required|string',
            'phone_number' => 'required|string',
            'researchgate_account' => 'required|string',
            'university_id' => 'required|string',
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        $data = [
            'firstname' => $fileds['firstname'],
            'lastname' => $fileds['lastname'],
            'type' => $fileds['type'],
            'field_research' => $fileds['field_research'],
            'biography' => $fileds['biography'],
            'phone_number' => $fileds['phone_number'],
            'researchgate_account' => $fileds['researchgate_account'],
            'university_id' => $fileds['university_id'],
            'email' => $fileds['email'],
            'password' => Hash::make($fileds['password']),
        ];

        if ($request->file('cv_path')) {
            $request->validate([
                'cv_path' => 'required|mimes:pdf|max:2048'
            ]);
            $filename = '/uploads/' . time() . '.' . $request->file('cv_path')->extension();
            $request->file('cv_path')->storePubliclyAs('public', $filename);
            $data['cv_path'] = $filename;
        }

        if ($request->file('avatar')) {
            $request->validate([
                'avatar' => 'required|mimes:png,jpg,jpeg,gif|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/' . time() . '.' . $request->file('avatar')->extension();
            $request->file('avatar')->storePubliclyAs('public', $filename);
            $data['avatar'] = $filename;
        }

        $user = User::create($data);

        return new MemberResource($user);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show($user)
    {
        return new MemberResource2(User::find($user));
    }

    public function show2($user)
    {
        return new MemberResource(User::find($user));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $user)
    {
        $fileds = $request->validate([
            'firstname' => 'required|string',
            'lastname' => 'required|string',
            'type' => 'required|string',
            'field_research' => 'required|string',
            'biography' => 'required|string',
            'phone_number' => 'required|string',
            'researchgate_account' => 'required|string',
            'university_id' => 'required|string',
            'email' => 'required|string',
        ]);

        $data = [
            'firstname' => $fileds['firstname'],
            'lastname' => $fileds['lastname'],
            'type' => $fileds['type'],
            'field_research' => $fileds['field_research'],
            'biography' => $fileds['biography'],
            'phone_number' => $fileds['phone_number'],
            'researchgate_account' => $fileds['researchgate_account'],
            'university_id' => $fileds['university_id'],
            'email' => $fileds['email'],
        ];

        if ($request->file('cv_path')) {
            $request->validate([
                'cv_path' => 'required|mimes:png,jpg,jpeg,csv,txt,xlx,xls,pdf|max:2048'
            ]);
            $filename = '/uploads/' . time() . '.' . $request->file('cv_path')->extension();
            $request->file('cv_path')->storePubliclyAs('public', $filename);
            $data['cv_path'] = $filename;
        }

        if ($request->file('avatar')) {
            $request->validate([
                'avatar' => 'required|mimes:png,jpg,jpeng,gif|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/' . time() . '.' . $request->file('avatar')->extension();
            $request->file('avatar')->storePubliclyAs('public', $filename);
            $data['avatar'] = $filename;
        }

        $user = User::find($user);
        $user->update($data);

        return new MemberResource($user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy($user)
    {
        $user = User::find($user);
        $user->delete();

        return response()->noContent();
    }
}
