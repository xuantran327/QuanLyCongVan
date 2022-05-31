<div class="navbar-default sidebar" role="navigation">
    <div class="sidebar-nav navbar-collapse">
        <ul class="nav" id="side-menu">
            <!-- <li class="sidebar-search">
                <div class="input-group custom-search-form">
                    <input type="text" class="form-control" placeholder="Search1...">
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="button">
                            <i class="fa fa-search"></i>
                        </button>
                    </span>
                </div>
            </li> -->
            <li>
                <a href="admin/home"><i class="glyphicon glyphicon-home"></i> Trang chủ</a>
            </li>

            <li>
                <a href="#"><i class="glyphicon glyphicon-list-alt"></i> Công văn<span
                        class="fa arrow"></span></a>
                <ul class="nav nav-second-level">
                    <li>
                        <a href="admin/cong-van/list">Danh sách công văn</a>
                    </li>
                    <li>
                        <a href="admin/cong-van/add">Thêm công văn</a>
                    </li>
                </ul>
                <!-- /.nav-second-level -->
            </li>



            @if (Auth::user()->role_id == 1)
                <li>
                    <a href="#"><i class="fa fa-hospital-o"></i> Cơ quan ban hành<span
                            class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a href="admin/co-quan-ban-hanh/list">Danh sách cơ quan ban hành</a>
                        </li>
                        <li>
                            <a href="admin/co-quan-ban-hanh/add">Thêm cơ quan ban hành</a>
                        </li>
                    </ul>
                    <!-- /.nav-second-level -->
                </li>
                <li>
                    <a href="#"><i class="fa fa-columns"></i> Hình thức văn bản<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a href="admin/hinh-thuc-van-ban/list">Danh sách hình thức văn bản</a>
                        </li>
                        <li>
                            <a href="admin/hinh-thuc-van-ban/add">Thêm hình thức văn bản</a>
                        </li>
                    </ul>
                    <!-- /.nav-second-level -->
                </li>
                <li>
                    <a href="#"><i class="fa fa-medkit"></i> Lĩnh vực<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a href="admin/linh-vuc/list">Danh sách lĩnh vực</a>
                        </li>
                        <li>
                            <a href="admin/linh-vuc/add">Thêm lĩnh vực</a>
                        </li>
                    </ul>
                    <!-- /.nav-second-level -->
                </li>
                <li>
                    <a href="#"><i class="fa fa-list-ul"></i> Loại văn bản<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a href="admin/loai-van-ban/list">Danh sách loại văn bản</a>
                        </li>
                        <li>
                            <a href="admin/loai-van-ban/add">Thêm loại văn bản</a>
                        </li>
                    </ul>
                    <!-- /.nav-second-level -->
                </li>
                <li>
                    <a href="#"><i class="fa fa-list-alt"></i> Loại hình công văn<span
                            class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a href="admin/loai-hinh-cong-van/list">Danh sách loại hình công văn</a>
                        </li>
                        <li>
                            <a href="admin/loai-hinh-cong-van/add">Thêm loại hình công văn</a>
                        </li>
                    </ul>
                    <!-- /.nav-second-level -->
                </li>
                <li>
                    <a href="#"><i class="glyphicon glyphicon-picture"></i> Slide<span
                            class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a href="admin/slide/list">Danh sách slide</a>
                        </li>
                        <li>
                            <a href="admin/slide/add">Thêm slide</a>
                        </li>
                    </ul>
                    <!-- /.nav-second-level -->
                </li>
                <li>
                    <a href="#"><i class="fa fa-users fa-fw"></i> Người dùng<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a href="admin/user/list">Danh sách người dùng</a>
                        </li>
                        <li>
                            <a href="admin/user/add">Thêm người dùng</a>
                        </li>
                    </ul>
                    <!-- /.nav-second-level -->
                </li>
                <li>
                    <a href="#"><i class="fa fa-lock fa-fw"></i> Quyền<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a href="admin/role/list">Danh sách quyền</a>
                        </li>
                        <li>
                            <a href="admin/role/add">Thêm quyền</a>
                        </li>
                    </ul>
                    <!-- /.nav-second-level -->
                </li>
            @endif



        </ul>
    </div>
    <!-- /.sidebar-collapse -->
</div>
<!-- /.navbar-static-side -->
