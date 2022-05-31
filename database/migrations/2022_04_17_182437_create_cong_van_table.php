<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCongVanTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cong_van', function (Blueprint $table) {
            $table->increments('id');
            $table->string('so_hieu');
            $table->date('ngay_lap')->nullable();
            $table->date('ngay_ky')->nullable();
            $table->date('ngay_hieu_luc')->nullable();
            $table->date('ngay_chuyen')->nullable();
            $table->string('trich_yeu_noi_dung');
            $table->string('nguoi_ky');
            $table->string('ten_tep_dinh_kem');
            $table->boolean('con_hieu_luc');
            $table->string('thumbnail')->default('thong-bao.jpg');
            $table->unsignedInteger('id_co_quan_ban_hanh');
            $table->foreign('id_co_quan_ban_hanh')->references('id')->on('co_quan_ban_hanh');
            $table->unsignedInteger('id_hinh_thuc_van_ban');
            $table->foreign('id_hinh_thuc_van_ban')->references('id')->on('hinh_thuc_van_ban');
            $table->unsignedInteger('id_linh_vuc');
            $table->foreign('id_linh_vuc')->references('id')->on('linh_vuc');
            $table->unsignedInteger('id_loai_van_ban');
            $table->foreign('id_loai_van_ban')->references('id')->on('loai_van_ban');
            $table->unsignedInteger('id_loai_hinh_cong_van');
            $table->foreign('id_loai_hinh_cong_van')->references('id')->on('loai_hinh_cong_van');
            $table->string('ten_khong_dau');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cong_van');
    }
}
