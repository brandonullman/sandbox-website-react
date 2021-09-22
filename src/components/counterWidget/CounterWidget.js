import React, { useEffect, useState } from 'react';
import './CounterWidget.css';


export const CounterWidget = () => {
    
    let [ count, setCount ] = useState(0);
    const [ color, setColor ] = useState('black');

    const increment = () => {
        setCount(++count);
    }
    const decrement = () => {
        setCount(--count);
    }
    const reset = () => {
        setCount(count=0);
    }

    useEffect(() => {
        if (count > 0) {
            setColor('green');
        } else if (count < 0) {
            setColor('red');
        } else if (count === 0) {
            setColor('black');
        }
    }, [count]);

    return(
        <div className='widget-container'>
            <h3>Counter</h3>
            <span id='value' style={{color: color}}>{count}</span>
            <div className="button-container">
                <button onClick={decrement} className="button decrease">Decrease</button>
                <button onClick={reset} className="button reset">Reset</button>
                <button onClick={increment} className="button increase">Increase</button>
            </div>
        </div>
    );
};