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
            ],
            [
				'email.required' => 'Bạn phải nhập email',
				'password.required' => 'Bạn phải nhập mật khẩu',
			]
        );

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = User::where('email', '=', $request->email)->get();
            // session(['user' => $user]);

            // return response()->json(session()->get('user'));
            return response()->json([
                'message' => 'Đăng nhập thành công!',
                'status' => 200,
                'userId' => Auth::user()->id,
                'roleId' => Auth::user()->role_id,
                'name' => Auth::user()->name,
            ]);
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

    public function issuingAgencyList() {
        $coquanbanhanh = CoQuanBanHanh::orderBy('id', 'asc')->get();
        return response()->json($coquanbanhanh);
    }

    public function issuingAgencySearch($search) {
        $coquanbanhanh = CoQuanBanHanh::where('name', 'LIKE', '%' . $search . '%')->orderBy('id', 'asc')->get();
        return response()->json($coquanbanhanh);
    }
    public function getIssuingAgency($id) {
        $coquanbanhanh = CoQuanBanHanh::find($id);
        return response()->json($coquanbanhanh);
    }
    public function addIssuingAgency(Request $request) {
        $this->validate($request,
			[
				'name' => 'required|unique:co_quan_ban_hanh,name',
			],
			[
				'name.required' => 'Bạn phải nhập tên cơ quan ban hành',
				'name.unique' => 'Tên cơ quan ban hành đã tồn tại',
			]);
            $coquanbanhanh = new CoQuanBanHanh;
            $coquanbanhanh->name = $request->name;
		$coquanbanhanh->ten_khong_dau = Str::slug($request->name, '-', 'en');
		$coquanbanhanh->save();

		return response()->json(['message' => 'Thêm cơ quan ban hành thành công!', 'status' => 200]);
    }
    public function editIssuingAgency(Request $request, $id) {
        $coquanbanhanh = CoQuanBanHanh::find($id);
        $this->validate($request,
			[
				'name' => 'required|unique:co_quan_ban_hanh,name',
			],
			[
				'name.required' => 'Bạn phải nhập tên cơ quan ban hành',
				'name.unique' => 'Tên cơ quan ban hành đã tồn tại',
			]);

            $coquanbanhanh->name = $request->name;
		$coquanbanhanh->ten_khong_dau = Str::slug($request->name, '-', 'en');
		$coquanbanhanh->save();

		return response()->json(['message' => 'Sửa cơ quan ban hành thành công!', 'status' => 200]);
    }

    public function documentFormList() {
        $hinhthucvanban = HinhThucVanBan::orderBy('id', 'asc')->get();
        return response()->json($hinhthucvanban);
    }

    public function documentFormSearch($search) {
        $hinhthucvanban = HinhThucVanBan::where('name', 'LIKE', '%' . $search . '%')->orderBy('id', 'asc')->get();
        return response()->json($hinhthucvanban);
    }

    public function getDocumentForm($id) {
        $hinhthucvanban = HinhThucVanBan::find($id);
        return response()->json($hinhthucvanban);
    }

    public function addDocumentForm(Request $request) {
        $this->validate($request,
			[
				'name' => 'required|unique:hinh_thuc_van_ban,name|min:3|max:30',
			],
			[
				'name.required' => 'Bạn phải nhập tên hình thức văn bản',
				'name.unique' => 'Tên hình thức văn bản đã tồn tại',
				'name.min' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
				'name.max' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
			]);
            $hinhthucvanban = new HinhThucVanBan;
            $hinhthucvanban->name = $request->name;
		$hinhthucvanban->ten_khong_dau = Str::slug($request->name, '-', 'en');
		$hinhthucvanban->save();

		return response()->json(['message' => 'Thêm hình thức văn bản thành công!', 'status' => 200]);
    }

    public function editDocumentForm(Request $request, $id) {
        $hinhthucvanban = HinhThucVanBan::find($id);
        $this->validate($request,
			[
				'name' => 'required|unique:hinh_thuc_van_ban,name|min:3|max:30',
			],
			[
				'name.required' => 'Bạn phải nhập tên hình thức văn bản',
				'name.unique' => 'Tên hình thức văn bản đã tồn tại',
				'name.min' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
				'name.max' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
			]);

            $hinhthucvanban->name = $request->name;
		$hinhthucvanban->ten_khong_dau = Str::slug($request->name, '-', 'en');
		$hinhthucvanban->save();

		return response()->json(['message' => 'Sửa hình thức văn bản thành công!', 'status' => 200]);
    }

    public function fieldList() {
        $linhvuc = LinhVuc::orderBy('id', 'asc')->get();
        return response()->json($linhvuc);
    }

    public function fieldSearch($search) {
        $linhvuc = LinhVuc::where('name', 'LIKE', '%' . $search . '%')->orderBy('id', 'asc')->get();
        return response()->json($linhvuc);
    }

    public function getField($id) {
        $linhvuc = LinhVuc::find($id);
        return response()->json($linhvuc);
    }

    public function addField(Request $request) {
        $this->validate($request,
			[
				'name' => 'required|unique:linh_vuc,name|min:3|max:30',
			],
			[
				'name.required' => 'Bạn phải nhập tên lĩnh vực',
				'name.unique' => 'Tên lĩnh vực đã tồn tại',
				'name.min' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
				'name.max' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
			]);
            $linhvuc = new LinhVuc;
            $linhvuc->name = $request->name;
		$linhvuc->ten_khong_dau = Str::slug($request->name, '-', 'en');
		$linhvuc->save();

		return response()->json(['message' => 'Thêm lĩnh vực thành công!', 'status' => 200]);
    }

    public function editField(Request $request, $id) {
        $linhvuc = LinhVuc::find($id);
        $this->validate($request,
			[
				'name' => 'required|unique:linh_vuc,name|min:3|max:30',
			],
			[
				'name.required' => 'Bạn phải nhập tên lĩnh vực',
				'name.unique' => 'Tên lĩnh vực đã tồn tại',
				'name.min' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
				'name.max' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
			]);

            $linhvuc->name = $request->name;
		$linhvuc->ten_khong_dau = Str::slug($request->name, '-', 'en');
		$linhvuc->save();

		return response()->json(['message' => 'Sửa lĩnh vực thành công!', 'status' => 200]);
    }

    public function documentTypeList() {
        $loaivanban = LoaiVanBan::orderBy('id', 'asc')->get();
        return response()->json($loaivanban);
    }

    public function documentTypeSearch($search) {
        $loaivanban = LoaiVanBan::where('name', 'LIKE', '%' . $search . '%')->orderBy('id', 'asc')->get();
        return response()->json($loaivanban);
    }

    public function getDocumentType($id) {
        $loaivanban = LoaiVanBan::find($id);
        return response()->json($loaivanban);
    }

    public function addDocumentType(Request $request) {
        $this->validate($request,
			[
				'name' => 'required|unique:loai_van_ban,name|min:3|max:30',
			],
			[
				'name.required' => 'Bạn phải nhập tên loại văn bản',
				'name.unique' => 'Tên loại văn bản đã tồn tại',
				'name.min' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
				'name.max' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
			]);
            $loaivanban = new LoaiVanBan;
            $loaivanban->name = $request->name;
		$loaivanban->ten_khong_dau = Str::slug($request->name, '-', 'en');
		$loaivanban->save();

		return response()->json(['message' => 'Thêm loại văn bản thành công!', 'status' => 200]);
    }

    public function editDocumentType(Request $request, $id) {
        $loaivanban = LoaiVanBan::find($id);
        $this->validate($request,
			[
				'name' => 'required|unique:loai_van_ban,name|min:3|max:30',
			],
			[
				'name.required' => 'Bạn phải nhập tên loại văn bản',
				'name.unique' => 'Tên loại văn bản đã tồn tại',
				'name.min' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
				'name.max' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
			]);

            $loaivanban->name = $request->name;
		$loaivanban->ten_khong_dau = Str::slug($request->name, '-', 'en');
		$loaivanban->save();

		return response()->json(['message' => 'Sửa loại văn bản thành công!', 'status' => 200]);
    }

    public function dispatchTypeList() {
        $loaihinhcongvan = LoaiHinhCongVan::orderBy('id', 'asc')->get();
        return response()->json($loaihinhcongvan);
    }

    public function dispatchTypeSearch($search) {
        $loaihinhcongvan = LoaiHinhCongVan::where('name', 'LIKE', '%' . $search . '%')->orderBy('id', 'asc')->get();
        return response()->json($loaihinhcongvan);
    }

    public function getDispatchType($id) {
        $loaihinhcongvan = LoaiHinhCongVan::find($id);
        return response()->json($loaihinhcongvan);
    }

    public function addDispatchType(Request $request) {
        $this->validate($request,
			[
				'name' => 'required|unique:loai_hinh_cong_van,name|min:3|max:30',
			],
			[
				'name.required' => 'Bạn phải nhập tên loại hình công văn',
				'name.unique' => 'Tên loại hình công văn đã tồn tại',
				'name.min' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
				'name.max' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
			]);
            $loaihinhcongvan = new LoaiHinhCongVan;
            $loaihinhcongvan->name = $request->name;
		$loaihinhcongvan->ten_khong_dau = Str::slug($request->name, '-', 'en');
		$loaihinhcongvan->save();

		return response()->json(['message' => 'Thêm loại hình công văn thành công!', 'status' => 200]);
    }

    public function editDispatchType(Request $request, $id) {
        $loaihinhcongvan = LoaiHinhCongVan::find($id);
        $this->validate($request,
			[
				'name' => 'required|unique:loai_hinh_cong_van,name|min:3|max:30',
			],
			[
				'name.required' => 'Bạn phải nhập tên loại hình công văn',
				'name.unique' => 'Tên loại hình công văn đã tồn tại',
				'name.min' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
				'name.max' => 'Bạn phải nhập tên lớn từ 3 đến 30 ký tự',
			]);

            $loaihinhcongvan->name = $request->name;
		$loaihinhcongvan->ten_khong_dau = Str::slug($request->name, '-', 'en');
		$loaihinhcongvan->save();

		return response()->json(['message' => 'Sửa loại hình công văn thành công!', 'status' => 200]);
    }

    public function slideList() {
        $slide = Slide::orderBy('updated_at', 'desc')->get();
        return response()->json($slide);
    }

    public function slideSearch($search) {
        $slide = Slide::where('name', 'LIKE', '%' . $search . '%')->orderBy('updated_at', 'desc')->get();
        return response()->json($slide);
    }

    public function getSlide($id) {
        $slide = Slide::find($id);
        return response()->json($slide);
    }

    public function uploadSlide(Request $request)
    {

            $base64 = $request->base64;
            $fileName = $request->fileName;
            file_put_contents('image/slide/'.$fileName, base64_decode($base64));

            return response()->json(['message' => 'Tải ảnh thành công!', 'status' => 200, 'fileName' => $fileName]);
        // }$re
        // return response()->json(['message' => 'Tải ảnh thất bại!', 'status' => 401]);
    }

    public function uploadDispatch(Request $request)
    {
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            // $name = $file->getClientOriginalName();
			// $taptindinhkem = Str::random(3) . "_" . $name;
            // while (file_exists("upload/" . $taptindinhkem)) {
			// 	$taptindinhkem = Str::random(3) . "_" . $name;
			// }
            // $file->move("upload/", $taptindinhkem);
            $path = $file->store('uploads');
            return response()->json(['message' => 'Tải công văn thành công!', 'status' => 200, 'fileName' => $path]);
        } else {
            return response()->json(['status' => 'error', 'message' => 'No file uploaded']);
        }
    }

    public function addSlide(Request $request) {
        $this->validate($request,
			[

				'name' => 'required',

			],
			[
				'name.required' => 'Bạn chưa nhập tên ảnh',

			]);
            $slide = new Slide;
            $slide->name = $request->name;
		$slide->image = $request->imageLink;
		$slide->save();

		return response()->json(['message' => 'Thêm slide thành công!', 'status' => 200]);
    }

    public function editSlide(Request $request, $id) {
        $slide = Slide::find($id);
        $this->validate($request,
			[

				'name' => 'required',

			],
			[
				'name.required' => 'Bạn chưa nhập tên ảnh',

			]);

            $slide->name = $request->name;
		$slide->image = $request->imageLink;
		$slide->save();

		return response()->json(['message' => 'Sửa slide thành công!', 'status' => 200]);
    }

    public function deleteIssuingAgency($id) {
        $coquanbanhanh = CoQuanBanHanh::find($id);
        $kiemtrakhoangoai = CongVan::where('id_co_quan_ban_hanh', $id)->get();
		$soluong = count($kiemtrakhoangoai);
        if ($soluong) {
            return response()->json([
                'message' => 'Không được phép xoá danh mục này vì đang có ' . $soluong . ' công văn đang sử dụng danh mục. Vui lòng tìm và xoá toàn bộ những công văn đó trước!',
                'status' => 401,
            ]);
        } else {
            $coquanbanhanh->delete();
        }
        return response()->json(['message' => 'Xoá thành công!', 'status' => 200]);
    }

    public function deleteDocumentForm($id) {
        $hinhthucvanban = HinhThucVanBan::find($id);
		//kiểm tra khoá ngoại trước khi xoá
		$kiemtrakhoangoai = CongVan::where('id_hinh_thuc_van_ban', $id)->get();
		$soluong = count($kiemtrakhoangoai);
        if ($soluong) {
            return response()->json([
                'message' => 'Không được phép xoá danh mục này vì đang có ' . $soluong . ' công văn đang sử dụng danh mục. Vui lòng tìm và xoá toàn bộ những công văn đó trước!',
                'status' => 401,
            ]);
        } else {
            $hinhthucvanban->delete();
        }
        return response()->json(['message' => 'Xoá thành công!', 'status' => 200]);
    }

    public function deleteField($id) {
        $linhvuc = LinhVuc::find($id);
		//kiểm tra khoá ngoại trước khi xoá
		$kiemtrakhoangoai = CongVan::where('id_linh_vuc', $id)->get();
		$soluong = count($kiemtrakhoangoai);
        if ($soluong) {
            return response()->json([
                'message' => 'Không được phép xoá danh mục này vì đang có ' . $soluong . ' công văn đang sử dụng danh mục. Vui lòng tìm và xoá toàn bộ những công văn đó trước!',
                'status' => 401,
            ]);
        } else {
            $linhvuc->delete();
        }
        return response()->json(['message' => 'Xoá thành công!', 'status' => 200]);
    }

    public function deleteDocumentType($id) {
        $loaivanban = LoaiVanBan::find($id);
		//kiểm tra khoá ngoại trước khi xoá
		$kiemtrakhoangoai = CongVan::where('id_loai_van_ban', $id)->get();
		$soluong = count($kiemtrakhoangoai);
        if ($soluong) {
            return response()->json([
                'message' => 'Không được phép xoá danh mục này vì đang có ' . $soluong . ' công văn đang sử dụng danh mục. Vui lòng tìm và xoá toàn bộ những công văn đó trước!',
                'status' => 401,
            ]);
        } else {
            $loaivanban->delete();
        }
        return response()->json(['message' => 'Xoá thành công!', 'status' => 200]);
    }

    public function deleteDispatchType($id) {
        $loaivanban = LoaiHinhCongVan::find($id);
		//kiểm tra khoá ngoại trước khi xoá
		$kiemtrakhoangoai = CongVan::where('id_loai_hinh_cong_van', $id)->get();
		$soluong = count($kiemtrakhoangoai);
        if ($soluong) {
            return response()->json([
                'message' => 'Không được phép xoá danh mục này vì đang có ' . $soluong . ' công văn đang sử dụng danh mục. Vui lòng tìm và xoá toàn bộ những công văn đó trước!',
                'status' => 401,
            ]);
        } else {
            $loaivanban->delete();
        }
        return response()->json(['message' => 'Xoá thành công!', 'status' => 200]);
    }

    public function deleteSlide($id) {
        $slide = Slide::find($id);
		$slide->delete();
        return response()->json(['message' => 'Xoá thành công!', 'status' => 200]);
    }

    public function deleteDispatch($id) {
        $congvan = CongVan::find($id);
		$congvan->delete();
        return response()->json(['message' => 'Xoá thành công!', 'status' => 200]);
    }

    public function getDispatch($id) {
        $congvan = CongVan::find($id);
        $coquanbanhanh = CoQuanBanHanh::all();
		$hinhthucvanban = HinhThucVanBan::all();
		$linhvuc = LinhVuc::all();
		$loaihinhcongvan = LoaiHinhCongVan::all();
		$loaivanban = LoaiVanBan::all();
        return response()->json(['congvan' => $congvan, 'coquanbanhanh' => $coquanbanhanh, 'hinhthucvanban' => $hinhthucvanban, 'linhvuc' => $linhvuc, 'loaihinhcongvan' => $loaihinhcongvan, 'loaivanban' => $loaivanban]);
    }

    public function infoList() {
        $coquanbanhanh = CoQuanBanHanh::all();
		$hinhthucvanban = HinhThucVanBan::all();
		$linhvuc = LinhVuc::all();
		$loaihinhcongvan = LoaiHinhCongVan::all();
		$loaivanban = LoaiVanBan::all();
        return response()->json(['coquanbanhanh' => $coquanbanhanh, 'hinhthucvanban' => $hinhthucvanban, 'linhvuc' => $linhvuc, 'loaihinhcongvan' => $loaihinhcongvan, 'loaivanban' => $loaivanban]);
    }

    public function addDispatch(Request $request) {
        $this->validate($request,
			[
				'soHieu' => 'required',

				'trichYeuNoiDung' => 'required',

				// 'taptindinhkem' => 'required',


			],
			[
				'soHieu.required' => 'Bạn phải nhập số hiệu',

				'trichYeuNoiDung.required' => 'Bạn phải nhập trích yếu nội dung',
				// 'taptindinhkem.required' => 'Bạn phải chọn tập tin đính kèm',

			]);
            $congvan = new CongVan();
            $congvan->so_hieu = $request->soHieu;
		$congvan->trich_yeu_noi_dung = $request->trichYeuNoiDung;
        if ($request->nguoiKy) {
            $congvan->nguoi_ky = $request->nguoiKy;
        } else {
            $congvan->nguoi_ky = "";
        }
        $congvan->ngay_lap = ($request->ngayLap ? $request->ngayLap : null);
		$congvan->ngay_ky = ($request->ngayKy ? $request->ngayKy : null);
		$congvan->ngay_hieu_luc = ($request->ngayHieuLuc ? $request->ngayHieuLuc : null);
		$congvan->ngay_chuyen = ($request->ngayChuyen ? $request->ngayChuyen : null);
		$congvan->con_hieu_luc = $request->conHieuLuc;
        $congvan->save();
        return response()->json(['message' => 'Thêm công văn thành công!', 'status' => 200]);
    }

    public function editDispatch(Request $request, $id) {
        $congvan = CongVan::find($id);
        $this->validate($request,
			[
				'soHieu' => 'required',

				'trichYeuNoiDung' => 'required',

				// 'taptindinhkem' => 'required',


			],
			[
				'soHieu.required' => 'Bạn phải nhập số hiệu',

				'trichYeuNoiDung.required' => 'Bạn phải nhập trích yếu nội dung',
				// 'taptindinhkem.required' => 'Bạn phải chọn tập tin đính kèm',

			]);
            $congvan->so_hieu = $request->soHieu;
		$congvan->trich_yeu_noi_dung = $request->trichYeuNoiDung;
        if ($request->nguoiKy) {
            $congvan->nguoi_ky = $request->nguoiKy;
        } else {
            $congvan->nguoi_ky = "";
        }
        $congvan->ngay_lap = ($request->ngayLap ? $request->ngayLap : null);
		$congvan->ngay_ky = ($request->ngayKy ? $request->ngayKy : null);
		$congvan->ngay_hieu_luc = ($request->ngayHieuLuc ? $request->ngayHieuLuc : null);
		$congvan->ngay_chuyen = ($request->ngayChuyen ? $request->ngayChuyen : null);
		$congvan->con_hieu_luc = $request->conHieuLuc;
        $congvan->save();
        return response()->json(['message' => 'Sửa công văn thành công!', 'status' => 200]);
    }
}
