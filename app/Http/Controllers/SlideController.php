<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Slide;
use Illuminate\Support\Str;

class SlideController extends Controller
{
    public function getList() {
		$slide = Slide::all();
		return view('admin.slide.list', ['slide' => $slide]);
        // return view('welcome');
	}

    public function getAdd() {
		return view('admin.slide.add');
	}

	public function postAdd(Request $request) {
		$this->validate($request,
			[

				'name' => 'required',

			],
			[
				'name.required' => 'Bạn chưa nhập tên ảnh',

			]);
		$slide = new Slide;
		$slide->name = $request->name;
		// if ($request->has('link')) {
		// 	$slide->image_link = $request->link;
        //     $slide->image = "";
		// }
		if ($request->hasFile('hinhanh')) {
			$file = $request->file('hinhanh');
			$duoi = $file->getClientOriginalExtension();
			$duoichophep = array("png", "jpg", "gif");
			if (!in_array($duoi, $duoichophep)) {
				return redirect('admin/slide/add')->with('error', 'Bạn chỉ được chọn ảnh có đuôi file png, jpg, gif.');
			}
			$name = $file->getClientOriginalName();
			$hinhanh = Str::random(3) . "_" . $name;
			while (file_exists("image/slide/" . $hinhanh)) {
				$hinhanh = Str::random(3) . "_" . $name;
			}
			$slide->image = $hinhanh;
            $file->move("image/slide/", $hinhanh);
				// $slide->image = $hinhanh;
                // $slide->image_link = "";

		}

		$slide->save();

		return redirect('admin/slide/add')->with('notification', 'Thêm thành công');

	}

    public function getEdit($id) {
		$slide = Slide::find($id);

		return view('admin.slide.edit', ['slide' => $slide]);
	}

	public function postEdit(Request $request, $id) {
        $this->validate($request,
			[

				'name' => 'required',

			],
			[
				'name.required' => 'Bạn chưa nhập tên ảnh',

			]);
		$slide = Slide::find($id);
		$slide->name = $request->name;
		// if ($request->link != "") {
		// 	$slide->image_link = $request->link;
        //     $slide->image = "";
		// }
		if ($request->hasFile('hinhanh')) {
			$file = $request->file('hinhanh');
			$duoi = $file->getClientOriginalExtension();
			$duoichophep = array("png", "jpg", "gif");
			if (!in_array($duoi, $duoichophep)) {
				return redirect('admin/slide/edit/' . $id)->with('error', 'Bạn chỉ được chọn ảnh có đuôi file png, jpg, gif.');
			}
			$name = $file->getClientOriginalName();
			$hinhanh = Str::random(3) . "_" . $name;
			while (file_exists("image/slide/" . $hinhanh)) {
				$hinhanh = Str::random(3) . "_" . $name;
			}
                $slide->image = $hinhanh;
				$file->move("image/slide/", $hinhanh);
				// $slide->image = $hinhanh;
                // $slide->image_link = "";

		}

		$slide->save();

		return redirect('admin/slide/edit/' . $id)->with('notification', 'Sửa thành công');
	}

    public function getDelete($id) {
		$slide = Slide::find($id);
		$slide->delete();
		return redirect('admin/slide/list')->with('notification', 'Xoá thành công');
	}
}
