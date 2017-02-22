/**
 * External libraries
 **/
import React from 'react';
import { IndexRoute, Route } from 'react-router';

/**
 * Internal Resources
 **/
import App from '../components/App/App';
import Sample from '../components/Sample/Sample';
import NotFound from '../components/NotFound/NotFound';

/**
 * Router class definition.
 **/
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Sample} />
    <Route path="*" component={NotFound} />
  </Route>
);