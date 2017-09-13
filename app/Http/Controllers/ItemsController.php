<?php namespace App\Http\Controllers;

use Request;

use \App\Model\Item;
use \App\Model\ItemImage;

use \App\Model\ArchiveItem;
use \App\Model\ArchiveItemImage;

class ItemsController extends Controller {

    public function getBrandItems($brand) {
        $brand_items = Item::where('brand_id', '=', $brand)->with('ItemImage')->orderBy('id', 'desc')->get()->toArray();

        foreach ($brand_items as $index=>$item) {
            if (isset($item['item_image'][0]['main'])) {
                $brand_items[$index]['thumb'] = $item['item_image'][0]['main'];
            }
            else {
                $brand_items[$index]['thumb'] = '/img/flag-1.png';
            }
            $brand_items[$index]['price'] = round($item['price']);
            $brand_items[$index]['posted_date'] = date('m/d', strtotime($item['posted_date']));
        }
        return $brand_items;
    }

    public function migrationTest() {
        $item_urls = Item::where('brand_id', '=', 1)->get(['craigslist_url'])->toArray();
        $alreadySavedItems = array_column($item_urls, 'craigslist_url');

        try {

            foreach($alreadySavedItems as $savedItemUrl) {

                    $item = Item::where('craigslist_url', '=', $savedItemUrl)->first()->toArray();

                    $item_images = ItemImage::where('item_id', '=', $item['id'])->get()->toArray();

                    foreach($item_images as $item_image) {
                        ArchiveItemImage::insert($item_image);
                        ItemImage::destroy($item_image['id']);
                    }
                    ArchiveItem::insert($item);
                    Item::destroy($item['id']);

            }
        } catch (\Exception $e) {
            Log::emergency($e);
        }
    }
}