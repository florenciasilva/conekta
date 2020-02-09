import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import breakdown from '../breakdown.json';

import PaymentStatus from '../Components/PaymentStatus';
import ClientCard from '../Components/ClientCard';
import PaymentMethodCard from '../Components/PaymentMethodCard';
import PaymentAttempts from '../Components/PaymentAttempts';
import Breakdown from '../Components/Breakdown';

const PaymentDetail = (props) => {
    const [ currentRender, setRender ] = useState(1);

    const handleBreakdown = () => {
        setRender(-1);
    };

    const handleData = () => {
        setRender(1);
    };


    const renderScreen = () => {
        if(currentRender === 1) {
            return (
                <>
                    <Container>
                        <PaymentStatus data={breakdown.data.payment}/>
                        <ClientCard data={breakdown.data.payment} />
                        <PaymentMethodCard data={breakdown.data.payment} />
                    </Container>
                    <PaymentAttempts data={breakdown.data.payment} />
                </>
            );
        } else {
            return (
                <Breakdown data={breakdown.data.payment}/>
            );
        }
    };

    if(props.location.state === undefined || props.location.state === '') {
        props.history.push('/');
        return (
            <p> :c </p>
        )
    } if (props.location.state.record.id === breakdown.data.payment.id) {
        return (
        <Main>
                <Title>Payment Details</Title>
                    <Container>
                        <Button onClick={handleData} className={currentRender === 1 ? 'active' : ''}>Data</Button>
                        <Button onClick={handleBreakdown} className={currentRender === -1 ? 'active' : ''}>Breakdown</Button>
                    </Container>
                    <hr />
                    {renderScreen()}
            </Main>
        )
    } else {
        return (
            <Main>
                <Title>Payment Details</Title>
                <Container>
                    <PaymentStatus data={props.location.state.record}/>
                    <ClientCard data={props.location.state.record} />
                    <PaymentMethodCard data={props.location.state.record} />
                </Container>
            </Main>
        );
    }
};

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    margin-left: 1em;

    @media only screen and (min-width: 1025px) {
        width: auto;
    }
`

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`

const Title = styled.h1`
    align-self: flex-start;
    padding: 1em;
`

const Button = styled.button`
    background: transparent;
    border: none;
    margin: .4em;
    font-weight: bold;
    font-size: 1.2em;

    :hover {
        color: #33BCB4;
    }
`


export default withRouter(PaymentDetail);