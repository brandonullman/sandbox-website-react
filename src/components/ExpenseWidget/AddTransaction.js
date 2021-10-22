import React, {useState} from 'react'
import styles from './ExpenseWidget.module.css';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    return (
        <>
            <h4>Add new transaction</h4>
            <form>
                <div className={styles.formControl}>
                    <label htmlFor='text'>Text</label>
                    <input type='text' value={text} onChange={(e) => setText(e.target.value)}
                    placeholder='Enter text...' />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor='amount'>
                        Amount <br />
                        (negative - expense, positive - income)</label>
                    <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)}
                    placeholder='Enter amount...' />
                </div>
                <button className={styles.button}>Add Transaction</button>
            </form>
        </>
    )
}
