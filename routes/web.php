<?php

use App\Http\Controllers\CongVanController;
use App\Http\Controllers\CoQuanBanHanhController;
use App\Http\Controllers\HinhThucVanBanController;
use App\Http\Controllers\LinhVucController;
use App\Http\Controllers\LoaiHinhCongVanController;
use App\Http\Controllers\LoaiVanBanController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SlideController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\UserController;
use App\Models\CongVan;
use App\Models\LoaiHinhCongVan;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('admin.login');
    // return view('admin.welcome');
});

// Route::get('admin', [UserController::class,'getAdminLogin']);
Route::get('admin/login', [UserController::class,'getAdminLogin']);
Route::post('admin/login', [UserController::class,'postAdminLogin']);
Route::get('admin/logout', [UserController::class,'getAdminLogout']);

Route::group(['prefix' => 'admin', 'middleware' => 'adminLogin'], function () {
    Route::get('/', [CongVanController::class,'getList']);
    Route::get('index', [CongVanController::class,'getList']);
	Route::group(['prefix' => 'cong-van'], function () {
        Route::get('/', [CongVanController::class,'getList']);
		Route::get('list', [CongVanController::class,'getList']);

		Route::get('edit/{id}', [CongVanController::class,'getEdit']);
		Route::post('edit/{id}', [CongVanController::class,'postEdit']);

		Route::get('add', [CongVanController::class,'getAdd']);
		Route::post('add', [CongVanController::class,'postAdd']);

		Route::get('delete/{id}', [CongVanController::class,'getDelete']);
	});

    Route::group(['prefix' => 'hinh-thuc-van-ban'], function () {
        Route::get('/', [HinhThucVanBanController::class,'getList']);
		Route::get('list', [HinhThucVanBanController::class,'getList']);

		Route::get('edit/{id}', [HinhThucVanBanController::class,'getEdit']);
		Route::post('edit/{id}', [HinhThucVanBanController::class,'postEdit']);

		Route::get('add', [HinhThucVanBanController::class,'getAdd']);
		Route::post('add', [HinhThucVanBanController::class,'postAdd']);

		Route::get('delete/{id}', [HinhThucVanBanController::class,'getDelete']);
	});

    Route::group(['prefix' => 'linh-vuc'], function () {
        Route::get('/', [LinhVucController::class,'getList']);
		Route::get('list', [LinhVucController::class,'getList']);

		Route::get('edit/{id}', [LinhVucController::class,'getEdit']);
		Route::post('edit/{id}', [LinhVucController::class,'postEdit']);

		Route::get('add', [LinhVucController::class,'getAdd']);
		Route::post('add', [LinhVucController::class,'postAdd']);

		Route::get('delete/{id}', [LinhVucController::class,'getDelete']);
	});

    Route::group(['prefix' => 'co-quan-ban-hanh'], function () {
        Route::get('/', [CoQuanBanHanhController::class,'getList']);
		Route::get('list', [CoQuanBanHanhController::class,'getList']);

		Route::get('edit/{id}', [CoQuanBanHanhController::class,'getEdit']);
		Route::post('edit/{id}', [CoQuanBanHanhController::class,'postEdit']);

		Route::get('add', [CoQuanBanHanhController::class,'getAdd']);
		Route::post('add', [CoQuanBanHanhController::class,'postAdd']);

		Route::get('delete/{id}', [CoQuanBanHanhController::class,'getDelete']);
	});

    Route::group(['prefix' => 'loai-van-ban'], function () {
        Route::get('/', [LoaiVanBanController::class,'getList']);
		Route::get('list', [LoaiVanBanController::class,'getList']);

		Route::get('edit/{id}', [LoaiVanBanController::class,'getEdit']);
		Route::post('edit/{id}', [LoaiVanBanController::class,'postEdit']);

		Route::get('add', [LoaiVanBanController::class,'getAdd']);
		Route::post('add', [LoaiVanBanController::class,'postAdd']);

		Route::get('delete/{id}', [LoaiVanBanController::class,'getDelete']);
	});

    Route::group(['prefix' => 'loai-hinh-cong-van'], function () {
        Route::get('/', [LoaiHinhCongVanController::class,'getList']);
		Route::get('list', [LoaiHinhCongVanController::class,'getList']);

		Route::get('edit/{id}', [LoaiHinhCongVanController::class,'getEdit']);
		Route::post('edit/{id}', [LoaiHinhCongVanController::class,'postEdit']);

		Route::get('add', [LoaiHinhCongVanController::class,'getAdd']);
		Route::post('add', [LoaiHinhCongVanController::class,'postAdd']);

		Route::get('delete/{id}', [LoaiHinhCongVanController::class,'getDelete']);
	});

    Route::group(['prefix' => 'user'], function () {
        Route::get('/', [UserController::class,'getList']);
		Route::get('list', [UserController::class,'getList']);

		Route::get('edit/{id}', [UserController::class,'getEdit']);
		Route::post('edit/{id}', [UserController::class,'postEdit']);

		Route::get('add', [UserController::class,'getAdd']);
		Route::post('add', [UserController::class,'postAdd']);

		Route::get('delete/{id}', [UserController::class,'getDelete']);
	});

    Route::group(['prefix' => 'slide'], function () {
        Route::get('/', [SlideController::class,'getList']);
		Route::get('list', [SlideController::class,'getList']);

		Route::get('edit/{id}', [SlideController::class,'getEdit']);
		Route::post('edit/{id}', [SlideController::class,'postEdit']);

		Route::get('add', [SlideController::class,'getAdd']);
		Route::post('add', [SlideController::class,'postAdd']);

		Route::get('delete/{id}', [SlideController::class,'getDelete']);
	});

    Route::group(['prefix' => 'role'], function () {
        Route::get('/', [RoleController::class,'getList']);
		Route::get('list', [RoleController::class,'getList']);

		Route::get('edit/{id}', [RoleController::class,'getEdit']);
		Route::post('edit/{id}', [RoleController::class,'postEdit']);

		Route::get('add', [RoleController::class,'getAdd']);
		Route::post('add', [RoleController::class,'postAdd']);

		Route::get('delete/{id}', [RoleController::class,'getDelete']);
	});
});







// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth'])->name('dashboard');

// require __DIR__.'/auth.php';

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

