<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class RoleController extends Controller
{
    public function show() {
        //echo "Hello World!";
        return view('welcome');
    }
    public function getList() {
		$role = Role::all();
		return view('admin.role.list', ['role' => $role]);
        // return view('welcome');
        // echo 'List';
	}

    public function getAdd() {
		return view('admin.role.add');
	}

    public function postAdd(Request $request) {
		$this->validate($request,
			[
				'Ten' => 'required|unique:roles,name|min:3|max:20',
			],
			[
				'Ten.required' => 'Bạn phải nhập tên quyền',
				'Ten.unique' => 'Tên quyền đã tồn tại',
				'Ten.min' => 'Bạn phải nhập tên lớn từ 3 đến 20 ký tự',
				'Ten.max' => 'Bạn phải nhập tên lớn từ 3 đến 20 ký tự',
			]);
		$role = new Role;
		$role->name = $request->Ten;
		$role->save();

		return redirect('admin/role/add')->with('notification', 'Thêm thành công');

    }

    public function getEdit($id) {
		$role = Role::find($id);

		return view('admin.role.edit', ['role' => $role]);
	}

	public function postEdit(Request $request, $id) {
		$role = Role::find($id);
		$this->validate($request,
			[
				'Ten' => 'required|unique:roles,name|min:3|max:20',
			],
			[
				'Ten.required' => 'Bạn phải nhập tên quyền',
				'Ten.unique' => 'Tên quyền đã tồn tại',
				'Ten.min' => 'Bạn phải nhập tên lớn từ 3 đến 20 ký tự',
				'Ten.max' => 'Bạn phải nhập tên lớn từ 3 đến 20 ký tự',
			]);

		$role->name = $request->Ten;
		$role->save();

		return redirect('admin/role/edit/' . $id)->with('notification', 'Sửa thành công');
	}

    public function getDelete($id) {
		$role = Role::find($id);
		//kiểm tra khoá ngoại trước khi xoá
		$kiemtrakhoangoai = User::where('role_id', $id)->get();
		$soluong = count($kiemtrakhoangoai);
		if ($soluong) {
			return redirect('admin/role/list')->with('error', 'Không được phép xoá vì đang có ' . $soluong . ' người dùng sử dụng quyền này. Vui lòng tìm và xoá toàn bộ những người dùng đó trước!');
		} else {
			$role->delete();
		}

		return redirect('admin/role/list')->with('notification', 'Xoá thành công');
	}


}
