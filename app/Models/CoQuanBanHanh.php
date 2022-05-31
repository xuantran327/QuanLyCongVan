<?php

namespace App\Models;

use App\CongVan;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CoQuanBanHanh extends Model
{
    use HasFactory;
    protected $table = 'co_quan_ban_hanh';
    protected $fillable = [
        'name',
        'ten_khong_dau'
    ];
    public function cong_van() {
        return $this->hasMany(CongVan::class);
    }
}
