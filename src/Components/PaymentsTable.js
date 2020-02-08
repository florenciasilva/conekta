import React from 'react';
import styled from 'styled-components';

const PaymentsTable = (props) => {

    const dataMap = props.data.data.payments.map((record, i) => {
        const amount = record.amount.toString();
        const lastTwoDigits = amount.substr(-2);
        const firstDigits = amount.slice(0, -2);
        const formattedAmount = firstDigits + '.' + lastTwoDigits;
        return (
            <tr>
                <td>date</td>
                <td>
                    <p>{record.status}</p>
                    <p style={{display: record.failure !== null ? 'block' : 'none'}}>{record.failure}</p>
                </td>
                <td>
                    <p>{record.type}</p>
                    <p>{record.brand}</p>
                </td>
                <td>
                    <p>{record.customer.name}</p>
                    <p>{record.customer.email}</p>
                </td>
                <td>
                <p>{formattedAmount}</p>
                </td>
            </tr>
        )
    })

    return (
        <Table>
            <Title>
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
`

const Title = styled.thead`
    text-align: center;
`

export default PaymentsTable;