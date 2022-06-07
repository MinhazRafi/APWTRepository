<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ourTeamsController extends Controller
{
    function teams(){
        return view ('teams');
    }
}
