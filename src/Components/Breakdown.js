import React from 'react';
import styled from 'styled-components';

const Breakdown = (props) => {
    const info = props.data.line_items[0];
    const lastTwoDigits = info.unit_price.toString().substr(-2);
    const firstDigits = info.unit_price.toString().slice(0, -2);
    const formattedAmount = firstDigits + '.' + lastTwoDigits;

    return (
        <Section>
            <div>
                <Table>
                    <Title>
                        <th>SKU</th>                
                        <th>Quantity</th>                
                        <th>Articles</th>                
                        <th>Taxes</th>                
                        <th>Shipping</th>
                        <th>Discounts</th>   
                        <th>Unit Price</th>   
                    </Title>
                    <tr>
                        <td></td>
                        <td>{info.quantity}</td>
                        <td>{info.name}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{formattedAmount}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                        <th>Subtotal</th>
                        <td>$93.74</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                        <th>Fee</th>
                        <td>$6.26</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                        <th>Total</th>
                        <td>{formattedAmount}</td>
                    </tr>
                </Table>
            </div>
        </Section>
    );
};

const Section = styled.section`
    background-color: white;
    max-height: 60vh;
    margin: .4em;
    align-self: flex-start;    
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


export default Breakdown;