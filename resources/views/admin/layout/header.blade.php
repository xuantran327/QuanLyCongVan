<!-- Navigation -->
<nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"  style="float: left; margin-left: 8px;">
            <span class="sr-only">Danh mục</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="admin/home">Xin chào, {{ Auth::user()->name }}</a>
        <div class="nav navbar-top-links navbar-right" style="float: right; right: 0; position: absolute;">
            <!-- /.dropdown -->
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i>
                </a>
                <ul class="dropdown-menu dropdown-user">
                    @if (Auth::user())
                        <li><a href="admin/home/#"><i class="fa fa-user fa-fw"></i> {{ Auth::user()->name }}</a>
                        </li>
                        <li><a href="admin/user/edit/{{ Auth::user()->id }}"><i class="fa fa-gear fa-fw"></i> Thông tin tài
                                khoản</a>
                        </li>
                        <li class="divider"></li>
                        <li><a href="admin/logout"><i class="fa fa-sign-out fa-fw"></i> Thoát</a>
                        </li>
                    @endif
                </ul>
                <!-- /.dropdown-user -->
            </li>
            <!-- /.dropdown -->
        </div>


    </div>



    <!-- /.navbar-top-links -->



    @include('admin.layout.menu')
    <!-- /.navbar-static-side -->
</nav>
