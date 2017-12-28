import { DrawerNavigator } from 'react-navigation';
// import Login from '../components/login/';
import DrawerContainerScreen from '../containers/DrawerContainerScreen';
import DrawerScreen from '../containers/DrawerScreen';

const DrawerNavigatorRouter = DrawerNavigator({
  DrawHome: {
    screen: DrawerContainerScreen,
  },
  Notifications: {
    screen: DrawerScreen,
  },
}, {});

export default DrawerNavigatorRouter;
