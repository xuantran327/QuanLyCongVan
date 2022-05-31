<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class AdminLoginMiddleware {
	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next) {
		if (Auth::check()) {
			$user = Auth::user();
			if ($user->role_id < 3) {
				return $next($request);
			} else {
				return redirect('admin/login')->with('error', 'Bạn không có quyền truy cập trang quản trị. Vui lòng liên hệ quản trị viên để được cấp quyền.');
			}

		} else {
			return redirect('admin/login');
		}

	}

}
