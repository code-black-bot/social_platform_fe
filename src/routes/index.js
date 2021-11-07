/**
 * 路由配置 
 * react-router
 * history写法
 */

import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Home from '../pages/Home'
import Login from '../pages/Login';

const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
        </Switch>
    </BrowserRouter>
);

export default BasicRoute;