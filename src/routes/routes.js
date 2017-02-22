/**
 * External libraries
 * */
import React from 'react';
import { IndexRoute, Route, Redirect } from 'react-router';

import App from '../components/App/App';
import Sample from '../components/Sample/Sample';
import NotFound from '../components/NotFound/NotFound';

/**
 * Router class definition.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Sample} />
    <Redirect from="/crm" to="/crm/opportunities/415199" />
    <Route path="*" component={NotFound} />
  </Route>
);