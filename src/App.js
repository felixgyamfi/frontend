import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import GlobalStyle from './themes/globalStyles';
import Dashboard from './components/Dashboard/Dashboard';
import Browse from './components/Browse/Browse';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Dashboard />
      <Browse />
      <h1>App</h1>
    </div>
  );
}

export default App;
