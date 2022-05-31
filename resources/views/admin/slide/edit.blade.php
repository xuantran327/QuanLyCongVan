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
                    <h1 class="page-header">{{ $slide->name }}
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
                        <div class="alert alert-success">
                            {{ session('notification') }}
                        </div>
                    @endif
                    @if (session('error'))
                        <div class="alert alert-danger">
                            {{ session('error') }}
                        </div>
                    @endif
                    <form action="admin/slide/edit/{{ $slide->id }}" method="POST" enctype="multipart/form-data">
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">

                        <div class="form-group">
                            <label>Tên</label>
                            <input class="form-control" name="name" value="{{ $slide->name }}"
                                placeholder="Nhập tên slide..." />
                        </div>

                        {{--  <div class="form-group">
                            <label>Link</label>
                            @if ($slide->image_link != "")
                            <input class="form-control" name="link" placeholder="Nhập link slide..."
                            value="{{ $slide->image_link }}" />
                            @else
                            <input class="form-control" name="link" placeholder="Nhập link slide..." />
                            @endif

                        </div>  --}}
                        <div class="form-group">
                            <label>Hình ảnh</label>
                            @if ($slide->image !== "")
                            <p>
                                <img width="500" height="auto" src="image/slide/{{ $slide->image }}">
                            </p>
                            @endif

                            <input type="file" name="hinhanh">
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
