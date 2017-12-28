
import React from 'react';
import { View, Image, Button } from 'react-native';

class DrawerContainerScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'DrawHome',
  };

  render() {
    return (
         <View>
          <Button
              onPress={() => this.props.navigation.navigate('Notifications')}
              title="Go to notifications"
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

export default DrawerContainerScreen;

