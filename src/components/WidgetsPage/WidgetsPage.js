import React from "react";
import { CounterWidget } from './../CounterWidget/CounterWidget';
import { CoinFlipperWidget } from './../CoinFlipperWidget/CoinFlipperWidget';
import { ExpenseWidget } from './../ExpenseWidget/ExpenseWidget';

const WidgetsPage = () => {
  return (
    <div>
      <h2>Widgets</h2>
      <div className='widgetPage-container'>
          <CounterWidget />
          <CoinFlipperWidget />
          <ExpenseWidget />
      </div>
    </div>
  );
}

export default WidgetsPage;