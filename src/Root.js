
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './core/createStore';
import App from './views/App';

export default class Root extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({ isLoading: false })),
    };
  }

  render() {
    console.log(this.state.store)
    // if (this.state.isLoading) {
    //   return null;
    // }

    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    );
  }
}
