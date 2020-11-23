import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps178006Navigator from '../features/Maps178006/navigator';
import Additem178005Navigator from '../features/Additem178005/navigator';
import Maps178001Navigator from '../features/Maps178001/navigator';
import UserProfile177997Navigator from '../features/UserProfile177997/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps178006: { screen: Maps178006Navigator },
Additem178005: { screen: Additem178005Navigator },
Maps178001: { screen: Maps178001Navigator },
UserProfile177997: { screen: UserProfile177997Navigator },

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
