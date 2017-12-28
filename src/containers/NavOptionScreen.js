import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class NavOptionScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'NavOption',
    headerRight: <Button color={screenProps.tintColor} title="tintColor" />,
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
          <Text>Nav Option</Text>
          <Button
              onPress={() => this.props.navigation.goBack()}
              title="Go back home"
          />
        </View>
    );
  }
}

export default NavOptionScreen;

