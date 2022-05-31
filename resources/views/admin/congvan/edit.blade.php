@extends('admin.layout.index')
@section('title')
    Sửa Công Văn
@endsection
@section('content')

    <!-- Page Content -->
    <div id="page-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Công văn
                        <small>sửa</small>
                    </h1>
                </div>
                <!-- /.col-lg-12 -->
                <div class="col-lg-7" style="padding-bottom:120px">
                    @if (count($errors) > 0)
                        <div class="alert alert-danger">
                            @foreach ($errors->all() as $err)
                                {{ $err }}<br>
                            @endforeach
                        </div>
                    @endif
                    @if (session('error'))
                        <div class="alert alert-danger">
                            {{ session('error') }}
                        </div>
                    @endif
                    @if (session('notification'))
                        <div class="alert alert-success">
                            {{ session('notification') }}
                        </div>
                    @endif
                    <form action="admin/cong-van/edit/{{ $congvan->id }}" method="POST" enctype="multipart/form-data">
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <div class="form-group">
                            <label>Cơ quan ban hành</label>

                            <select class="form-control" name="CoQuanBanHanh">

                                @foreach ($coquanbanhanh as $key => $cqbh)
                                    <option @if ($cqbh->id == $congvan->id_co_quan_ban_hanh) selected @endif value="{{ $cqbh->id }}">
                                        {{ $cqbh->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Hình thức văn bản</label>
                            <select class="form-control" name="HinhThucVanBan">
                                @foreach ($hinhthucvanban as $key => $htvb)
                                    <option @if ($htvb->id == $congvan->id_hinh_thuc_van_ban) selected @endif value="{{ $htvb->id }}">
                                        {{ $htvb->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Lĩnh vực</label>
                            <select class="form-control" name="LinhVuc">
                                @foreach ($linhvuc as $key => $lv)
                                    <option @if ($lv->id == $congvan->id_linh_vuc) selected @endif value="{{ $lv->id }}">
                                        {{ $lv->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Loại hình công văn</label>
                            <select class="form-control" name="LoaiHinhCongVan">
                                @foreach ($loaihinhcongvan as $key => $lhcv)
                                    <option @if ($lhcv->id == $congvan->id_loai_hinh_cong_van) selected @endif value="{{ $lhcv->id }}">
                                        {{ $lhcv->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Loại văn bản</label>
                            <select class="form-control" name="LoaiVanBan">
                                @foreach ($loaivanban as $key => $lvb)
                                    <option @if ($lvb->id == $congvan->id_loai_van_ban) selected @endif value="{{ $lvb->id }}">
                                        {{ $lvb->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Số hiệu</label>
                            <input class="form-control" name="sohieu" value="{{ $congvan->so_hieu }}"
                                placeholder="Nhập số hiệu" />
                        </div>
                        <div class="form-group">
                            <label>Trích yếu nội dung</label>
                            <textarea class="form-control" name="trichyeunoidung" rows="3">{{ $congvan->trich_yeu_noi_dung }}</textarea>
                        </div>
                        <div class="form-group">
                            <label>Người ký</label>
                            <input class="form-control" maxlength="30" name="nguoiky"
                                @if (isset($congvan->nguoi_ky)) value="{{ $congvan->nguoi_ky }}" @endif
                                placeholder="Nhập họ và tên người ký" />
                        </div>
                        <div class="form-group">
                            <label>Hình ảnh</label>
                            <p>
                                <img width="75" height="auto" src="image/thumbnail/{{ $congvan->thumbnail }}">
                            </p>

                            <input type="file" name="hinhanh">
                        </div>
                        <div class="form-group">
                            <label>Ngày lập</label>
                            <input type="date" class="form-control"
                                @if (isset($congvan->nguoi_ky)) value="{{ Carbon\Carbon::parse($congvan->ngay_lap)->format('Y-m-d') }}" @endif
                                name="ngaylap" />
                        </div>
                        <div class="form-group">
                            <label>Ngày ký</label>
                            <input type="date" class="form-control"
                                @if (isset($congvan->nguoi_ky)) value="{{ Carbon\Carbon::parse($congvan->ngay_ky)->format('Y-m-d') }}" @endif
                                name="ngayky" />
                        </div>
                        <div class="form-group">
                            <label>Ngày hiệu lực</label>
                            <input type="date" class="form-control"
                                @if (isset($congvan->nguoi_ky)) value="{{ Carbon\Carbon::parse($congvan->ngay_hieu_luc)->format('Y-m-d') }}" @endif
                                name="ngayhieuluc" />
                        </div>
                        <div class="form-group">
                            <label>Ngày chuyển</label>
                            <input type="date" class="form-control"
                                @if (isset($congvan->nguoi_ky)) value="{{ Carbon\Carbon::parse($congvan->ngay_chuyen)->format('Y-m-d') }}" @endif
                                name="ngaychuyen" />
                        </div>
                        <div class="form-group">
                            <label>Còn hiệu lực</label>
                            <label class="radio-inline">
                                <input name="conhieuluc" value="1" @if ($congvan->con_hieu_luc == 1) checked @endif
                                    type="radio">Còn
                            </label>
                            <label class="radio-inline">
                                <input name="conhieuluc" value="0" @if ($congvan->con_hieu_luc == 0) checked @endif
                                    type="radio">Hết
                            </label>
                        </div>
                        <div class="form-group">
                            <label>Tập tin hiện tại:</label>
                            @if ($congvan->ten_tep_dinh_kem != '')
                                <a href="upload/{{ $congvan->ten_tep_dinh_kem }}" target="_blank">Bấm vào đây để xem</a>
                            @endif

                        </div>
                        <div class="form-group">
                            <label>Tập tin đính kèm</label>
                            <input type="file" name="taptindinhkem">
                        </div>
                        <button type="submit" class="btn btn-default">Sửa</button>
                    </form>
                </div>
            </div>
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
    </div>
    <!-- /#page-wrapper -->

@endsection
