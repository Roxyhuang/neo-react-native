import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'WelcomeHome',
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
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Home</Text>
        <Button
          onPress={() => navigate('Index', { user: 'Lucy' })}
          title="linkToIndex"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
            onPress={() => navigate('Redux')}
            title="linkToRedux"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

export default HomeScreen;

