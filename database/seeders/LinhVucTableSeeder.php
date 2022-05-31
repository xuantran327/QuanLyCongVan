<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LinhVucTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('linh_vuc')->insert([
            ['name' => 'Lĩnh vực 1', 'ten_khong_dau' => 'linh-vuc-1'],
            ['name' => 'Lĩnh vực 2', 'ten_khong_dau' => 'linh-vuc-2'],
            ['name' => 'Lĩnh vực 3', 'ten_khong_dau' => 'linh-vuc-3'],
            ['name' => 'Lĩnh vực 4', 'ten_khong_dau' => 'linh-vuc-4'],
            ['name' => 'Lĩnh vực 5', 'ten_khong_dau' => 'linh-vuc-5'],
            ['name' => 'Lĩnh vực 6', 'ten_khong_dau' => 'linh-vuc-6'],
            ['name' => 'Lĩnh vực 7', 'ten_khong_dau' => 'linh-vuc-7'],
            ['name' => 'Lĩnh vực 8', 'ten_khong_dau' => 'linh-vuc-8'],
            ['name' => 'Lĩnh vực 9', 'ten_khong_dau' => 'linh-vuc-9'],

        ]);
    }
}
