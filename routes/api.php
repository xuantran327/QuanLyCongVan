<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PagesController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/', [PagesController::class,'index']);
Route::post('login', [PagesController::class,'login']);
Route::get('logout', [PagesController::class,'logout']);
Route::get('slide', [PagesController::class,'slide']);
Route::get('new-dispatch', [PagesController::class,'newDispatch']);
Route::get('dispatch-detail/{id}', [PagesController::class,'dispatchDetails']);
Route::get('dispatch-list', [PagesController::class,'dispatchList']);
Route::get('dispatch-list/{search}', [PagesController::class,'search']);
Route::get('user', [PagesController::class,'user']);
