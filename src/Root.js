import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App.js';

// import configureStore from './core/store';
// import getTheme from '../native-base-theme/components';
// import platform from '../native-base-theme/variables/platform';

class Root extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: false,
      // store: configureStore(() => this.setState({ isLoading: false })),
    };
  }

  render() {
    return (
      <Provider store={{ stata: 1 }}>
        <App />
      </Provider>
    );
  }
}

export default Root;
