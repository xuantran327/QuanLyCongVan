<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;


class UserController extends Controller
{
    public function getAdminLogin() {
        return view('admin.login');
    }
    public function postAdminLogin(Request $request) {
        $this->validate($request,
			[
				'email' => 'required',
				'password' => 'required|min:6|max:25',
			],
			[
				'email.required' => 'Bạn phải nhập email',
				'password.required' => 'Bạn phải nhập mật khẩu',
				'password.min' => 'Bạn phải nhập mật khẩu lớn hơn, từ 6 đến 25 ký tự',
				'password.max' => 'Bạn phải nhập mật khẩu nhỏ hơn, từ 6 đến 25 ký tự',
			]

		);
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
			return redirect('admin/');
		} else {
			return redirect('admin/login')->with('error', 'Đăng nhập không thành công, mời nhập lại!');
		}
    }

    public function getList() {
		$user = User::all();
        $role = Role::all();
		return view('admin.user.list', ['user' => $user, 'role' => $role]);
	}

    public function getAdd() {
        $role = Role::all();
		return view('admin.user.add', ['role' => $role]);
	}

	public function postAdd(Request $request) {
		$this->validate($request,
			[
				'name' => 'required|min:3|max:30',
                'phoneNumber' => 'required',
				'email' => 'required|unique:users,email',
				'password' => 'required|min:6|max:20',
				'passwordAgain' => 'same:password',
			],
			[
				'name.required' => 'Bạn phải nhập tên người dùng',
				'email.required' => 'Bạn phải nhập email',
				'email.unique' => 'Email đã tồn tại',
                'phoneNumber.required' => 'Bạn phải nhập số điện thoại',
				'passsword.min' => 'Bạn phải nhập mật khẩu lớn hơn, từ 6 đến 20 ký tự',
				'passsword.max' => 'Bạn phải nhập mật khẩu nhỏ hơn, từ 6 đến 20 ký tự',
				'passwordAgain.min' => 'Bạn phải nhập mật khẩu lớn hơn, từ 6 đến 20 ký tự',
				'passwordAgain.max' => 'Bạn phải nhập mật khẩu nhỏ hơn, từ 6 đến 20 ký tự',
			]);
		$user = new User;
		$user->name = $request->name;
        $user->gender = $request->gender;
        $user->dob = $request->dob;
        $user->phone_number = $request->phoneNumber;
		$user->email = $request->email;
		$user->password = bcrypt($request->password);
		$user->role_id = $request->roleId;
        if ($request->hasFile('hinhanh')) {
			$file = $request->file('hinhanh');
			$duoi = $file->getClientOriginalExtension();
			$duoichophep = array("png", "jpg", "gif");
			if (!in_array($duoi, $duoichophep)) {
				return redirect('admin/user/add')->with('error', 'Bạn chỉ được chọn ảnh có đuôi file png, jpg, gif.');
			}
			$name = $file->getClientOriginalName();
			$hinhanh = Str::random(3) . "_" . $name;
			while (file_exists("image/avatar/" . $hinhanh)) {
				$hinhanh = Str::random(3) . "_" . $name;
			}
			$user->avatar_link = $hinhanh;
            $file->move("image/avatar/", $hinhanh);
				// $slide->image = $hinhanh;
                // $slide->image_link = "";

		}
		$user->save();

		return redirect('admin/user/add')->with('notification', 'Thêm thành công');

	}

    public function getEdit($id) {
		$user = User::find($id);
        $role = Role::all();
		return view('admin.user.edit', ['user' => $user, 'role' => $role]);
	}

	public function postEdit(Request $request, $id) {
		$user = User::find($id);

		$this->validate($request,
			[
				'name' => 'required|min:3|max:30',
                'phoneNumber' => 'required',
			],
			[
				'name.required' => 'Bạn phải nhập tên người dùng',
                'phoneNumber.required' => 'Bạn phải nhập số điện thoại',
			]);

		$user->name = $request->name;
        $user->gender = $request->gender;
        $user->dob = $request->dob;
        $user->phone_number = $request->phoneNumber;
        // $user->email = $request->email;
		if ($request->changePassword) {
			$user->password = bcrypt($request->password);
		}
        if ($request->hasFile('hinhanh')) {
			$file = $request->file('hinhanh');
			$duoi = $file->getClientOriginalExtension();
			$duoichophep = array("png", "jpg", "gif");
			if (!in_array($duoi, $duoichophep)) {
				return redirect('admin/user/edit/' . $id)->with('error', 'Bạn chỉ được chọn ảnh có đuôi file png, jpg, gif.');
			}
			$name = $file->getClientOriginalName();
			$hinhanh = Str::random(3) . "_" . $name;
			while (file_exists("image/avatar/" . $hinhanh)) {
				$hinhanh = Str::random(3) . "_" . $name;
			}
                $user->avatar_link = $hinhanh;
				$file->move("image/avatar/", $hinhanh);
				// $slide->image = $hinhanh;
                // $slide->image_link = "";

		}

		$user->role_id = $request->roleId;
		$user->save();
        // Log::info('This is some useful information.');
		return redirect('admin/user/edit/' . $id)->with('notification', 'Sửa thành công');
	}

    public function getDelete($id) {
		$user = User::find($id);
		$user->delete();

		return redirect('admin/user/list')->with('notification', 'Xoá thành công');
	}

    public function getAdminLogout() {
		Auth::logout();
		return redirect('admin/login')->with('notification', 'Đăng xuất thành công');
	}

}
