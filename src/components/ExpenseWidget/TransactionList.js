import React, { useContext } from 'react'
import { Transaction } from './Transaction';
import { ExpenseGlobalContext } from './context/ExpenseGlobalState'
import styles from './ExpenseWidget.module.css';

export const TransactionList = () => {
    const { transactions } = useContext(ExpenseGlobalContext);

    return (
        <>
            <h4>History</h4>
            <ul className={styles.list}>
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>
        </>
    )
}
