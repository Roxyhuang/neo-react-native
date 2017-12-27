import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
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
          title="StackWithCallback"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
            onPress={() => navigate('Redux')}
            title="Redux"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
        <Button
            onPress={() => navigate('Nest')}
            title="Nest"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
        <Button
            onPress={() => navigate('Header', { user: 'Lucy', mode: 'info' })}
            title="Header"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
        <Button
            onPress={() => navigate('Edit')}
            title="Edit"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

export default HomeScreen;

