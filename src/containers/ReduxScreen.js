import React, { Component } from 'react';
import { StyleSheet, View, Text,Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions from '../core/actions/homeActions';

const mapStateToProps = function(state) {
  const { home } = state;
  return {
    home,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
      { ...homeActions }, dispatch),
});

class ReduxScreen extends Component {
  static navigationOptions = {
    title: 'Redux',
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

  onPressIn() {
    this.props.actions.increment();
  }
  onPressDe() {
    this.props.actions.decrement();
  }
  onPressInAsync() {
    this.props.actions.incrementAsync();
  }
  render() {
    return (
        <View>
          <Text>{this.props.home.home}</Text>
          <Button
              onPress={() => { this.onPressIn() }}
              title="increment"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
          />
          <Button
              onPress={() => { this.onPressDe() }}
              title="decrement"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
          />
          <Button
              onPress={() => { this.onPressInAsync() }}
              title="incrementAsync"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
          />
        </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxScreen);
