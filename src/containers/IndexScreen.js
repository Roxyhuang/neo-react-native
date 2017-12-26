import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class IndexScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });

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
    const { params } = this.props.navigation.state;
    return (
        <View>
          <Text>Index</Text>
          <Text>Chat with {params.user}</Text>
        </View>
    );
  }
}

export default IndexScreen;

