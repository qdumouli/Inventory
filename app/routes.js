import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import ListProduct from './components/ListProduct';
import AddB2BOrder from './components/AddB2BOrder';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/addItems' component={AddProduct} />
    <Route path='/item' component={ListProduct} />
    <Route path='/addOrder' component={AddB2BOrder} />
  </Route>
);