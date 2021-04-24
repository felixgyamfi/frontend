import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import GlobalStyle from './themes/globalStyles';

import Dashboard from './components/Dashboard/Dashboard';
import Browse from './components/Browse/Browse';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Route path="/">
        <h1>App</h1>
        <NavBar />
      </Route>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/browse" component={Browse} />
      </Switch>
    </Router>
  );
}

export default App;
