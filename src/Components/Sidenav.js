import React, { useState } from 'react';
import styled from 'styled-components';

const Sidenav = () => {

    const [ sidenav, setSidenav ] = useState('hidden');
    const [ button, setButton ] = useState('fas fa-bars')
    const showSidenav = () => {
        setSidenav('visible');
        setButton('fas fa-minus');

        if(button === 'fas fa-minus') {
            setButton('fas fa-bars');
            setSidenav('hidden');
        };
    }
    return (
        <>

            <Button onClick={showSidenav}> <i className={button}></i> </Button>
            <Side className={sidenav}>
                <ul>
                    <li>asdasd</li>
                </ul>
            </Side>
        
        </>
    );
};

const Button = styled.button`
    border: none;
    background-color: red;
    height: 5vh;
    position: absolute;
    z-index: 1000;

    @media only screen and (min-width: 1025px) {
        display: none;
        
    }
`

const Side = styled.div`
    height: 100vh;
    width: 20vw;
    background-color: gray;
    margin: 0;
    @media only screen and (min-width: 1025px) {
        display: flex;
        
    }
`

export default Sidenav;