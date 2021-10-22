import React, { useState } from 'react';
import { Balance } from './Balance';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';

import { ExpenseGlobalProvider } from './context/ExpenseGlobalState';

import styles from './ExpenseWidget.module.css';

export const ExpenseWidget = () => {
    return (
        <ExpenseGlobalProvider>
            <div className={styles.container}>
            <h3>Expense Tracker</h3>
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>
        </ExpenseGlobalProvider>
        
    )
}
