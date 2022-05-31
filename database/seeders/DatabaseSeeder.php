<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(RoleTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        // $this->call(CongVanTableSeeder::class);
        // $this->call(CoQuanBanHanhTableSeeder::class);
        // $this->call(HinhThucVanBanTableSeeder::class);
        // $this->call(LinhVucTableSeeder::class);
        // $this->call(LoaiHinhCongVanTableSeeder::class);
        // $this->call(LoaiVanBanTableSeeder::class);
    }
}
