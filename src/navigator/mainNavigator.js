import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile190203Navigator from '../features/UserProfile190203/navigator';
import Tutorial190202Navigator from '../features/Tutorial190202/navigator';
import NotificationList190174Navigator from '../features/NotificationList190174/navigator';
import Settings190173Navigator from '../features/Settings190173/navigator';
import Settings190165Navigator from '../features/Settings190165/navigator';
import UserProfile190163Navigator from '../features/UserProfile190163/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile190203: { screen: UserProfile190203Navigator },
Tutorial190202: { screen: Tutorial190202Navigator },
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
