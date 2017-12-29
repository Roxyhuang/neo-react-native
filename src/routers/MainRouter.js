import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';

import HomeScreen from '../containers/HomeScreen';
import IndexScreen from '../containers/IndexScreen';
import ReduxScreen from '../containers/ReduxScreen';

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};

const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';

const MainRouter = () => (
    <Router
      createReducer={reducerCreate}
      uriPrefix={prefix}
    >
      <Tabs>
        <Stack key="root">
          <Scene key="Home" component={HomeScreen} title="Home" path="home" />
          <Scene key="Index" component={IndexScreen} title="Index" />
          <Scene key="Redux" component={ReduxScreen} title="Redux" path="redux" />
        </Stack>
        <Stack key="aaa">
          <Scene key="Home" component={HomeScreen} title="Home" />
          <Scene key="Index" component={IndexScreen} title="Index" />
          <Scene key="Redux" component={ReduxScreen} title="Redux" />
        </Stack>
      </Tabs>

    </Router>
);

export default MainRouter;
