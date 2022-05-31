<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LoaiVanBan;
use App\Models\CongVan;
use Illuminate\Support\Str;

class LoaiVanBanController extends Controller
{
    public function getList() {
		$loaivanban = LoaiVanBan::all();
		return view('admin.loaivanban.list', ['loaivanban' => $loaivanban]);
	}

    public function getAdd() {
		return view('admin.loaivanban.add');
	}

	public function postAdd(Request $request) {
		$this->validate($request,
			[
				'Ten' => 'required|unique:loai_van_ban,name|min:3|max:30',
			],
			[
				'Ten.required' => 'Bạn phải nhập tên loại văn bản',
				'Ten.unique' => 'Tên loại văn bản đã tồn tại',
				'Ten.min' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
				'Ten.max' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
			]);
		$loaivanban = new LoaiVanBan;
		$loaivanban->name = $request->Ten;
		$loaivanban->ten_khong_dau = Str::slug($request->Ten, '-', 'en');
		$loaivanban->save();

		return redirect('admin/loai-van-ban/add')->with('notification', 'Thêm thành công');

	}

    public function getEdit($id) {
		$loaivanban = LoaiVanBan::find($id);

		return view('admin.loaivanban.edit', ['loaivanban' => $loaivanban]);
	}

	public function postEdit(Request $request, $id) {
		$loaivanban = LoaiVanBan::find($id);
		$this->validate($request,
			[
				'Ten' => 'required|unique:loai_van_ban,name|min:3|max:30',
			],
			[
				'Ten.required' => 'Bạn phải nhập tên loại văn bản',
				'Ten.unique' => 'Tên loại văn bản đã tồn tại',
				'Ten.min' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
				'Ten.max' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
			]);

		$loaivanban->name = $request->Ten;
		$loaivanban->ten_khong_dau = Str::slug($request->Ten, '-', 'en');
		$loaivanban->save();

		return redirect('admin/loai-van-ban/edit/' . $id)->with('notification', 'Sửa thành công');
	}

    public function getDelete($id) {
		$loaivanban = LoaiVanBan::find($id);
		//kiểm tra khoá ngoại trước khi xoá
		$kiemtrakhoangoai = CongVan::where('id_loai_van_ban', $id)->get();
		$soluong = count($kiemtrakhoangoai);
		if ($soluong) {
			return redirect('admin/loai-van-ban/list')->with('error', 'Không được phép xoá danh mục này vì đang có ' . $soluong . ' công văn đang sử dụng danh mục. Vui lòng tìm và xoá toàn bộ những công văn đó trước!');
		} else {
			$loaivanban->delete();
		}

		return redirect('admin/loai-van-ban/list')->with('notification', 'Xoá thành công');
	}
}
