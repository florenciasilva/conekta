import React from 'react';
import styled from 'styled-components';
import PaymentStatus from '../Components/PaymentStatus';
import ClientCard from '../Components/ClientCard';
import { withRouter } from 'react-router-dom';
import breakdown from '../breakdown.json';

const PaymentDetail = (props) => {
    console.log(props.location.state.record)
    if(props.location.state === undefined) {
        props.history.push('/');
        return (
            <p> :c </p>
        )
    } if(props.location.state.record.id === breakdown.data.payment.id) {
        return (
        <Main>
                <Title>Payment Details</Title>
                <Container>
                    <PaymentStatus data={breakdown.data.payment}/>
                    <ClientCard data={breakdown.data.payment} />
                </Container>
            </Main>
        )
    } else {
        return (
            <Main>
                <Title>Payment Details</Title>
                <Container>
                    <PaymentStatus data={props.location.state.record}/>
                    <ClientCard data={props.location.state.record} />

                </Container>

            </Main>
        );
    }
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

const Container = styled.div`
    display: flex;
    width: 100%;
`

const Title = styled.h1`
    align-self: flex-start;
    padding: 1em;
`


export default withRouter(PaymentDetail);