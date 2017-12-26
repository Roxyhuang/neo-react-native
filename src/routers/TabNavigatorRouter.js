import { TabNavigator } from 'react-navigation';
// import Login from '../components/login/';
import HomeScreen from '../containers/HomeScreen';
import IndexScreen from '../containers/IndexScreen';
import ReduxScreen from '../containers/ReduxScreen';
// import BlankPage from '../components/blankPage';
// import HomeDrawerRouter from './HomeDrawerRouter';

// HomeDrawerRouter.navigationOptions = ({ navigation }) => ({
//   header: null,
// });

const TabNavigatorRouter = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Redux: {
    screen: ReduxScreen,
  },
});


export default TabNavigatorRouter;
