/**
 * External Resources
 **/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './HomePage.css';
/**
 * Internal Resources
 **/

injectTapEventPlugin();

/**
 * Sample class definition
 **/
class HomePage extends Component {
  /**
   * childContextTypes
   * @property {object} muiTheme MUI integration with component
   * */
  static childContextTypes = {
    muiTheme: PropTypes.object
  };

  /**
   * getChildContext
   * @return {object} muiTheme MUI theme integration
   * */
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  /**
   * render
   * @return {ReactElement} markup
   * */
  render() {
    return (
      <div className="home-page">
        <h1>React-Apollo-MUI PWA</h1>
        <h2>Starter Pack</h2>
        <div>
          <RaisedButton
              label="View Repo"
              href="https://github.com/Danjavia/PWA-ReactJS-Starter-Pack"
              target="_blank"
              secondary={true}
              icon={<i className="fa fa-github"></i>}
          />
        </div>
      </div>
    );
  }
}

/**
 * Export class
 **/
export default HomePage;
