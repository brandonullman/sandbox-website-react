import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { default as NavigationBar } from './components/NavigationBar/NavigationBar';
export { default as Footer } from './components/Footer/Footer';
export { default as HomePage } from './components/HomePage/HomePage';
export { default as AboutPage } from './components/AboutPage/AboutPage';
export { default as ContactPage } from './components/ContactPage/ContactPage';
export { default as WidgetsPage } from './components/WidgetsPage/WidgetsPage';