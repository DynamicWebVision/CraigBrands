var React = require('react');
var ReactDOM = require('react-dom');
var ItemActionCreators = require('./actions/ItemActionCreators');
var BrandActionCreators = require('./actions/BrandActionCreators');
var ItemBox = require('./components/ItemBox');
import { withCookies, Cookies } from 'react-cookie';

ItemActionCreators.loadBrandItems(1);
BrandActionCreators.loadBrands();

ReactDOM.render(
  <ItemBox />,
  document.getElementById('main-react')
);