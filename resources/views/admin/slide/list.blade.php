@extends('admin.layout.index')
@section('title')
    Danh sách Slide
@endsection
@section('content')
    <!-- Page Content -->
    <div id="page-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Slide
                        <small>danh sách</small>
                    </h1>

                    <!-- /.col-lg-12 -->
                    @if (session('notification'))
                        <div class="alert alert-success">
                            {{ session('notification') }}
                        </div>
                    @endif
                </div>

                {{-- Kiểm tra dữ liệu của bảng nếu k có thì in ra Bảng hiện có dữ liệu --}}
                @if (count($slide) == 0)
                    <tr>Bảng hiện tại chưa có dữ liệu</tr>
                @endif

                <?php
                //Cách xuất STT
                $i = 1;
                if (isset($_GET['page']) && $_GET['page'] != 1) {
                    $i = ($_GET['page'] - 1) * 10 + 1;
                }
                ?>
                <div class="table-responsive">
                <table class="table table-striped table-bordered table-hover dataTables-example">
                    <thead>
                        <tr align="center">
                            <th>ID</th>
                            <th>Tên</th>
                            <th>Hình</th>
                            {{--  <th>Link</th>  --}}
                            <th>Xoá</th>
                            <th>Sửa</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($slide as $sd)
                            <tr class="odd gradeX" align="center">
                                <td>{{ $sd->id }}</td><?php $i++; ?>
                                <td>{{ $sd->name }}</td>
                                @if ($sd->image !== "")
                                    <td>
                                        <p>
                                            <img width="500px" height="auto" src="image/slide/{{ $sd->image }}">
                                        </p>
                                    </td>
                                @else
                                    <td>
                                    </td>
                                @endif

                                {{--  <td>{{ $sd->image_link }}</td>  --}}
                                <td class="center"><i class="fa fa-trash-o  fa-fw"></i><a
                                        href="admin/slide/delete/{{ $sd->id }}">Xoá</a></td>
                                <td class="center"><i class="fa fa-pencil fa-fw"></i> <a
                                        href="admin/slide/edit/{{ $sd->id }}">Sửa</a></td>
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
