import React from "react";
import { CounterWidget } from './../CounterWidget/CounterWidget';

const WidgetsPage = () => {
  return (
    <div className='widget-container'>
        <h2>Widgets</h2>
        <CounterWidget />
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
        </p>
    </div>
  );
}

export default WidgetsPage;