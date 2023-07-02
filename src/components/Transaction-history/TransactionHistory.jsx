import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.history}>
      <thead className={styles.head}>
        <tr>
          <th className={styles.type}>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.body}>
        {items.map(el => (
          <tr className={styles.bodyItem} key={el.id}>
            <td className={styles.type}>{el.type}</td>
            <td>{el.amount}</td>
            <td>{el.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
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
  ),
};
export default TransactionHistory;
