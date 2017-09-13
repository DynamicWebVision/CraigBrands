<?php

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/test', function () {
    return view('test');
});

Route::get('/phpinfo', function () {
    echo phpinfo();
});

Route::get('/single_item', function () {
    return view('single_item');
});


Route::get('items/{brand}', 'ItemsController@getBrandItems');

Route::get('brands', 'BrandController@index');


Route::get('migTest', 'ItemsController@migrationTest');