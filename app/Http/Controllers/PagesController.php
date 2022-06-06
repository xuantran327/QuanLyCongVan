<?php

namespace App\Http\Controllers;

use App\Models\CongVan;
use App\Models\CoQuanBanHanh;
use App\Models\HinhThucVanBan;
use App\Models\LinhVuc;
use App\Models\LoaiHinhCongVan;
use App\Models\LoaiVanBan;
use App\Models\Slide;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\View;

class PagesController extends Controller
{

    public function dispatchList()
    {
        // if (Auth::user()) {
        $congvan = CongVan::orderBy('updated_at', 'desc')->get();
        // } else {
        // 	$congvan = CongVan::where('id_loai_hinh_cong_van', '!=', 1)->orderBy('updated_at', 'desc')->get();
        // }

        return response()->json($congvan);
    }

    public function login(Request $request)
    {
        $this->validate(
            $request,
            [
                'email' => 'required|email:filter',
                'password' => 'required',
            ]
        );

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = User::where('email', '=', $request->email)->get();
            // session(['user' => $user]);

            // return response()->json(session()->get('user'));
            return response()->json(['message' => 'Đăng nhập thành công!', 'status' => 200, 'userId' => Auth::user()->id]);
        } else {
            return response()->json(['message' => 'Đăng nhập không thành công, mời nhập lại!', 'status' => 401]);
        }
    }

    public function logout()
    {
        // $id = Auth::check();
        //     $out = new \Symfony\Component\Console\Output\ConsoleOutput();
        // $out->writeln("Hello from Terminal");
        Auth::logout();
        return response()->json(['message' => 'Đăng xuất thành công!', 'status' => 200]);
    }

    public function slide()
    {
        $slide = Slide::all();
        return response()->json($slide);
        // return response()->json(Auth::user()->message);
    }

    public function newDispatch()
    {
        // if (Auth::user()) {
        $congvan = CongVan::orderBy('updated_at', 'desc')->skip(0)->take(5)->get();
        // } else {
        //     $congvan = CongVan::where('id_loai_hinh_cong_van', '!=', 1)->orderBy('updated_at', 'desc')->skip(0)->take(5)->get();
        // }
        return response()->json($congvan);
    }

    function dispatchDetails($id)
    {
        $chitietcongvan = CongVan::find($id);
        return response()->json([
            'id' => $chitietcongvan->id,
            'updated_at' => $chitietcongvan->updated_at,
            'so_hieu' => $chitietcongvan->so_hieu,
            'trich_yeu_noi_dung' => $chitietcongvan->trich_yeu_noi_dung,
            'nguoi_ky' => $chitietcongvan->nguoi_ky,
            'ngay_lap' => $chitietcongvan->ngay_lap,
            'ngay_ky' => $chitietcongvan->ngay_ky,
            'ngay_hieu_luc' => $chitietcongvan->ngay_hieu_luc,
            'ngay_chuyen' => $chitietcongvan->ngay_chuyen,
            'con_hieu_luc' => $chitietcongvan->con_hieu_luc,
            'co_quan_ban_hanh' => $chitietcongvan->co_quan_ban_hanh()->first()->name,
            'hinh_thuc_van_ban' => $chitietcongvan->hinh_thuc_van_ban()->first()->name,
            'linh_vuc' => $chitietcongvan->linh_vuc()->first()->name,
            'loai_van_ban' => $chitietcongvan->loai_van_ban()->first()->name,
            'loai_hinh_cong_van' => $chitietcongvan->loai_hinh_cong_van()->first()->name,
            'ten_tep_dinh_kem' => $chitietcongvan->ten_tep_dinh_kem,
            'thumbnail' => $chitietcongvan->thumbnail,
        ]);
    }

    public function search($search)
    {
        // if (Auth::user()) {
        $congvan = CongVan::where('so_hieu', 'LIKE', '%' . $search . '%')->orwhere('trich_yeu_noi_dung', 'LIKE', '%' . $search . '%')->orwhere('nguoi_ky', 'LIKE', '%' . $search . '%')->orderBy('updated_at', 'desc')->get();
        // } else {
        // 	$congvan = CongVan::where('id_loai_hinh_cong_van', '!=', 1)->where('so_hieu', 'LIKE', '%' . $search . '%')->orwhere('trich_yeu_noi_dung', 'LIKE', '%' . $search . '%')->orwhere('nguoi_ky', 'LIKE', '%' . $search . '%')->orderBy('updated_at', 'desc')->get();
        // }
        return response()->json($congvan);
    }

    public function user($id)
    {
        $user = User::find($id);
        return response()->json($user);
    }

    public function uploadAvatar(Request $request)
    {

            $base64 = $request->base64;
            $fileName = $request->fileName;
            file_put_contents('image/avatar/'.$fileName, base64_decode($base64));

            return response()->json(['message' => 'Tải ảnh thành công!', 'status' => 200, 'fileName' => $fileName]);
        // }
        // return response()->json(['message' => 'Tải ảnh thất bại!', 'status' => 401]);
    }

    public function editUser(Request $request, $id)
    {
        $user = User::find($id);
        $this->validate(
            $request,
            [
                'name' => 'required|min:3|max:30',
                'phoneNumber' => 'required',
            ],
            [
                'name.required' => 'Bạn phải nhập tên người dùng',
                'phoneNumber.required' => 'Bạn phải nhập số điện thoại',
            ]
        );
        $user->name = $request->name;
        $user->gender = $request->gender;
        $user->phone_number = $request->phoneNumber;
        $user->avatar_link = $request->avatarLink;
        $user->dob = $request->dob;
        $user->save();
        return response()->json(['message' => 'Cập nhật thành công!', 'status' => 200]);
    }
}
