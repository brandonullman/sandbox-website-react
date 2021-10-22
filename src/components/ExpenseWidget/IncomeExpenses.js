import React from 'react';
import styles from './ExpenseWidget.module.css';

export const IncomeExpenses = () => {
    return (
        <div className={styles.incExpContainer}>
            <div>
                <h5>Income</h5>
                <p className={`${styles.money} ${styles.plus}`}>+$0.00</p>
            </div>
            <div>
                <h5>Expense</h5>
                <p className={`${styles.money} ${styles.minus}`}></p>
            </div>

        </div>
    )
}