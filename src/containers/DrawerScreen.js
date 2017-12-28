import React from 'react';
import { View, Image, Button } from 'react-native';

class DrawerScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
  };

  render() {
    return (
        <View>
          <Button
              onPress={() => this.props.navigation.goBack()}
              title="Go back"
          />
          <Button
              onPress={() => this.props.navigation.navigate('DrawerOpen')}
              title="Open"
          />
          <Button
              onPress={() => this.props.navigation.goBack('Home')}
              title="Go back home"
          />
        </View>
    );
  }
}

export default DrawerScreen;
