import React from 'react';
import styled from 'styled-components';

const ClientCard = (props) => {
    console.log(props)
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
    width: 20%;
    background-color: white;
    box-shadow: 3px 3px 12px -5px #f7fcfc;
    margin: .4em;
    border-radius: 5px;
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


const Amount = styled.p`
    font-size: 2em;
    margin-top: -.5em;
    font-weight: bolder;

`

const SpacedSection = styled.section`
    display: flex;
    justify-content: space-between;
    width: 90%;
`

const StatusSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 90%;

`

const AnchorArticle = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    
    & a {
        color: gray;
        text-decoration: none;
    }

    & a:first-child {
        font-weight: bolder;
        color: black;
    }
`


export default ClientCard;