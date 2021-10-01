import React from 'react';
import {Switch, Route} from 'react-router';

import Products from '../components/Products/Products';
import Cart from '../components/Cart/Cart';
import Product from '../components/Product/Product';

export default (
    <Switch>
        <Route exact path='/' component={Products}/>
        <Route exact path='/cart' component={Cart}/>
        <Route path='/product/:id' component={Product}/>
    </Switch>
)