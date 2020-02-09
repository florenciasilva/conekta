import React, { useState } from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';

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
            <Button onClick={showSidenav} aria-label="Sidenav menu"> <i className={button}></i> </Button>
            <Container className={sidenav}>
                <Side className={sidenav}>
                    <Logo src="https://dummyimage.com/200x40/000/fff" alt="Black dummy image with no relevant content" />
                    <Accordion />
                </Side>
            </Container>
        
        </>
    );
};

const Container = styled.div`
    float: left;
    position: absolute;
    @media only screen and (min-width: 1025px) {
        display: flex;
        float: none;
        position: unset;
    }
`

const Button = styled.button`
    border: none;
    height: 5vh;
    background-color: transparent;
    position: absolute;
    z-index: 1000;

    @media only screen and (min-width: 1025px) {
        display: none;
    }
`

const Logo = styled.img`
    width: 200px;
    height: 40px;
    margin-top: 2em;
`

const Side = styled.div`
    height: 100vh;
    width: 50vw;
    display: flex;
    background-color: white;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 1em;

    @media only screen and (min-width: 735px) {
        width: 25vw;
    }
    @media only screen and (min-width: 1025px) {
        display: flex;
        width: 20vw
    }
`

export default Sidenav;