import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions from '../core/actions/homeActions';
import MainRouter from '../routers/MainRouter';
// import MainStackRouter from '../routers/MainStackRouter';
// import CodePush from 'react-native-code-push';
// import { Container, Content, Text } from 'native-base';
// import Modal from 'react-native-modalbox';

const mapStateToProps = (state) => {
  const { home } = state;
  return {
    home,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
      { ...homeActions }, dispatch),
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDownloadingModal: false,
      showInstalling: false,
      downloadProgress: 0,
    };
  }

  componentDidMount() {
   // console.log(this.props.home.home);
  }
  render() {
    return <MainRouter />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
