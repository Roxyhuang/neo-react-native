import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as homeActions from '../core/actions/homeActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = function(state) {
  const { home } = state;
  return {
    home,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
      { ...homeActions }, dispatch),
});

// import CodePush from 'react-native-code-push';
// import MainStackRouter from './Routers/MainStackRouter';
// import { Container, Content, Text } from 'native-base';
// import Modal from 'react-native-modalbox';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: null,
//     height: null,
//   },
//   modal: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modal1: {
//     height: 300,
//   },
// });

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
   console.log(this.props.actions.increment);
  }

  render() {
    // if (this.state.showDownloadingModal) {
    return (
        <View>
          <Text>123</Text>
        </View>
    );
  }

  // return <MainStackRouter />;
  // }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
