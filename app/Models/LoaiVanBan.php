<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LoaiVanBan extends Model
{
    use HasFactory;
    protected $table = 'loai_van_ban';
    protected $fillable = [
        'name',
        'ten_khong_dau'
    ];
    public function cong_van() {
        return $this->hasMany(CongVan::class);
    }
}
