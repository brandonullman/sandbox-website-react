import React from "react";
import { CounterWidget } from './../CounterWidget/CounterWidget';
import { CoinFlipperWidget } from './../CoinFlipperWidget/CoinFlipperWidget';

const WidgetsPage = () => {
  return (
    <div>
      <h2>Widgets</h2>
      <div className='widgetPage-container'>
          <CounterWidget />
          <CoinFlipperWidget />
      </div>
      <p>
          WIDGETS!
      </p>
    </div>
  );
}

export default WidgetsPage;