import React from 'react';
import styled from 'styled-components';

const ClientCard = (props) => {
    const info = props.data.customer;
    return (
        <CardContainer>
                <CardTitle>Client</CardTitle>
                <hr />
                <Section>
                    <SecondaryTitle> <i className="far fa-user"></i> Name </SecondaryTitle>
                    <CardText>{info.name}</CardText>
                    
                    <SecondaryTitle> <i className="far fa-envelope"></i> Email </SecondaryTitle>
                    <CardText>{info.email}</CardText>

                    <SecondaryTitle> <i className="fas fa-phone-alt"></i> Phone Number </SecondaryTitle>
                    <CardText style={{display: info.phone ? 'flex' : 'none'}}>{info.phone}</CardText>
                    </Section>
            </CardContainer>
    )
}

const Section = styled.section`
    width: 90%;
`

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background-color: white;
    box-shadow: 3px 3px 12px -5px #f7fcfc;
    margin: .4em;
    border-radius: 5px;
    @media only screen and (min-width: 1025px) {
        width: 20%;
    }
`

const CardTitle = styled.h2`
    align-self: flex-start;
    margin-left: .5em;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: .05em;
    font-size: 1.2em;
`

const SecondaryTitle = styled.h3`
    font-size: 1em;
    color: #7C7F87;
`

const CardText = styled.p`
    font-weight: bold;
    margin-top: -1em;

`

export default ClientCard;