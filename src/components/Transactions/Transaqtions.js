import PropTypes from 'prop-types';


import { Head, Table, Line, Row } from "./Transaqtions.styled"

export const TransactionHistory = ({items})=>{
return (<Table className="transaction-history">
  <Head>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </Head>

    {items.map(({id, type, amount, currency})=>{
    return <tbody key={id}>
     <Row>
      <Line>{type}</Line>
      <Line>{amount}</Line>
      <Line>{currency}</Line>
    </Row>
  </tbody>
    })}
  
</Table>)
} 

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};