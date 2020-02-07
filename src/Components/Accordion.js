import React from 'react';
import styled from 'styled-components';

const Accordion = () => {
    return (
        <Container>
            <Details>
                <Summary><i class="fas fa-border-all"></i>General</Summary>
            According to 2010 Census Bureau estimates, New Orleans' population is made up of approximately 343,829 residents.
            </Details>

            <Details>
                <Summary><i class="fas fa-exchange-alt"></i>Transactions</Summary>
            A po' boy (also po-boy, po boy) is a traditional sandwich from Louisiana. It almost always consists of meat, which is usually roast beef or fried seafood, often shrimp, crawfish, fish, oysters or crab.
            </Details>

            <Details>
                <Summary><i class="fas fa-money-bill"></i>Accounting</Summary>
            Use Google Maps.
            </Details>

            <Details>
                <Summary><i class="fas fa-code"></i>Developers</Summary>
            Use Google Maps.
            </Details>
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`

const Details = styled.details`
    margin: 1.5em 0 1.5em 0;
    @media only screen and (min-width: 1025px) {
        width: 13vw;
        margin: 2em 0 2em 0;
    }
`

const Summary = styled.summary`
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: .1em;

    &::-webkit-details-marker {
        float: right;
        font-size: .5em;
        margin-top: 1em;
        margin-left: .5em;

    }

    & i {
        margin: .3em
    }
    @media only screen and (min-width: 1025px) {
        letter-spacing: .2em;
        &::-webkit-details-marker {
            float: right;
            font-size: .5em;
            margin-top: 2em;
        }

        & i {
            margin: 1em
        }
    }
`

export default Accordion;