/**
 * External Resources
 **/
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

/**
 * Internal Resources
 **/
import { GRAPHQL_ENDPOINT } from './config/env';
import Routes from './routes/routes';

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
    <Router history={hashHistory} routes={Routes} />
  </ApolloProvider>,
  document.getElementById('root')
);
