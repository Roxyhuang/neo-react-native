import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class IndexScreen extends React.Component {
  static navigationOptions = {
    title: 'WelcomeIndex',
  };
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
    return (
        <View>
          <Text>Index</Text>
        </View>
    );
  }
}

export default IndexScreen;

