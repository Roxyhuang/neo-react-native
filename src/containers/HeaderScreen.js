import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class HeaderScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation;
    const isInfo = state.params.mode === 'info';
    const { user } = state.params;
    return {
      title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
      headerRight: (
        <Button
          title={isInfo ? 'Done' : `${user}'s info`}
          onPress={() => setParams({ mode: isInfo ? 'none' : 'info' })}
        />
      ),
    };
  };
  constructor(props) {
    super(props);
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

export default HeaderScreen;

