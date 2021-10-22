import React from 'react'
import styles from './ExpenseWidget.module.css';

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={transaction.amount < 0 ? styles.minus : styles.plus}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className={styles.deleteBtn}>x</button>
        </li>
    )
}
