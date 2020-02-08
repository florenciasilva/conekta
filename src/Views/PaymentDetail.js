import React from 'react';
import styled from 'styled-components';

const PaymentDetail = (props) => {
    console.log(props)
    return (
        <Main>
            <Title>Payment Details</Title>
        </Main>
    );
};

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95vw;
    flex-direction: column;
    margin-left: 1em;

    @media only screen and (min-width: 1025px) {
        width: auto;
    }
`

const Title = styled.h1`
    align-self: flex-start;
    padding: 1em;
`


export default PaymentDetail;