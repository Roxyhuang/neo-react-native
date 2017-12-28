import { StackNavigator } from 'react-navigation';
// import Login from '../components/login/';
import HomeScreen from '../containers/HomeScreen';
import IndexScreen from '../containers/IndexScreen';
import ReduxScreen from '../containers/ReduxScreen';
import HeaderScreen from '../containers/HeaderScreen';
import EditScreen from '../containers/EditScreen';
import NavOptionScreen from '../containers/NavOptionScreen';
import TabNavigatorRouter from './TabNavigatorRouter';
import DrawerNavigatorRouter from './DrawerNavigatorRouter';
// import BlankPage from '../components/blankPage';
// import HomeDrawerRouter from './HomeDrawerRouter';

// HomeDrawerRouter.navigationOptions = ({ navigation }) => ({
//   header: null,
// });

const MainStackRouter = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Index: {
    screen: IndexScreen,
  },
  Redux: {
    screen: ReduxScreen,
  },
  Nest: {
    screen: TabNavigatorRouter,
    navigationOptions: {
      title: 'Nesting title',
    },
  },
  Header: {
    screen: HeaderScreen,
  },
  Edit: {
    screen: EditScreen,
  },
  Draw: {
    screen: DrawerNavigatorRouter,
    navigationOptions: {
      header: null,
    },
  },
  NavOption: {
    screen: NavOptionScreen,
  },
});


export default MainStackRouter;
