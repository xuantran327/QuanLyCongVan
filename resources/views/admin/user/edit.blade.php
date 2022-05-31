@extends('admin.layout.index')
@section('title')
    Sửa Người dùng
@endsection


@section('content')

    <!-- Page Content -->
    <div id="page-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Người dùng
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

                    @if (session('notification'))
                        <div class="alert alert-success">{{ session('notification') }}</div>
                    @endif
                    <form action="admin/user/edit/{{ $user->id }}" method="POST" enctype="multipart/form-data">
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <div class="form-group">
                            <label>Tên người dùng</label>
                            <input class="form-control" name="name" value="{{ $user->name }}"
                                placeholder="Nhập tên người dùng" />
                        </div>
                        <div class="form-group">
                            <label>Giới tính</label>
                            <select class="form-control" name="gender">
                                <option @if ($user->gender == 0) selected @endif value="0">Nữ</option>
                                <option @if ($user->gender == 1) selected @endif value="1">Nam</option>
                                <option @if ($user->gender == 2) selected @endif value="2">Khác</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Ngày sinh</label>
                            <input type="date" class="form-control"
                                @if (isset($user->dob)) value="{{ Carbon\Carbon::parse($user->dob)->format('Y-m-d') }}" @endif
                                name="dob" />
                        </div>
                        <div class="form-group">
                            <label>Số điện thoại</label>
                            <input class="form-control" name="phoneNumber" value="{{ $user->phone_number }}"
                                placeholder="Nhập tên người dùng" />
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input class="form-control" name="email" value="{{ $user->email }}" disabled type="email"
                                placeholder="Nhập email người dùng" />
                        </div>
                        <div class="form-group">
                            <label>Hình ảnh</label>
                            <p>
                                <img width="50" height="50" src="image/avatar/{{ $user->avatar_link }}" style="object-fit: cover">
                            </p>

                            <input type="file" name="hinhanh">
                        </div>
                        <div class="form-group">
                            <label>Quyền</label>
                            {{--  @if ($user->role_id != 1)  --}}
                                {{--  <select class="form-control" name="roleId">
                                    @foreach ($role as $r)
                                        <option disabled @if ($user->role_id == $r->id) selected @endif value="{{ $r->id }}">{{ $r->name }}
                                        </option>
                                    @endforeach
                                </select>  --}}
                            {{--  @else  --}}
                                <select class="form-control" name="roleId">
                                    @foreach ($role as $r)
                                        <option @if ($user->role_id == $r->id) selected @endif value="{{ $r->id }}">{{ $r->name }}
                                        </option>
                                    @endforeach
                                </select>
                            {{--  @endif  --}}
                        </div>
                        <div class="form-group">
                            <input type="checkbox" id="changePassword" name="changePassword">
                            <label>Mật khẩu</label>
                            <input class="form-control password" disabled name="password" type="password"
                                placeholder="Nhập mật khẩu" />
                        </div>
                        <div class="form-group">
                            <label>Nhập lại mật khẩu</label>
                            <input class="form-control password" disabled name="passwordAgain" type="password"
                                placeholder="Nhập lại mật khẩu" />
                        </div>

                        <button type="submit" class="btn btn-default">Sửa</button>
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

@section('script')
    <script type="text/javascript">
        $(document).ready(function() {
            $("#changePassword").change(function() {
                if ($(this).is(":checked")) {
                    $(".password").removeAttr('disabled');
                } else {
                    $(".password").attr('disabled', '');
                }
            });
        });
    </script>
@endsection
