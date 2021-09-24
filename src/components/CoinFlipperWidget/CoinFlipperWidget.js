import React, { useState } from "react";
import './CoinFlipperWidget.css';

export const CoinFlipperWidget = () => {

    const [ coin, setCoin ] = useState('Heads');
    const [ flips, setFlips ] = useState(0);
    
    const flipCoin = () => {
        let flipResult = Math.random();
        setCoin('');
        if (flipResult <= .5) {
            setCoin('Tails');
        } else {
            setCoin('Heads');
        }
        setFlips(prev => prev + 1);
        console.log(`The RNG was ${flipResult}, you got ${coin}, you've flipped the coin ${flips} times!`);
    }
  
    return (
        <div className='widget-container'>
            <h3>Coin Flipper</h3>
            <div id='coin' className={coin}>
                <div className='side-a'>Heads</div>
                <div className='side-b'>Tails</div>
                <div>You've flipped this coin {flips} times!</div>
            </div>
            <div className='button-container'>
                <button onClick={flipCoin} className='button'>Flip Me!</button>
                <button onClick={() => setFlips(0)} className='button'>Reset Flip Counter!</button>
            </div>
        </div>
  );
}