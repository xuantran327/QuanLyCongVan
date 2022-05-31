<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CongVan;
use Illuminate\Support\Facades\Auth;

class TestController extends Controller
{
    public function show() {
        //echo "Hello World!";
        return view('welcome');
    }

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
			return redirect('test/cong-van/list');
		} else {
			return redirect('test/login')->with('error', 'Đăng nhập không thành công, mời nhập lại!');
		}
    }

    public function getList() {
		$congvan = CongVan::all();
		// foreach ($congvan as $key => $value) {
		// 	echo "<br>Key:" . $key;
		// 	echo "<hr>";
		// 	echo "id:" . $value->id;
		// 	echo "<hr>";
		// 	$ten = $value->coquanbanhanh->name;
		// 	echo "<b>Value: $ten</b>";
		// }
		return view('admin.congvan.list', ['congvan' => $congvan]);

	}
}
