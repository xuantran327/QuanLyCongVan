<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\HinhThucVanBan;
use App\Models\CongVan;
use Illuminate\Support\Str;

class HinhThucVanBanController extends Controller
{
    public function getList() {
		$hinhthucvanban = HinhThucVanBan::all();
		return view('admin.hinhthucvanban.list', ['hinhthucvanban' => $hinhthucvanban]);
	}

    public function getAdd() {
		return view('admin.hinhthucvanban.add');
	}

    public function postAdd(Request $request) {
		$this->validate($request,
			[
				'Ten' => 'required|unique:hinh_thuc_van_ban,name|min:3|max:30',
			],
			[
				'Ten.required' => 'Bạn phải nhập tên hình thức văn bản',
				'Ten.unique' => 'Tên hình thức văn bản đã tồn tại',
				'Ten.min' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
				'Ten.max' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
			]);
		$hinhthucvanban = new HinhThucVanBan;
		$hinhthucvanban->name = $request->Ten;
		$hinhthucvanban->ten_khong_dau = Str::slug($request->Ten, '-', 'en');
		$hinhthucvanban->save();

		return redirect('admin/hinh-thuc-van-ban/add')->with('notification', 'Thêm thành công');

	}

    public function getEdit($id) {
		$hinhthucvanban = HinhThucVanBan::find($id);

		return view('admin.hinhthucvanban.edit', ['hinhthucvanban' => $hinhthucvanban]);
	}

    public function postEdit(Request $request, $id) {
		$hinhthucvanban = HinhThucVanBan::find($id);
		$this->validate($request,
			[
				'Ten' => 'required|unique:hinh_thuc_van_ban,name|min:3|max:30',
			],
			[
				'Ten.required' => 'Bạn phải nhập tên hình thức văn bản',
				'Ten.unique' => 'Tên hình thức văn bản đã tồn tại',
				'Ten.min' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
				'Ten.max' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
			]);

		$hinhthucvanban->name = $request->Ten;
		$hinhthucvanban->ten_khong_dau = Str::slug($request->Ten, '-', 'en');
		$hinhthucvanban->save();

		return redirect('admin/hinh-thuc-van-ban/edit/' . $id)->with('notification', 'Sửa thành công');
	}

    public function getDelete($id) {
		$hinhthucvanban = HinhThucVanBan::find($id);
		//kiểm tra khoá ngoại trước khi xoá
		$kiemtrakhoangoai = CongVan::where('id_hinh_thuc_van_ban', $id)->get();
		$soluong = count($kiemtrakhoangoai);
		if ($soluong) {
			return redirect('admin/hinh-thuc-van-ban/list')->with('error', 'Không được phép xoá danh mục này vì đang có ' . $soluong . ' công văn đang sử dụng danh mục. Vui lòng tìm và xoá toàn bộ những công văn đó trước!');
		} else {
			$hinhthucvanban->delete();
		}

		return redirect('admin/hinh-thuc-van-ban/list')->with('notification', 'Xoá thành công');
	}
}
