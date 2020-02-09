import React from 'react';
import styled from 'styled-components';

const PaymentMethodCard = (props) => {
    const info = props.data;
    if(info.nested_charges && info.line_items) {
        const bankInfo = info.nested_charges[0].payment_method
        return (
            <CardContainer>
                    <CardTitle>Payment Method</CardTitle>
                    <hr />
                    <SpacedSection>
                        <span>{bankInfo.bank} </span>
                        <Icon className={bankInfo.brand === 'visa' ? 'fab fa-cc-visa' : '' || bankInfo.brand === 'american_express' ? 'fab fa-cc-amex' : ''}></Icon>
                        <p>{bankInfo.type}</p>
                    </SpacedSection>
                    <CreditCard>
                        <CardInfo>**** **** **** {bankInfo.last4}</CardInfo>
                        <CardInfo>{bankInfo.name}</CardInfo>
                        <Section>
                            <CardDetails>Expiration Date: {bankInfo.exp_month} / {bankInfo.exp_year}</CardDetails>
                            <CardDetails>Authorization Code: {bankInfo.auth_code}</CardDetails>
                        </Section>

                    </CreditCard>
                </CardContainer>
        );
    } else {
        return (
            <CardContainer>
                    <CardTitle>Payment Method</CardTitle>
                    <hr />
                    <SpacedSection>
                        <p>Not enough info</p>
                    </SpacedSection>
                </CardContainer>
        );
    };
};

const CardInfo = styled.p`
    color: white;
    font-size: 1.2em;
    font-weight: bold;
    @media only screen and (min-width: 1025px) {
        margin-bottom: -1em;
    }
    
`
const CardDetails = styled(CardInfo)`
    font-size: .9em;
    @media only screen and (min-width: 1025px) {
        margin-top: 5em;
    }
`

const Section = styled.section`
    width: 90%;
    display: flex;
    
`

const CreditCard = styled.article`
    background-color: #0A1438;
    height: 100%;
    width: 100%;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`

const Icon = styled.i`
    font-size: 1.5em;
    margin-left: .4em;
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

const SpacedSection = styled.section`
    display: flex;
    justify-content: space-between;
    width: 90%;
`



export default PaymentMethodCard;