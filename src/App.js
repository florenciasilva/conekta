import React from 'react';
import {hot} from 'react-hot-loader';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Payments from './Views/Payments';
import PaymentDetail from './Views/PaymentDetail';
import Navbar from './Components/Navbar';
import Sidenav from './Components/Sidenav';
import styled from 'styled-components';
import './App.css';


const App = () => {
    return  (
        <>        
            <Sidenav />
            <Container>
                <Navbar />
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Payments} />
                        <Route exact path="/detail" component={PaymentDetail} />
                    </Switch>
                </HashRouter>
            </Container>
        </>
    );
}

const Container = styled.div`
    @media only screen and (min-width: 1025px){
        width: 72%;
    }
`

export default hot(module)(App);