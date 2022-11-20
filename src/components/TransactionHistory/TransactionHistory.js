import PropTypes from 'prop-types';
import {
  Wrapper,
  TableHead,
  TableBody,
  TableColumn,
  TableElem,
  TableHeadName,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Wrapper>
      <thead>
        <TableHead>
          <TableHeadName>Type</TableHeadName>
          <TableHeadName>Amount</TableHeadName>
          <TableHeadName>Currency</TableHeadName>
        </TableHead>
      </thead>
      <TableBody>
        {items.map(item => (
          <TableColumn key={item.id}>
            <TableElem>{item.type}</TableElem>
            <TableElem>{item.amount}</TableElem>
            <TableElem>{item.currency}</TableElem>
          </TableColumn>
        ))}
      </TableBody>
    </Wrapper>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
