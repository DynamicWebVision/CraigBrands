const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.less('resources/assets/less/theme.less','public/css/compiled');

var standardCssFiles = [
    'public/css/bootstrap.css',
    'public/css/flickity.css',
];

var shopFiles = standardCssFiles;

shopFiles.push('public/css/compiled/theme.css');

mix.styles(shopFiles, 'public/css/item_list.css');

mix.react('resources/assets/js/App.js', 'public/js');