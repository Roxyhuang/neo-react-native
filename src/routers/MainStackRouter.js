import { StackNavigator } from 'react-navigation';
// import Login from '../components/login/';
import HomeScreen from '../containers/HomeScreen';
import IndexScreen from '../containers/IndexScreen';
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
});


export default MainStackRouter;
