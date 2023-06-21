<?php

use App\Http\Controllers\AuthController;
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
Route::get('user/{id}', [PagesController::class,'user']);
Route::post('upload-avatar', [PagesController::class,'uploadAvatar']);
Route::post('edit-user/{id}', [PagesController::class,'editUser']);
Route::post('forgot-password', [AuthController::class, 'forgotPassword']);

Route::get('new-dispatch', [PagesController::class,'newDispatch']);
Route::get('dispatch-detail/{id}', [PagesController::class,'dispatchDetails']);
Route::get('dispatch-list', [PagesController::class,'dispatchList']);
Route::get('dispatch-list/{search}', [PagesController::class,'search']);

Route::group(['prefix' => 'dispatch'], function () {
    Route::get('{id}', [PagesController::class,'getDispatch']);
    Route::post('add', [PagesController::class,'addDispatch']);
    Route::post('edit/{id}', [PagesController::class,'editDispatch']);
    Route::get('delete/{id}', [PagesController::class,'deleteDispatch']);
    Route::post('upload', [PagesController::class,'uploadDispatch']);
});

Route::get('info', [PagesController::class,'infoList']);

Route::group(['prefix' => 'issuing-agency'], function () {
    Route::get('list', [PagesController::class,'issuingAgencyList']);
    Route::get('search/{search}', [PagesController::class,'issuingAgencySearch']);
    Route::get('{id}', [PagesController::class,'getIssuingAgency']);
    Route::post('add', [PagesController::class,'addIssuingAgency']);
    Route::post('edit/{id}', [PagesController::class,'editIssuingAgency']);
    Route::get('delete/{id}', [PagesController::class,'deleteIssuingAgency']);
});

Route::group(['prefix' => 'document-form'], function () {
    Route::get('list', [PagesController::class,'documentFormList']);
    Route::get('search/{search}', [PagesController::class,'documentFormSearch']);
    Route::get('{id}', [PagesController::class,'getDocumentForm']);
    Route::post('add', [PagesController::class,'addDocumentForm']);
    Route::post('edit/{id}', [PagesController::class,'editDocumentForm']);
    Route::get('delete/{id}', [PagesController::class,'deleteDocumentForm']);
});

Route::group(['prefix' => 'field'], function () {
    Route::get('list', [PagesController::class,'fieldList']);
    Route::get('search/{search}', [PagesController::class,'fieldSearch']);
    Route::get('{id}', [PagesController::class,'getField']);
    Route::post('add', [PagesController::class,'addField']);
    Route::post('edit/{id}', [PagesController::class,'editField']);
    Route::get('delete/{id}', [PagesController::class,'deleteField']);
});

Route::group(['prefix' => 'document-type'], function () {
    Route::get('list', [PagesController::class,'documentTypeList']);
    Route::get('search/{search}', [PagesController::class,'documentTypeSearch']);
    Route::get('{id}', [PagesController::class,'getDocumentType']);
    Route::post('add', [PagesController::class,'addDocumentType']);
    Route::post('edit/{id}', [PagesController::class,'editDocumentType']);
    Route::get('delete/{id}', [PagesController::class,'deleteDocumentType']);
});

Route::group(['prefix' => 'dispatch-type'], function () {
    Route::get('list', [PagesController::class,'dispatchTypeList']);
    Route::get('search/{search}', [PagesController::class,'dispatchTypeSearch']);
    Route::get('{id}', [PagesController::class,'getDispatchType']);
    Route::post('add', [PagesController::class,'addDispatchType']);
    Route::post('edit/{id}', [PagesController::class,'editDispatchType']);
    Route::get('delete/{id}', [PagesController::class,'deleteDispatchType']);
});

Route::group(['prefix' => 'slide'], function () {
    Route::get('list', [PagesController::class,'slideList']);
    Route::get('search/{search}', [PagesController::class,'slideSearch']);
    Route::get('{id}', [PagesController::class,'getSlide']);
    Route::post('add', [PagesController::class,'addSlide']);
    Route::post('edit/{id}', [PagesController::class,'editSlide']);
    Route::post('upload', [PagesController::class,'uploadSlide']);
    Route::get('delete/{id}', [PagesController::class,'deleteSlide']);
});
