<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CongVanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){
        DB::table('cong_van')->insert([

                [
                    "so_hieu" => "123456789",
                    "ngay_lap" => "2022-01-01",
                    "ngay_ky" => "2022-01-02",
                    "ngay_hieu_luc" => "2022-01-03",
                    "ngay_chuyen" => "2022-01-04",
                    "trich_yeu_noi_dung" => "Trích yếu nội dung 1",
                    "nguoi_ky" => "Xuân Trần",
                    "ten_tep_dinh_kem" => "Tệp 1",
                    "con_hieu_luc" => 1,
                    "id_co_quan_ban_hanh" => 1,
                    "id_hinh_thuc_van_ban" => 2,
                    "id_linh_vuc" => 3,
                    "id_loai_van_ban" => 4,
                    "id_loai_hinh_cong_van" => 5,
                    "ten_khong_dau" => "tep-1",
                    "created_at" => null,
                    "updated_at" => null
                ],
                [
                    "so_hieu" => "987654321",
                    "ngay_lap" => "2021-11-11",
                    "ngay_ky" => "2021-12-12",
                    "ngay_hieu_luc" => "2022-01-01",
                    "ngay_chuyen" => "2022-02-02",
                    "trich_yeu_noi_dung" => "Trích yếu nội dung 2",
                    "nguoi_ky" => "Lê Hạnh",
                    "ten_tep_dinh_kem" => "Tệp 2",
                    "con_hieu_luc" => 1,
                    "id_co_quan_ban_hanh" => 2,
                    "id_hinh_thuc_van_ban" => 2,
                    "id_linh_vuc" => 8,
                    "id_loai_van_ban" => 7,
                    "id_loai_hinh_cong_van" => 6,
                    "ten_khong_dau" => "tep-2",
                    "created_at" => null,
                    "updated_at" => null
                ],
                [
                    "so_hieu" => "465132789",
                    "ngay_lap" => "2010-10-10",
                    "ngay_ky" => "2011-11-11",
                    "ngay_hieu_luc" => "2012-12-12",
                    "ngay_chuyen" => "2020-02-20",
                    "trich_yeu_noi_dung" => "Trích yếu nội dung 3",
                    "nguoi_ky" => "Lê Linh",
                    "ten_tep_dinh_kem" => "Tệp 3",
                    "con_hieu_luc" => 1,
                    "id_co_quan_ban_hanh" => 2,
                    "id_hinh_thuc_van_ban" => 6,
                    "id_linh_vuc" => 3,
                    "id_loai_van_ban" => 7,
                    "id_loai_hinh_cong_van" => 5,
                    "ten_khong_dau" => "tep-3",
                    "created_at" => null,
                    "updated_at" => null
                ]

        ]);
    }
}
