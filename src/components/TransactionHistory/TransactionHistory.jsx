import css from "./TransactionHistory.module.css";
import clsx from "clsx";

export default function TransactionHistory({items}) {
    return (
        <table className={css.table}>
            <thead className={css.tableRowName}>
                <tr>
                    <th className={css.tableItem}>Type</th>
                    <th className={css.tableItem}>Amount</th>
                    <th className={css.tableItem}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item) => (
                    <tr className={css.tableBody} key={item.id}>
                        <td className={clsx(css.tableItem, css.tableItemUp)}>{item.type}</td>
                        <td className={css.tableItem}>{item.amount}</td>
                        <td className={css.tableItem}>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}