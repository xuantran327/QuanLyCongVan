@extends('admin.layout.index')
@section('title')
    Danh sách Công văn
@endsection
@section('content')

    <!-- Page Content -->
    <div id="page-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Công văn
                        <small>danh sách</small>
                    </h1>
                </div>
                <!-- /.col-lg-12 -->
                <div class="col-lg-12">
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
                </div>
                <div class="table-responsive">
                    <table class="table table-striped table-bordered table-hover dataTables-example">

                        <thead>
                            <tr align="center">
                                <th>ID</th>
                                <th>Số hiệu</th>
                                <th>Ngày ký</th>
                                <th>Trích yếu nội dung</th>
                                <th>Ngày chuyển</th>
                                <th>Thumbnail</th>
                                <th>Loại hình công văn</th>
                                <th>Cơ quan ban hành</th>
                                <th>Hình thức văn bản</th>
                                <th>Lĩnh vực</th>
                                <th>Loại văn bản</th>
                                <th>Xoá</th>
                                <th>Sửa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {{-- Kiểm tra dữ liệu của bảng nếu k có thì in ra Bảng hiện có dữ liệu --}}
                            @if (count($congvan) == 0)
                                <tr>Bảng hiện tại chưa có dữ liệu</tr>
                            @endif

                            <?php
                            //Cách xuất STT
                            $i = 1;
                            if (isset($_GET['page']) && $_GET['page'] != 1) {
                                $i = ($_GET['page'] - 1) * 10 + 1;
                            }
                            ?>


                            @foreach ($congvan as $value)
                                <tr class="odd gradeX" align="center">
                                    <td>{{ $value->id }}</td> <?php $i++; ?>
                                    <td>{{ $value->so_hieu }}</td>
                                    <td>{{ Carbon\Carbon::parse($value->ngay_ky)->format('d/m/Y') }}</td>
                                    <td>{{ $value->trich_yeu_noi_dung }}</td>
                                    <!-- kiểm tra ngaychuyen khác null -->
                                    @if ($value->ngay_chuyen != '')
                                        <td>{{ Carbon\Carbon::parse($value->ngay_chuyen)->format('d/m/Y') }}</td>
                                    @else
                                        <td>-</td>
                                    @endif

                                    <td>
                                        <p>
                                            <img width="75px" height="auto" src="image/thumbnail/{{ $value->thumbnail }}">
                                        </p>
                                    </td>

                                    <td>{{ $value->loai_hinh_cong_van()->first()->name }}</td>

                                    <td>{{ $value->co_quan_ban_hanh()->first()->name }}</td>
                                    <td>{{ $value->hinh_thuc_van_ban()->first()->name }}</td>
                                    <td>{{ $value->linh_vuc()->first()->name }}</td>
                                    <td>{{ $value->loai_van_ban()->first()->name }}</td>
                                    <td class="center"><i class="fa fa-trash-o  fa-fw"></i><a
                                            href="admin/cong-van/delete/{{ $value->id }}">Xoá</a></td>
                                    <td class="center"><i class="fa fa-pencil fa-fw"></i> <a
                                            href="admin/cong-van/edit/{{ $value->id }}">Sửa</a></td>
                                </tr>
                            @endforeach



                        </tbody>
                    </table>
                </div>
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
    </div>
    <!-- /#page-wrapper -->


@endsection
