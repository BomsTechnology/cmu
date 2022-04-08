<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Http\Resources\PostResource2;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PostResource::collection(Post::latest()->get());
    }

    public function post_home()
    {
        return PostResource::collection(Post::orderBy('id', 'desc')->limit(3)->get());
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
            'user_id' => 'integer|required',
        ]);

        $data = [
            'title' => $fileds['title'],
            'content' => $fileds['content'],
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
      
        $post = Post::create($data);
    
        return new PostResource($post);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        return new PostResource($post);
    }
    public function show2(Post $post)
    {
        return new PostResource2($post);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        $fileds = $request->validate([
            'title' => 'required|string|between:1,50',
            'content' => 'required|string',
        ]);

        $data = [
            'title' => $fileds['title'],
            'content' => $fileds['content'],
        ];

        if($request->file('image')){
            $request->validate([
                'image' => 'required|mimes:png,jpg,jpeng,gif|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/'.time().'.'. $request->file('image')->extension();
            $request->file('image')->storePubliclyAs('public', $filename);
            $data['image'] = $filename;
        }

        $post->update($data);
        return new PostResource($post);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $post->delete();

        return response()->noContent();
    }
}
