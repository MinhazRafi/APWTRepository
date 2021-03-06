<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/',[ProductsController::class, 'Service'])->name('service');
Route::get('/',[indexController::class, 'indexPage'])->name('index');
Route::get('/',[ourTeamsController::class, 'teams'])->name('teams');
Route::get('/',[contactController::class, 'contact'])->name('contact');
Route::get('/',[aboutController::class, 'about'])->name('about');