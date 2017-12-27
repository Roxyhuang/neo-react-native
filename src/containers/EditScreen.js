import React from 'react';
import { StyleSheet, View, TextInput, Button, ActivityIndicator } from 'react-native';

class EditInfoScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    console.log(params.handleSave);
    let headerRight = (
      <Button
        title="Save"
        onPress={params.handleSave ? params.handleSave : () => null}
      />
    );
    if (params.isSaving) {
      headerRight = <ActivityIndicator />;
    }
    return { headerRight };
  };

  state = {
    nickname: 'Lucy jacuzzi',
  };

  _handleSave = () => {
    // Update state, show ActivityIndicator
    this.props.navigation.setParams({ isSaving: true });

    // Fictional function to save information in a store somewhere
    // saveInfo().then(() => {
    //   this.props.navigation.setParams({ isSaving: false});
    // })
  };

  componentDidMount() {
    // We can only set the function after the component has been initialized
    this.props.navigation.setParams({ handleSave: this._handleSave });
  }

  render() {
    return (
        <TextInput
            onChangeText={(nickname) => this.setState({ nickname })}
            placeholder={'Nickname'}
            value={this.state.nickname}
        />
    );
  }
}

export default EditInfoScreen;
