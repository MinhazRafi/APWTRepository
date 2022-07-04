<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class loginController extends Controller
{
    //
    function getData(Request $req)
    {
        $req->validate([
            'username'=>'required',
            'password'=>'required | regex:"/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{5,20}$/" | min:6'
        ],

        ['password.regex'=>"Please use atleast 1 uppercase, 1 special character, 1 number"]
    );
        return $req->input();
    }
}
