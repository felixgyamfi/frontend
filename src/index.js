import React from 'react';
import ReactDOM, { render } from 'react-dom';

import { ThemeProvider } from 'styled-components';
import * as theme from './themes/theme';

import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
