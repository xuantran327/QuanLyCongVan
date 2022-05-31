@extends('admin.layout.index')
@section('title')
    Thêm Người dùng
@endsection
@section('content')

    <!-- Page Content -->
    <div id="page-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Người dùng
                        <small>thêm</small>
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

                    @if (session('notification'))
                        <div class="alert alert-success">{{ session('notification') }}</div>
                    @endif
                    <form action="admin/user/add" method="POST" enctype="multipart/form-data">
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <div class="form-group">
                            <label>Tên người dùng</label>
                            <input class="form-control" name="name" placeholder="Nhập tên người dùng" />
                        </div>
                        <div class="form-group">
                            <label>Giới tính</label>
                            <select class="form-control" name="gender">
                                <option value="0">Nữ</option>
                                <option value="1">Nam</option>
                                <option value="2">Khác</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Ngày sinh</label>
                            <input type="date" class="form-control" name="dob" />
                        </div>
                        <div class="form-group">
                            <label>Số điện thoại</label>
                            <input class="form-control" name="phoneNumber" placeholder="Nhập số điện thoại" />
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input class="form-control" name="email" type="email" required
                                placeholder="Nhập email người dùng" />
                        </div>

                        <div class="form-group">
                            <label>Hình ảnh</label>
                            <input type="file" name="hinhanh">
                        </div>

                        <div class="form-group">
                            <label>Quyền</label>
                            <select class="form-control" name="roleId">
                                @foreach ($role as $r)
                                    <option value="{{ $r->id }}">{{ $r->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Mật khẩu</label>
                            <input class="form-control" name="password" type="password" required
                                placeholder="Nhập mật khẩu" />
                        </div>
                        <div class="form-group">
                            <label>Nhập lại mật khẩu</label>
                            <input class="form-control" name="passwordAgain" type="password" required
                                placeholder="Nhập lại mật khẩu" />
                        </div>

                        <button type="submit" class="btn btn-default">Thêm</button>
                        <button type="reset" class="btn btn-default">Làm mới</button>
                    </form>
                </div>
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
    </div>
    <!-- /#page-wrapper -->

@endsection
