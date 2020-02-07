import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Payments from './Views/Payments';
import PaymentDetail from './Views/PaymentDetail';

import './App.css';


const App = () => {
    return  (
        <>        
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Payments} />
                    <Route exact path="/detail" component={PaymentDetail} />
                </Switch>
            </HashRouter>
        </>
    );
}

export default hot(module)(App);