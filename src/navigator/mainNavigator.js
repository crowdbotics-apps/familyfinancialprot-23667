import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList190174Navigator from '../features/NotificationList190174/navigator';
import Settings190173Navigator from '../features/Settings190173/navigator';
import Settings190165Navigator from '../features/Settings190165/navigator';
import UserProfile190163Navigator from '../features/UserProfile190163/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList190174: { screen: NotificationList190174Navigator },
Settings190173: { screen: Settings190173Navigator },
Settings190165: { screen: Settings190165Navigator },
UserProfile190163: { screen: UserProfile190163Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
