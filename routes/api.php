<?php

use App\Http\Controllers\Api\ActivityController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\AwardsController;
use App\Http\Controllers\Api\JobOfferController;
use App\Http\Controllers\Api\MemberController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\ThesesController;
use App\Http\Controllers\Api\UniversityController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post("/register",[AuthController::class,'register']);
Route::post("/login",[AuthController::class,'login']);
Route::post("/login-admin",[AuthController::class,'login_admin']);

Route::get("/activities-front/{year}", [ActivityController::class,'get_by_year']);
Route::get("/activities-home", [ActivityController::class,'activity_home']);
Route::get("/activities2/{activity}", [ActivityController::class,'show2']);
Route::get("/activities", [ActivityController::class, 'index']);
Route::get("/activities/{activity}", [ActivityController::class, 'show']);

Route::get("/awards-front/{year}", [AwardsController::class,'get_by_year']);
Route::get("/awards", [AwardsController::class, 'index']);
Route::get("/awards/{awards}", [AwardsController::class, 'show']);

// ---------------------------------
Route::get("/members", [MemberController::class, 'index']);
Route::get("/members2/{member}", [MemberController::class,'show2']);
Route::get("/members/{member}", [MemberController::class, 'show']);

// ---------------------------------- 
Route::get("/theses", [ThesesController::class, 'index']);
Route::get("/theses2/{theses}", [ThesesController::class,'show2']);
Route::get("/theses/{theses}", [ThesesController::class, 'show']);
Route::get("/theses-user/{user}",[ThesesController::class,'theses_user']);

// ----------------------------------
Route::get("/jobOffers", [JobOfferController::class, 'index']);
Route::get("/jobOffers2/{jobOffers}", [JobOfferController::class,'show2']);
Route::get("/jobOffers/{jobOffers}", [JobOfferController::class, 'show']);

// ----------------------------------
Route::get("/posts2/{post}", [PostController::class,'show2']);
Route::get("/posts", [PostController::class, 'index']);
Route::get("/posts/{posts}", [PostController::class, 'show']);
Route::get("/posts-user/{user}",[PostController::class,'post_user']);
Route::get("/posts-home",[PostController::class,'post_home']);

Route::group(['middleware' => ['auth:sanctum']], function(){

    // Route::apiResource('members', MemberController::class);
    Route::post("/members", [MemberController::class, 'store']);
    Route::put("/members/{member}", [MemberController::class, 'update']);
    Route::delete("/members/{member}", [MemberController::class, 'destroy']);

    // 
    Route::post("/theses", [ThesesController::class, 'store']);
    Route::put("/theses/{theses}", [ThesesController::class, 'update']);
    Route::delete("/theses/{theses}", [ThesesController::class, 'destroy']);

     // 
     Route::post("/awards", [AwardsController::class, 'store']);
     Route::put("/awards/{awards}", [AwardsController::class, 'update']);
     Route::delete("/awards/{awards}", [AwardsController::class, 'destroy']);
    

    // Route::apiResource('jobOffers', JobOfferController::class);
    Route::post("/jobOffers", [JobOfferController::class, 'store']);
    Route::put("/jobOffers/{jobOffer}", [JobOfferController::class, 'update']);
    Route::delete("/jobOffers/{jobOffer}", [JobOfferController::class, 'destroy']);

    // Route::apiResource('activities', ActivityController::class);
    Route::post("/activities", [ActivityController::class, 'store']);
    Route::put("/activities/{activity}", [ActivityController::class, 'update']);
    Route::delete("/activities/{activity}", [ActivityController::class, 'destroy']);

    // Route::apiResource('posts', PostController::class);
    Route::post("/posts", [PostController::class, 'store']);
    Route::put("/posts/{post}", [PostController::class, 'update']);
    Route::delete("/posts/{post}", [PostController::class, 'destroy']);

    Route::apiResource('universities', UniversityController::class);

    Route::post("/logout",[AuthController::class,'logout']);
    Route::post("/verif-admin",[AuthController::class,'verif_admin']); 
});
