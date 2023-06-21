import PropTypes from 'prop-types';

import {
  Table,
  TableHeader,
  TableRow,
  TableHeadCell,
  TableCell,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeadCell>Type</TableHeadCell>
          <TableHeadCell>Amount</TableHeadCell>
          <TableHeadCell>Currency</TableHeadCell>
        </TableRow>
      </TableHeader>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
              <TableCell>{type}</TableCell>
              <TableCell>{amount}</TableCell>
              <TableCell>{currency}</TableCell>
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
