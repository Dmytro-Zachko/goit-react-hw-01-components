import PropTypes from 'prop-types';
import { Table,TableHead,TableData,TableRaw } from './TransationHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
  <thead>
    <tr>
      <TableHead>Type</TableHead>
      <TableHead>Amount</TableHead>
            <TableHead>Currency</TableHead> 
          </tr>
          </thead>
                <tbody>
                    {items.map(({ id, type, amount, currency }) => (
      <TableRaw key={id}>
      <TableData firstColumn> {type} </TableData>
      <TableData> {amount} </TableData>
      <TableData> {currency} </TableData>
    </TableRaw>
    ))} 
                  </tbody>
            </Table>
    )
}

TransactionHistory.propTypes = {
  id: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired, 
      }),
    ),

}