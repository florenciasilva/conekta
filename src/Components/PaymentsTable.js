import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const PaymentsTable = (props) => {
    const [ redirect, setRedirect ] = useState(false)

    const handleRedirect = (record) => {
        console.log(record, '<= handleRedirect record')
        setRedirect(!redirect)
        props.history.push({
            pathname: '/detail',
            state: { record }
          })
    }

    

    const dataMap = props.data.data.payments.map((record, i) => {
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
            <tr key={i}>
                <td>
                    <Button onClick={() => handleRedirect(record)} aria-label="Click to see more details">
                        <i className="far fa-eye"></i>
                    </Button>
                </td>
                <td>{formatDate}</td>
                <td>
                    <p>
                        <span className={record.status + " bold"}>{formattedStatus}</span>
                    </p>
                    <Failure style={{display: record.failure !== null ? 'block' : 'none'}}>{formattedFailure}</Failure>
                </td>
                <td>
                    <p>
                        {record.type} 
                        <Icon className={record.brand === 'visa' ? 'fab fa-cc-visa' : '' || record.brand === 'american_express' ? 'fab fa-cc-amex' : ''}></Icon>
                    </p>
                </td>
                <td>
                    <p>{record.customer.name}</p>
                    <Email>{record.customer.email}</Email>
                </td>
                <td>
                    <p>${formattedAmount}</p>
                </td>
            </tr>
        );
    });
    
    return (
        <Table>
            <Title>
                <th></th>
                <th>Date</th>                
                <th>Payment Status</th>                
                <th>Payment Type</th>                
                <th>Customer</th>                
                <th>Amount</th>     
            </Title>
            <tbody>
                {dataMap}
            </tbody>
        </Table>
    );
};


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

const Button = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;

    &:hover {
        color: #33BCB4;
    }
`


export default withRouter(PaymentsTable);