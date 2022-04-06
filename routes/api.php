<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\MemberController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\UniversityController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post("/register",[AuthController::class,'register']);
Route::post("/login",[AuthController::class,'login']);
Route::post("/login-admin",[AuthController::class,'login_admin']);
Route::post("/verif-admin",[AuthController::class,'verif_admin']);

Route::group(['middleware' => ['auth:sanctum']], function(){

    Route::apiResource('members', MemberController::class);
    Route::get("/members2/{member}", [MemberController::class,'show2']);

    Route::post("/logout",[AuthController::class,'logout']);

    Route::apiResource('universities', UniversityController::class);
    
    Route::apiResource('posts', PostController::class);
    Route::get("/posts2/{post}", [PostController::class,'show2']);
    Route::get("/posts-user/{user}",[PostController::class,'post_user']);
});
