/**
 * External libraries
 **/
import React from 'react';
import { Route } from 'react-router-dom';

/**
 * Internal Resources
 **/
// import App from '../components/App/App';
import HomePage from '../pages/HomePage/HomePage';
import NotFound from '../pages/NotFound/NotFound';

/**
 * Router class definition.
 **/
export default () => (
  <div className="container">
    <Route exact path="/" component={HomePage} />
    <Route path="*" component={NotFound} />
  </div>
);