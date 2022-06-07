<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductsController extends Controller
{
    function Service(){
        $name = "Samsung galaxy S21 Ultra";
        $id = "sg-2021";
        $quantity = "2";
        return view("service")
        ->with("name", $name)
        ->with("id", $id)
        ->with("quantity", $quantity);
    }
}
