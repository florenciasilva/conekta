import React from 'react';
import styled from 'styled-components';

const PaymentAttempts = (props) => {
    const record = props.data;

        const amount = record.amount.toString();
        
        const lastTwoDigits = amount.substr(-2);
        const firstDigits = amount.slice(0, -2);
        const formattedAmount = firstDigits + '.' + lastTwoDigits;
        
        const formattedStatus = record.status.replace('_', ' ');
        
        let formattedFailure = record.failure
        if(record.failure) {
            formattedFailure = formattedFailure.replace('_', ' ');
        }

        const getDate = new Date(record.created);
        const formatDate = new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "long",
            day: "2-digit"
          }).format(getDate)


    return (
        <CardContainer>
                <CardTitle>Payment Attempts</CardTitle>
                <hr />
            <Table>
                <Title>
                    <th>Date</th>                
                    <th>Status</th>                
                    <th>Payment Method</th>                
                    <th>Amount</th>     
                </Title>
                <TBody>
                    <tr>
                        <td>{formatDate}</td>
                        <td>
                            <p>
                                <span className={record.status + " bold"}>{formattedStatus}</span>
                            </p>
                        </td>
                        <td>
                            <p>
                                {record.type} 
                                <Icon className={record.brand === 'visa' ? 'fab fa-cc-visa' : '' || record.brand === 'american_express' ? 'fab fa-cc-amex' : ''}></Icon>
                            </p>
                        </td>
                        <td>
                            <p>${formattedAmount}</p>
                        </td>
                    </tr>
                </TBody>
            </Table>
        </CardContainer>
    )
}


const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-self: flex-start;
    flex-direction: column;
    width: 100%;
    background-color: white;
    box-shadow: 3px 3px 12px -5px #f7fcfc;
    margin: .4em;
    border-radius: 5px;

    @media only screen and (min-width: 1025px) {
        width: 61.5%;
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


const TBody = styled.tbody`
    background-color: #f2f2f2;

`


const Table = styled.table`
    max-height: 30vh;
    width: 100%;
    margin: 0;
    padding: 0;
    border-collapse: collapse;

`

const Title = styled.thead`
    text-align: center;
`

const Icon = styled.i`
    font-size: 1.5em;
    margin-left: .4em;
`

const Email = styled.p`
    font-size: .7em;
    letter-spacing: .1em;
`

const Failure = styled.p`
    font-size: .9em;
    letter-spacing: .1em;
`


export default PaymentAttempts;