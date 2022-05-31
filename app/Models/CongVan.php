<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CongVan extends Model
{
    use HasFactory;
    protected $table = 'cong_van';
    protected $fillable = [
        'so_hieu',
        'ngay_lap',
        'ngay_ky',
        'ngay_hieu_luc',
        'ngay_chuyen',
        'trich_yeu_noi_dung',
        'nguoi_ky',
        'ten_tep_dinh_kem',
        'con_hieu_luc',
        'ten_khong_dau'
    ];
    public function co_quan_ban_hanh() {
        return $this->belongsTo(CoQuanBanHanh::class, 'id_co_quan_ban_hanh', 'id');
    }
    public function hinh_thuc_van_ban() {
        return $this->belongsTo(HinhThucVanBan::class, 'id_hinh_thuc_van_ban', 'id');
    }
    public function linh_vuc() {
        return $this->belongsTo(LinhVuc::class, 'id_linh_vuc', 'id');
    }
    public function loai_hinh_cong_van() {
        return $this->belongsTo(LoaiHinhCongVan::class, 'id_loai_hinh_cong_van', 'id');
    }
    public function loai_van_ban() {
        return $this->belongsTo(LoaiVanBan::class, 'id_loai_van_ban', 'id');
    }
}
