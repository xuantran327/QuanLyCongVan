<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LoaiHinhCongVanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('loai_hinh_cong_van')->insert([
            ['name' => 'Công văn nội bộ', 'ten_khong_dau' => 'loai-hinh-cong-van-1'],
            ['name' => 'Loại hình công văn 2', 'ten_khong_dau' => 'loai-hinh-cong-van-2'],
            ['name' => 'Loại hình công văn 3', 'ten_khong_dau' => 'loai-hinh-cong-van-3'],
            ['name' => 'Loại hình công văn 4', 'ten_khong_dau' => 'loai-hinh-cong-van-4'],
            ['name' => 'Loại hình công văn 5', 'ten_khong_dau' => 'loai-hinh-cong-van-5'],
            ['name' => 'Loại hình công văn 6', 'ten_khong_dau' => 'loai-hinh-cong-van-6'],
            ['name' => 'Loại hình công văn 7', 'ten_khong_dau' => 'loai-hinh-cong-van-7'],
            ['name' => 'Loại hình công văn 8', 'ten_khong_dau' => 'loai-hinh-cong-van-8'],
            ['name' => 'Loại hình công văn 9', 'ten_khong_dau' => 'loai-hinh-cong-van-9'],

        ]);
    }
}
