import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavigationBar, Footer, HomePage, AboutPage, ContactPage, WidgetsPage } from "./";
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path='/' exact component={() => <HomePage />} />
          <Route path='/about' exact component={() => <AboutPage />} />
          <Route path='/widgets' exact component={() => <WidgetsPage />} />
          <Route path='/contact' exact component={() => <ContactPage />} />
          <Route path='/widgets' exact component={() => <WidgetsPage />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
