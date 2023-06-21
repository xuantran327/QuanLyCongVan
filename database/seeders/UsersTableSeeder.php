<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            // ['name' => 'Xuân Trần', 'gender' => 0, 'dob' => '2002-03-27', 'phone_number' => '0987654321', 'email' => 'rapunzelxuantran@gmail.com', 'password' => bcrypt('123456'), 'role_id' => 1],
            ['name' => 'Xuân Trần', 'gender' => 0, 'dob' => '2002-03-27', 'phone_number' => '0987654321', 'email' => 'kimtaeyeonlovely5@gmail.com', 'password' => bcrypt('123456'), 'role_id' => 1],
        ]);
    }
}
