<?php

namespace App\Http\Controllers;

use App\Models\CongVan;
use App\Models\CoQuanBanHanh;
use App\Models\HinhThucVanBan;
use App\Models\LoaiHinhCongVan;
use App\Models\LinhVuc;
use App\Models\LoaiVanBan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CongVanController extends Controller
{
    public function getList() {
		$congvan = CongVan::all();
        return view('admin.congvan.list', ['congvan' => $congvan]);

	}
    public function getAdd() {

		$congvan = CongVan::all();
		$coquanbanhanh = CoQuanBanHanh::all();
		$hinhthucvanban = HinhThucVanBan::all();
		$linhvuc = LinhVuc::all();
		$loaihinhcongvan = LoaiHinhCongVan::all();
		$loaivanban = LoaiVanBan::all();
		return view('admin.congvan.add', ['congvan' => $congvan, 'coquanbanhanh' => $coquanbanhanh, 'hinhthucvanban' => $hinhthucvanban, 'linhvuc' => $linhvuc, 'loaihinhcongvan' => $loaihinhcongvan, 'loaivanban' => $loaivanban]);
	}

    public function postAdd(Request $request) {
		$this->validate($request,
			[
				'sohieu' => 'required',

				'trichyeunoidung' => 'required',

				'taptindinhkem' => 'required',

				// 'ngaylap' => 'date_format:"d-m-Y"',
				// 'ngayky' => 'date_format:"d-m-Y"',
				// 'ngayhieuluc' => 'date_format:"d-m-Y"',
				// 'ngaychuyen' => 'date_format:"d-m-Y"',

			],
			[
				'sohieu.required' => 'Bạn phải nhập số hiệu',

				'trichyeunoidung.required' => 'Bạn phải nhập trích yếu nội dung',
				'taptindinhkem.required' => 'Bạn phải chọn tập tin đính kèm',

				// 'ngaylap.date_format' => 'Bạn phải nhập ngày lập đúng định dạng ngày-tháng-năm',
				// 'ngayky.date_format' => 'Bạn phải nhập ngày ký đúng định dạng ngày-tháng-năm',
				// 'ngayhieuluc.date_format' => 'Bạn phải nhập ngày hiệu lực đúng định dạng ngày-tháng-năm',
				// 'ngaychuyen.date_format' => 'Bạn phải nhập ngày chuyển đúng định dạng ngày-tháng-năm',

			]);
		$congvan = new CongVan;
		$congvan->so_hieu = $request->sohieu;
		$congvan->trich_yeu_noi_dung = $request->trichyeunoidung;
        if ($request->nguoiky) {
            $congvan->nguoi_ky = $request->nguoiky;
        } else {
            $congvan->nguoi_ky = "";
        }
		$congvan->id_co_quan_ban_hanh = intval($request->CoQuanBanHanh);
		$congvan->id_hinh_thuc_van_ban = intval($request->HinhThucVanBan);
		$congvan->id_linh_vuc = intval($request->LinhVuc);
		$congvan->id_loai_hinh_cong_van = intval($request->LoaiHinhCongVan);
		$congvan->id_loai_van_ban = intval($request->LoaiVanBan);

		$congvan->ngay_lap = ($request->ngaylap ? $request->ngaylap : null);
		$congvan->ngay_ky = ($request->ngayky ? $request->ngayky : null);
		$congvan->ngay_hieu_luc = ($request->ngayhieuluc ? $request->ngayhieuluc : null);
		$congvan->ngay_chuyen = ($request->ngaychuyen ? $request->ngaychuyen : null);
		$congvan->con_hieu_luc = $request->conhieuluc;

        if ($request->hasFile('hinhanh')) {
			$file = $request->file('hinhanh');
			$duoi = $file->getClientOriginalExtension();
			$duoichophep = array("png", "jpg", "gif");
			if (!in_array($duoi, $duoichophep)) {
				return redirect('admin/cong-van/add')->with('error', 'Bạn chỉ được chọn ảnh có đuôi file png, jpg, gif.');
			}
			$name = $file->getClientOriginalName();
			$hinhanh = Str::random(3) . "_" . $name;
			while (file_exists("upload/" . $hinhanh)) {
				$hinhanh = Str::random(3) . "_" . $name;
			}
			$congvan->thumbnail = $hinhanh;
            $file->move("image/thumbnail/", $hinhanh);
				// $slide->image = $hinhanh;
                // $slide->image_link = "";

		}

		if ($request->hasFile('taptindinhkem')) {
			$file = $request->file('taptindinhkem');
			$duoi = $file->getClientOriginalExtension();
			$duoichophep = array("doc", "docx", "pdf", "xls", "zip", "rar");
			if (!in_array($duoi, $duoichophep)) {
				return redirect('admin/cong-van/add')->with('error', 'Bạn chỉ được chọn file doc, docx, pdf, xls, zip, rar.');
			}
			$name = $file->getClientOriginalName();
			$taptindinhkem = Str::random(3) . "_" . $name;
			while (file_exists("upload/" . $taptindinhkem)) {
				$taptindinhkem = Str::random(3) . "_" . $name;
			}
				$file->move("upload/", $taptindinhkem);
				$congvan->ten_tep_dinh_kem = $taptindinhkem;

		}

		$congvan->ten_khong_dau = Str::slug($request->trichyeunoidung, '-', 'en');

		$congvan->save();

		return redirect('admin/cong-van/add')->with('notification', 'Thêm thành công');

	}

	public function getEdit($id) {
		$congvan = CongVan::find($id);
		$coquanbanhanh = CoQuanBanHanh::all();
		$hinhthucvanban = HinhThucVanBan::all();
		$linhvuc = LinhVuc::all();
		$loaihinhcongvan = LoaiHinhCongVan::all();
		$loaivanban = LoaiVanBan::all();
		return view('admin.congvan.edit', ['congvan' => $congvan, 'coquanbanhanh' => $coquanbanhanh, 'hinhthucvanban' => $hinhthucvanban, 'linhvuc' => $linhvuc, 'loaihinhcongvan' => $loaihinhcongvan, 'loaivanban' => $loaivanban]);
	}

	public function postEdit(Request $request, $id) {
		$congvan = CongVan::find($id);
		$this->validate($request,
			[
				'sohieu' => 'required',

				'trichyeunoidung' => 'required',

			],
			[
				'sohieu.required' => 'Bạn phải nhập số hiệu',

				'trichyeunoidung.required' => 'Bạn phải nhập trích yếu nội dung',

			]);

		$congvan->so_hieu = $request->sohieu;
		$congvan->trich_yeu_noi_dung = $request->trichyeunoidung;
		$congvan->nguoi_ky = $request->nguoiky;

		$congvan->id_co_quan_ban_hanh = intval($request->CoQuanBanHanh);
		$congvan->id_hinh_thuc_van_ban = intval($request->HinhThucVanBan);
		$congvan->id_linh_vuc = intval($request->LinhVuc);
		$congvan->id_loai_hinh_cong_van = intval($request->LoaiHinhCongVan);
		$congvan->id_loai_van_ban = intval($request->LoaiVanBan);

		$congvan->ngay_lap = ($request->ngaylap ? $request->ngaylap : null);
		$congvan->ngay_ky = ($request->ngayky ? $request->ngayky : null);
		$congvan->ngay_hieu_luc = ($request->ngayhieuluc ? $request->ngayhieuluc : null);
		$congvan->ngay_chuyen = ($request->ngaychuyen ? $request->ngaychuyen : null);
		$congvan->con_hieu_luc = $request->conhieuluc;

        if ($request->hasFile('hinhanh')) {
			$file = $request->file('hinhanh');
			$duoi = $file->getClientOriginalExtension();
			$duoichophep = array("png", "jpg", "gif");
			if (!in_array($duoi, $duoichophep)) {
				return redirect('admin/cong-van/edit/' . $id)->with('error', 'Bạn chỉ được chọn ảnh có đuôi file png, jpg, gif.');
			}
			$name = $file->getClientOriginalName();
			$hinhanh = Str::random(3) . "_" . $name;
			while (file_exists("upload/" . $hinhanh)) {
				$hinhanh = Str::random(3) . "_" . $name;
			}
            $congvan->thumbnail = $hinhanh;
				$file->move("image/thumbnail/", $hinhanh);
				// $slide->image = $hinhanh;
                // $slide->image_link = "";

		}

		if ($request->hasFile('taptindinhkem')) {
			$file = $request->file('taptindinhkem');
			$duoi = $file->getClientOriginalExtension();
			$duoichophep = array("doc", "docx", "pdf", "xls", "zip", "rar");
			if (!in_array($duoi, $duoichophep)) {
				return redirect('admin/cong-van/edit/' . $id)->with('error', 'Bạn chỉ được chọn file doc, docx, pdf, xls, zip, rar.');
			}
			$name = $file->getClientOriginalName();
			$taptindinhkem = Str::random(3) . "_" . $name;
			while (file_exists("upload/" . $taptindinhkem)) {
				$taptindinhkem = Str::random(3) . "_" . $name;
			}
				$file->move("upload/", $taptindinhkem);
				//kiểm tra và xoá file cũ
				if (file_exists("upload/" . $taptindinhkem)) {
					unlink("upload/" . $congvan->ten_tep_dinh_kem);
				}
				$congvan->ten_tep_dinh_kem = $taptindinhkem;

		}

		$congvan->ten_khong_dau = Str::slug($request->trichyeunoidung, '-', 'en');

		$congvan->save();

		return redirect('admin/cong-van/edit/' . $id)->with('notification', 'Sửa thành công');

	}

    public function getDelete($id) {
		$congvan = CongVan::find($id);
		$congvan->delete();

		return redirect('admin/cong-van/list')->with('notification', 'Xoá thành công');
	}

}
