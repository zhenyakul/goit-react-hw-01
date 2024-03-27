import css from "./Transactions.module.css";

const Transactions = ({ transactions }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.tr}>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => {
          return (
            <tr className={css.tr}>
              <td className={css.td}>{transaction.type}</td>
              <td className={css.td}>{transaction.amount}</td>
              <td className={css.td}>{transaction.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Transactions;
