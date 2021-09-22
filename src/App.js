import React from 'react';
import logo from './logo.svg';
import { NavigationBar } from './components/navigationBar/NavigationBar';
import { CounterWidget } from './components/counterWidget/CounterWidget';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <NavigationBar />
      </nav>
      <main>
        <CounterWidget />
      </main>
      <footer>
        Website Made by Brandon U.
      </footer>
    </div>
  );
}

export default App;
