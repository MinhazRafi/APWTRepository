<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class indexController extends Controller
{
    function indexPage(){
        return view ('index');
    }
}
