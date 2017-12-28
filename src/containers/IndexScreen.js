import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { NavigationActions } from 'react-navigation';

const navigateAction = NavigationActions.navigate({

  routeName: 'Redux',

  params: {},

  action: NavigationActions.navigate({ routeName: 'Redux'})
})


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
          <Button
              onPress={() => this.props.navigation.navigate('Redux')}
              title="Go to Redux"
          />
          <Button
              onPress={() => this.props.navigation.goBack()}
              title="Go back home"
          />
          <Button
              onPress={() => this.props.navigation.dispatch(navigateAction)}
              title="Go Redux by Action"
          />
        </View>
    );
  }
}

export default IndexScreen;

