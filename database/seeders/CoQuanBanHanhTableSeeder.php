<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CoQuanBanHanhTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('co_quan_ban_hanh')->insert([
            ['name' => 'Cơ quan 1', 'ten_khong_dau' => 'co-quan-1'],
            ['name' => 'Cơ Quan 2', 'ten_khong_dau' => 'co-quan-2'],
            ['name' => 'Cơ Quan 3', 'ten_khong_dau' => 'co-quan-3'],
            ['name' => 'Cơ Quan 4', 'ten_khong_dau' => 'co-quan-4'],
            ['name' => 'Cơ Quan 5', 'ten_khong_dau' => 'co-quan-5'],
            ['name' => 'Cơ Quan 6', 'ten_khong_dau' => 'co-quan-6'],
            ['name' => 'Cơ Quan 7', 'ten_khong_dau' => 'co-quan-7'],
            ['name' => 'Cơ Quan 8', 'ten_khong_dau' => 'co-quan-8'],
            ['name' => 'Cơ Quan 9', 'ten_khong_dau' => 'co-quan-9'],

        ]);
    }
}
