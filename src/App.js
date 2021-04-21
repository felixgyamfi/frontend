import React from 'react';
import GlobalStyle from './themes/globalStyles';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Dashboard />
      <h1>App</h1>
    </div>
  );
}

export default App;
