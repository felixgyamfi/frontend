import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Browse from './components/Browse/Browse';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <Route path="/">
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
