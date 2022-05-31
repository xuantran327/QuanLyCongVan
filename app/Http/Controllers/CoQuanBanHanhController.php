<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CoQuanBanHanh;
use App\Models\CongVan;
use Illuminate\Support\Str;

class CoQuanBanHanhController extends Controller
{
    public function getList() {
		$coquanbanhanh = CoQuanBanHanh::all();
		return view('admin.coquanbanhanh.list', ['coquanbanhanh' => $coquanbanhanh]);
        // return view('welcome');
	}

    public function getAdd() {
		return view('admin.coquanbanhanh.add');
	}

	public function postAdd(Request $request) {
		$this->validate($request,
			[
				'Ten' => 'required|unique:co_quan_ban_hanh,name',
			],
			[
				'Ten.required' => 'Bạn phải nhập tên cơ quan ban hành',
				'Ten.unique' => 'Tên cơ quan ban hành đã tồn tại',
			]);
		$coquanbanhanh = new CoQuanBanHanh;
		$coquanbanhanh->name = $request->Ten;
		$coquanbanhanh->ten_khong_dau = Str::slug($request->Ten, '-', 'en');
		$coquanbanhanh->save();

		return redirect('admin/co-quan-ban-hanh/add')->with('notification', 'Thêm thành công');

	}

    public function getEdit($id) {
		$coquanbanhanh = CoQuanBanHanh::find($id);

		return view('admin.coquanbanhanh.edit', ['coquanbanhanh' => $coquanbanhanh]);
	}

	public function postEdit(Request $request, $id) {
		$coquanbanhanh = CoQuanBanHanh::find($id);
		$this->validate($request,
			[
				'Ten' => 'required|unique:co_quan_ban_hanh,name',
			],
			[
				'Ten.required' => 'Bạn phải nhập tên cơ quan ban hành',
				'Ten.unique' => 'Tên cơ quan ban hành đã tồn tại',
			]);

		$coquanbanhanh->name = $request->Ten;
		$coquanbanhanh->ten_khong_dau = Str::slug($request->Ten, '-', 'en');
		$coquanbanhanh->save();

		return redirect('admin/co-quan-ban-hanh/edit/' . $id)->with('notification', 'Sửa thành công');
	}

    public function getDelete($id) {
		$coquanbanhanh = CoQuanBanHanh::find($id);
		//kiểm tra khoá ngoại trước khi xoá
		$kiemtrakhoangoai = CongVan::where('id_co_quan_ban_hanh', $id)->get();
		$soluong = count($kiemtrakhoangoai);
		if ($soluong) {
			return redirect('admin/co-quan-ban-hanh/list')->with('error', 'Không được phép xoá danh mục này vì đang có ' . $soluong . ' công văn đang sử dụng danh mục. Vui lòng tìm và xoá toàn bộ những công văn đó trước!');
		} else {
			$coquanbanhanh->delete();
		}

		return redirect('admin/co-quan-ban-hanh/list')->with('notification', 'Xoá thành công');
	}

}
