<?php namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ArchiveItem extends Model {
    protected $table = 'archive_items';

    public function ItemImage() {
        return $this->hasMany('App\Model\ItemImage');
    }
}