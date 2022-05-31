<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LoaiHinhCongVan;
use App\Models\CongVan;
use Illuminate\Support\Str;

class LoaiHinhCongVanController extends Controller
{
    public function getList() {
		$loaihinhcongvan = LoaiHinhCongVan::all();
		return view('admin.loaihinhcongvan.list', ['loaihinhcongvan' => $loaihinhcongvan]);
	}

    public function getAdd() {
		return view('admin.loaihinhcongvan.add');
	}

	public function postAdd(Request $request) {
		$this->validate($request,
			[
				'Ten' => 'required|unique:loai_hinh_cong_van,name|min:3|max:30',
			],
			[
				'Ten.required' => 'Bạn phải nhập tên loại hình công văn',
				'Ten.unique' => 'Tên loại hình công văn đã tồn tại',
				'Ten.min' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
				'Ten.max' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
			]);
		$loaihinhcongvan = new LoaiHinhCongVan;
		$loaihinhcongvan->name = $request->Ten;
		$loaihinhcongvan->ten_khong_dau = Str::slug($request->Ten, '-', 'en');
		$loaihinhcongvan->save();

		return redirect('admin/loai-hinh-cong-van/add')->with('notification', 'Thêm thành công');

	}

    public function getEdit($id) {
		$loaihinhcongvan = LoaiHinhCongVan::find($id);

		return view('admin.loaihinhcongvan.edit', ['loaihinhcongvan' => $loaihinhcongvan]);
	}

	public function postEdit(Request $request, $id) {
		$loaihinhcongvan = LoaiHinhCongVan::find($id);
		$this->validate($request,
			[
				'Ten' => 'required|unique:loai_hinh_cong_van,name|min:3|max:30',
			],
			[
				'Ten.required' => 'Bạn phải nhập tên loại hình công văn',
				'Ten.unique' => 'Tên loại hình công văn đã tồn tại',
				'Ten.min' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
				'Ten.max' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
			]);

		$loaihinhcongvan->name = $request->Ten;
		$loaihinhcongvan->ten_khong_dau = Str::slug($request->Ten, '-', 'en');
		$loaihinhcongvan->save();

		return redirect('admin/loai-hinh-cong-van/edit/' . $id)->with('notification', 'Sửa thành công');
	}

    public function getDelete($id) {
		$loaivanban = LoaiHinhCongVan::find($id);
		//kiểm tra khoá ngoại trước khi xoá
		$kiemtrakhoangoai = CongVan::where('id_loai_hinh_cong_van', $id)->get();
		$soluong = count($kiemtrakhoangoai);
		if ($soluong) {
			return redirect('admin/loai-hinh-cong-van/list')->with('error', 'Không được phép xoá danh mục này vì đang có ' . $soluong . ' công văn đang sử dụng danh mục. Vui lòng tìm và xoá toàn bộ những công văn đó trước!');
		} else {
			$loaivanban->delete();
		}

		return redirect('admin/loai-hinh-cong-van/list')->with('notification', 'Xoá thành công');
	}
}
