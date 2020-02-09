import React from 'react';
import styled from 'styled-components';

const Accordion = () => {
    return (
        <Container>
            <Details>
                <Summary><i className="fas fa-border-all"></i>General</Summary>
                <a href="#">Payments</a>
                <a href="#">Transfer</a>
                <a href="#">Chargebacks</a>

            </Details>

            <Details>
                <Summary><i className="fas fa-exchange-alt"></i>Transactions</Summary>
                <a href="#">Payments</a>
                <a href="#">Transfer</a>
                <a href="#">Chargebacks</a>
            </Details>

            <Details>
                <Summary><i className="fas fa-money-bill"></i>Accounting</Summary>
                <a href="#">Payments</a>
                <a href="#">Transfer</a>
                <a href="#">Chargebacks</a>
            </Details>

            <Details>
                <Summary><i className="fas fa-code"></i>Developers</Summary>
                <p>Made with ♥ by Florencia Silva</p>
                <a target="_blank" href="https://github.com/florenciasilva" rel="noopener noreferrer">Github</a>
                <a target="_blank" href="https://www.linkedin.com/in/florenciasilvaolivera/" rel="noopener noreferrer">Linkedin</a>
                <a target="_blank" href="http://florenciasilva.github.io/" rel="noopener noreferrer">Portfolio</a>
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
    margin: 1em 0 1em 0;
    @media only screen and (min-width: 1025px) {
        width: 13vw;
        margin: 1.5em 0 1.5em 0;
    }

    & a {
        display: block;
        text-decoration: none;
        font-size: 1.2em;
        font-weight: bold;
        color: black;
        padding: .7em;
        text-align: center;
    }

    & a:hover {
        background-color: #EAF7F9;
        color: #33BCB4;
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

    & :hover {
        background-color: #EAF7F9;
        color: #33BCB4;
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