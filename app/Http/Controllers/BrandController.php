<?php namespace App\Http\Controllers;

use Request;

use \App\Model\Brand;

class BrandController extends Controller {

    public function index() {
        return Brand::get()->toArray();
    }
}