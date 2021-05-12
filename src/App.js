import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalStyle from './themes/globalStyles';

import Dashboard from './components/pages/Dashboard/Dashboard';
import Browse from './components/pages/Browse/Browse';
import Program from './components/pages/Program/Program';

function App() {
  return (
    <Router>
      <div>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/browse" component={Browse} />
          <Route path="/program/:id" component={Program} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
