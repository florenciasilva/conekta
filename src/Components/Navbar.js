import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
    return (
        <>
            <Nav className="nav">
                <Container>
                        <Image src="https://dummyimage.com/50x50/000/fff" alt="Black dummy image with no relevant content"/>
                        <Wrapper>
                            <Label>user name</Label>
                            <User>Mrs. No Name</User>
                        </Wrapper>
                </Container>
            </Nav>
            </>
    );
};

const Nav = styled.nav`
    width: 100%;
    @media only screen and (min-width: 1025px) {
        width: 75vw;
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
    margin: .2em;
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
    font-weight: bold;
    margin-top: -.7em;
`

export default Navbar;