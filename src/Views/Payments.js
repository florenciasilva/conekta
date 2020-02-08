import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PaymentsTable from '../Components/PaymentsTable';
import records from '../records.json';

const Payments = () => {    
    return (
        <Main>
            <Title>Payments</Title>
            <Section>
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
    width: 100%;
    flex-direction: column;
    margin-left: 1em;
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