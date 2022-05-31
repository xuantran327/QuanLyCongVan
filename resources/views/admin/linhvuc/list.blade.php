@extends('admin.layout.index')
@section('title')
    Danh sách Lĩnh vực
@endsection
@section('content')
    <!-- Page Content -->
    <div id="page-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Lĩnh vực
                        <small>danh sách</small>
                    </h1>
                </div>
                <!-- /.col-lg-12 -->
                <div class="col-lg-12">
                    @if (session('notification'))
                        <div class="alert alert-success">{{ session('notification') }}</div>
                    @endif
                    @if (session('loi'))
                        <div class="alert alert-danger">{{ session('notification') }}</div>
                    @endif
                </div>
                <div class="table-responsive">
                <table class="table table-striped table-bordered table-hover dataTables-example">
                    <thead>
                        <tr align="center">
                            <th>ID</th>
                            <th>Tên</th>
                            <th>Xoá</th>
                            <th>Sửa</th>
                        </tr>
                    </thead>
                    <tbody>

                        {{-- Kiểm tra dữ liệu của bảng nếu k có thì in ra Bảng hiện có dữ liệu --}}
                        @if (count($linhvuc) == 0)
                            <tr>Bảng hiện tại chưa có dữ liệu</tr>
                        @endif

                        <?php
                        //Cách xuất STT
                        $i = 1;
                        if (isset($_GET['page']) && $_GET['page'] != 1) {
                            $i = ($_GET['page'] - 1) * 10 + 1;
                        }
                        ?>

                        @foreach ($linhvuc as $lv)
                            <tr class="odd gradeX" align="center">
                                <td>{{ $lv->id }}</td><?php $i++; ?>
                                <td>{{ $lv->name }}</td>
                                <td class="center"><i class="fa fa-trash-o  fa-fw"></i><a
                                        href="admin/linh-vuc/delete/{{ $lv->id }}">Xoá</a></td>
                                <td class="center"><i class="fa fa-pencil fa-fw"></i> <a
                                        href="admin/linh-vuc/edit/{{ $lv->id }}">Sửa</a></td>
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
