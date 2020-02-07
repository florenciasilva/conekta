import React from 'react';
import {hot} from 'react-hot-loader';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Payments from './Views/Payments';
import PaymentDetail from './Views/PaymentDetail';
import Navbar from './Components/Navbar';
import Sidenav from './Components/Sidenav';

import './App.css';


const App = () => {
    return  (
        <>        
            <Sidenav />
            <div>
            <Navbar />
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Payments} />
                    <Route exact path="/detail" component={PaymentDetail} />
                </Switch>
            </HashRouter>
            </div>

        </>
    );
}

export default hot(module)(App);