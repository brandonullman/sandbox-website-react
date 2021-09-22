import React from 'react';
import logo from './logo.svg';
import { NavigationBar } from './components/navigationBar/NavigationBar';
import { CounterWidget } from './components/counterWidget/CounterWidget';

function App() {
  return (
    <div>
      <nav>
        <NavigationBar />
      </nav>
      <main>
        <CounterWidget />
      </main>
    </div>
  );
}

export default App;
