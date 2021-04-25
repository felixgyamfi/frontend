import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import GlobalStyle from './themes/globalStyles';

import Dashboard from './components/pages/Dashboard/Dashboard';
import Browse from './components/pages/Browse/Browse';
import NavBar from './components/organisms/NavBar/NavBar';

function App() {
  return (
    <Router>
      <GlobalStyle />
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
