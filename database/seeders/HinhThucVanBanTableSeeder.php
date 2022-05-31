<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HinhThucVanBanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('hinh_thuc_van_ban')->insert([
            ['name' => 'Hình thức 1', 'ten_khong_dau' => 'hinh-thuc-1'],
            ['name' => 'Hình thức 2', 'ten_khong_dau' => 'hinh-thuc-2'],
            ['name' => 'Hình thức 3', 'ten_khong_dau' => 'hinh-thuc-3'],
            ['name' => 'Hình thức 4', 'ten_khong_dau' => 'hinh-thuc-4'],
            ['name' => 'Hình thức 5', 'ten_khong_dau' => 'hinh-thuc-5'],
            ['name' => 'Hình thức 6', 'ten_khong_dau' => 'hinh-thuc-6'],
            ['name' => 'Hình thức 7', 'ten_khong_dau' => 'hinh-thuc-7'],
            ['name' => 'Hình thức 8', 'ten_khong_dau' => 'hinh-thuc-8'],
            ['name' => 'Hình thức 9', 'ten_khong_dau' => 'hinh-thuc-9'],

        ]);
    }
}
