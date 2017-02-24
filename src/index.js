/**
 * External Resources
 **/
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/**
 * Internal Resources
 **/
import { GRAPHQL_ENDPOINT } from './config/env';
import Routes from './routes/routes';

import './index.css';

/**
 * `client`: Set apollo client connection
 **/
const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: GRAPHQL_ENDPOINT }),
});

/**
 * `Render`: Render application
 **/
ReactDOM.render(
  <ApolloProvider client={client}>
    <MuiThemeProvider>
      <Router history={hashHistory} routes={Routes} />
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
