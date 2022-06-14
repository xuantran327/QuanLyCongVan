<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;

class AuthController extends Controller
{
    public function forgotPassword(Request $request) {
        $this->validate(
            $request,
            [
                'email' => 'required|email:filter',
            ]
        );
        $status = Password::sendResetLink(
            $request->only('email')
        );

        return $status == Password::RESET_LINK_SENT
                    ? response()->json(['message' => 'We have emailed your password reset link!', 'status' => 200])
                    : response()->json(['message' => 'Mời nhập lại email!', 'status' => 401]);
    }
}
