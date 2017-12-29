import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { Actions } from 'react-native-router-flux';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    // console.log(navigation);
    const title = 'Home';
    return { title };
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
    // console.log(this.props.navigation.state);
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
            onPress={() => Actions.jump('Redux')}
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
        <Button
            onPress={() => navigate('NavOption')}
            title="NavOption"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

export default HomeScreen;

