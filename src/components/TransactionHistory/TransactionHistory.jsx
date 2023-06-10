import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.title}>
        <tr>
          <th className={css.elem}>Type</th>
          <th className={css.elem}>Amount</th>
          <th className={css.elem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


const { number, string, array } = PropTypes;

TransactionHistory.propTypes = {
  items: array,
  id: number,
  type: string,
  amount: string,
  currency: string,
};


