import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
// import CodePush from 'react-native-code-push';
// import MainStackRouter from './Routers/MainStackRouter';
import { Container, Content, Text } from 'native-base';
// import Modal from 'react-native-modalbox';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal1: {
    height: 300,
  },
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

  // componentDidMount() {
  //   // TODO
  // }

  render() {
    if (this.state.showDownloadingModal) {
      return (
        <Container>
          <Content style={styles.container}>
            <Text>123</Text>
          </Content>
        </Container>
      );
    }

    return <MainStackRouter />;
  }
}

export default App;
