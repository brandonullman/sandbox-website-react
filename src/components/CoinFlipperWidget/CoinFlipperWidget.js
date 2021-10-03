import React, { useState } from "react";
import './CoinFlipperWidget.css';

export const CoinFlipperWidget = () => {

    const [ coin, setCoin ] = useState('');
    const [ flips, setFlips ] = useState(0);

    const flipCoin = () => {
        let flipResult = Math.random();
        setCoin('');
        setTimeout(function() {
            if (flipResult <= .5) {
                setCoin('tails');
            } else {
                setCoin('heads');
            }
            console.log(`The RNG was ${flipResult}, you got ${coin}, you've flipped the coin ${flips} times!`);
        }, 100);
        setFlips(prev => prev + 1);
    }

    return (
        <div className='widget-container'>
            <h3>Coin Flipper</h3>
            <div>
                <div id='coin' className={coin}>
                    <div className='side-a'><p>Heads</p></div>
                    <div className='side-b'><p>Tails</p></div>
                </div>
                <h6>You've flipped this coin {flips} times!</h6>
            </div>
            <div className='button-container'>
                <button onClick={flipCoin} className='button'>Flip Me!</button>
                <button onClick={() => setFlips(0)} className='button'>Reset Flip Counter!</button>
            </div>
        </div>
  );
}