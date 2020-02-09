import React from 'react';
import styled from 'styled-components';

const PaymentStatus = (props) => {
    console.log(props)
    const detail = props.data;
    const lastTwoDigits = detail.amount.toString().substr(-2);
    const firstDigits = detail.amount.toString().slice(0, -2);
    const formattedAmount = firstDigits + '.' + lastTwoDigits;
    

    const getDate = new Date(detail.created);
        const formatDate = new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "long",
            day: "2-digit"
          }).format(getDate);
        
        const formattedStatus = detail.status.replace('_', ' ');

    return (
        <CardContainer>
                <CardTitle>Payment status</CardTitle>
                <hr />
                <SpacedSection>
                    <article>
                        <ArticleTitle>Amount</ArticleTitle>
                        <Amount>${formattedAmount}</Amount>
                    </article>
                    <article>
                    <ArticleTitle>Created at: {formatDate}</ArticleTitle>
                        <p>Paid at: </p>
                    </article>
                </SpacedSection>
                <StatusSection>
                    <p className={detail.status + " bold"}>{formattedStatus}</p>
                    
                </StatusSection>
                <SpacedSection>
                    <article>
                        <ArticleTitle>Order id</ArticleTitle>
                        <p>{detail.id}</p>
                    </article>
                    <AnchorArticle>
                        <a href="#">View Transfer</a>
                        <a href="#">View Chargeback</a>
                    </AnchorArticle>
                </SpacedSection>
            </CardContainer>
    )
}

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background-color: white;
    box-shadow: 3px 3px 12px -5px #f7fcfc;
    margin: .4em;
    border-radius: 5px;

    @media only screen and (min-width: 1025px) {
        width: 40%;
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

const ArticleTitle = styled.h3`
    font-size: 1em;
    color: #7C7F87;
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


export default PaymentStatus;