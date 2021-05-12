import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { ThemeProvider } from 'styled-components';
import * as theme from './themes/theme';

import App from './App';

const client = new ApolloClient({
  uri: 'https://8h0g60av.api.sanity.io/v1/graphql/production/default',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
