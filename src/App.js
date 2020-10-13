import React from 'react';
import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';

import './App.css';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
