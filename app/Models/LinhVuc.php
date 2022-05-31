<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LinhVuc extends Model
{
    use HasFactory;
    protected $table = 'linh_vuc';
    protected $fillable = [
        'name',
        'ten_khong_dau'
    ];
    public function cong_van() {
        return $this->hasMany(CongVan::class);
    }
}
