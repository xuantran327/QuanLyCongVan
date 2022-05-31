<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LinhVuc;
use App\Models\CongVan;
use Illuminate\Support\Str;

class LinhVucController extends Controller
{
    public function getList() {
		$linhvuc = LinhVuc::all();
		return view('admin.linhvuc.list', ['linhvuc' => $linhvuc]);
	}

	public function getAdd() {
		return view('admin.linhvuc.add');
	}

    public function postAdd(Request $request) {
		$this->validate($request,
			[
				'Ten' => 'required|unique:linh_vuc,name|min:3|max:30',
			],
			[
				'Ten.required' => 'Bạn phải nhập tên lĩnh vực',
				'Ten.unique' => 'Tên lĩnh vực đã tồn tại',
				'Ten.min' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
				'Ten.max' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
			]);
		$linhvuc = new LinhVuc;
		$linhvuc->name = $request->Ten;
		$linhvuc->ten_khong_dau = Str::slug($request->Ten, '-', 'en');
		$linhvuc->save();

		return redirect('admin/linh-vuc/add')->with('notification', 'Thêm thành công');

    }

    public function getEdit($id) {
		$linhvuc = LinhVuc::find($id);

		return view('admin.linhvuc.edit', ['linhvuc' => $linhvuc]);
	}

	public function postEdit(Request $request, $id) {
		$linhvuc = LinhVuc::find($id);
		$this->validate($request,
			[
				'Ten' => 'required|unique:linh_vuc,name|min:3|max:30',
			],
			[
				'Ten.required' => 'Bạn phải nhập tên lĩnh vực',
				'Ten.unique' => 'Tên lĩnh vực đã tồn tại',
				'Ten.min' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
				'Ten.max' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
			]);

		$linhvuc->name = $request->Ten;
		$linhvuc->ten_khong_dau = Str::slug($request->Ten, '-', 'en');
		$linhvuc->save();

		return redirect('admin/linh-vuc/edit/' . $id)->with('notification', 'Sửa thành công');
	}

    public function getDelete($id) {
		$linhvuc = LinhVuc::find($id);
		//kiểm tra khoá ngoại trước khi xoá
		$kiemtrakhoangoai = CongVan::where('id_linh_vuc', $id)->get();
		$soluong = count($kiemtrakhoangoai);
		if ($soluong) {
			return redirect('admin/linh-vuc/list')->with('error', 'Không được phép xoá danh mục này vì đang có ' . $soluong . ' công văn đang sử dụng danh mục. Vui lòng tìm và xoá toàn bộ những công văn đó trước!');
		} else {
			$linhvuc->delete();
		}

		return redirect('admin/linh-vuc/list')->with('notification', 'Xoá thành công');
	}

}
