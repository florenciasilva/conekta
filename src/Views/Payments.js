import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PaymentsTable from '../Components/PaymentsTable';
import records from '../records.json';

const Payments = () => {    
    return (
        <Main>
            <Title>Payments</Title>
            <Section tabIndex="0">
                <div>
                    <PaymentsTable data={records} />
                </div>
            </Section>
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

const Section = styled.section`
    background-color: white;
    width: 95%;
    max-height: 60vh;
    overflow-y: scroll;
    
`

export default Payments;