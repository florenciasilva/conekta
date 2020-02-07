import React from 'react';
import styled from 'styled-components';
import Sidenav from './Sidenav';

const Navbar = () => {
    return (
        <div style={{display: "flex", justifyContent: "space-between", flexDirection: 'row'}}>
            <Sidenav />
            <Nav className="nav">
                <Container>
                        <Image src="https://dummyimage.com/50x50/000/fff" alt="Black dummy image with no relevant content"/>
                        <Wrapper>
                            <Label>user name</Label>
                            <User>Whoever Whatever</User>
                        </Wrapper>
                </Container>
            </Nav>
        </div>
    );
};

const Nav = styled.nav`

    @media only screen and (min-width: 1025px) {
        width: 80%;
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 15vh;
`

const Image = styled.img`
    border-radius: 50%;
`

const Wrapper = styled.div`
    width: 40%
    @media only screen and (min-width: 1025px) {
        width: 60%
    }
`

const Label = styled.p`
    color: gray;
    font-size: .9em;
    letter-spacing: .1em;
`

const User = styled.p`
    letter-spacing: .1em;
`

export default Navbar;