<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LoaiVanBanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('loai_van_ban')->insert([
            ['name' => 'Loại văn bản 1', 'ten_khong_dau' => 'loai-van-ban-1'],
            ['name' => 'Loại văn bản 2', 'ten_khong_dau' => 'loai-van-ban-2'],
            ['name' => 'Loại văn bản 3', 'ten_khong_dau' => 'loai-van-ban-3'],
            ['name' => 'Loại văn bản 4', 'ten_khong_dau' => 'loai-van-ban-4'],
            ['name' => 'Loại văn bản 5', 'ten_khong_dau' => 'loai-van-ban-5'],
            ['name' => 'Loại văn bản 6', 'ten_khong_dau' => 'loai-van-ban-6'],
            ['name' => 'Loại văn bản 7', 'ten_khong_dau' => 'loai-van-ban-7'],
            ['name' => 'Loại văn bản 8', 'ten_khong_dau' => 'loai-van-ban-8'],
            ['name' => 'Loại văn bản 9', 'ten_khong_dau' => 'loai-van-ban-9'],

        ]);
    }
}
