@extends('admin.layout.index')
@section('title')
    Danh sách Người dùng
@endsection
@section('content')

    <!-- Page Content -->
    <div id="page-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Người dùng
                        <small>danh sách</small>
                    </h1>

                    <!-- /.col-lg-12 -->
                    @if (count($errors) > 0)
                        <div class="alert alert-danger">
                            @foreach ($errors->all() as $err)
                                {{ $err }}<br>
                            @endforeach
                        </div>
                    @endif

                    @if (session('notification'))
                        <div class="alert alert-success">{{ session('notification') }}</div>
                    @endif
                    @if (session('error'))
                        <div class="alert alert-success">{{ session('error') }}</div>
                    @endif
                </div>
                <div class="table-responsive">
                    <table class="table table-striped table-bordered table-hover dataTables-example">
                        <thead>
                            <tr align="center">
                                <th>ID</th>
                                <th>Tên</th>
                                <th>Giới tính</th>
                                <th>Ngày sinh</th>
                                <th>Số điện thoại</th>
                                <th>Email</th>
                                <th>Avatar</th>
                                <th>Quyền</th>
                                <th>Ngày tạo</th>
                                <th>Ngày sửa</th>
                                <th>Xoá</th>
                                <th>Sửa</th>
                            </tr>
                        </thead>
                        <tbody>

                            {{-- Kiểm tra dữ liệu của bảng nếu k có thì in ra Bảng hiện có dữ liệu --}}
                            @if (count($user) == 0)
                                <tr>Bảng hiện tại chưa có dữ liệu</tr>
                            @endif

                            <?php
                            //Cách xuất STT
                            $i = 1;
                            if (isset($_GET['page']) && $_GET['page'] != 1) {
                                $i = ($_GET['page'] - 1) * 10 + 1;
                            }
                            ?>

                            @foreach ($user as $usr)
                                <tr class="odd gradeX" align="center">
                                    <td>{{ $usr->id }}</td><?php $i++; ?>
                                    <td>{{ $usr->name }}</td>
                                    @if ($usr->gender == 0)
                                        <td>Nữ</td>
                                    @else
                                        @if ($usr->gender == 1)
                                            <td>Nam</td>
                                        @else
                                            <td>Khác</td>
                                        @endif
                                    @endif
                                    <td>{{ $usr->dob }}</td>
                                    <td>{{ $usr->phone_number }}</td>
                                    <td>{{ $usr->email }}</td>
                                    <td>
                                        <p>
                                            <img width="50px" height="50px" src="image/avatar/{{ $usr->avatar_link }}" style="object-fit: cover">
                                        </p>
                                    </td>


                                    <td>{{ $usr->role()->first()->name }}</td>

                                    <td>{{ $usr->created_at }}</td>
                                    <td>{{ $usr->updated_at }}</td>
                                    <td class="center"><i class="fa fa-trash-o fa-fw"></i><a
                                            href="admin/user/delete/{{ $usr->id }}">Xoá</a></td>
                                    <td class="center"><i class="fa fa-pencil fa-fw"></i> <a
                                            href="admin/user/edit/{{ $usr->id }}">Sửa</a></td>
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
