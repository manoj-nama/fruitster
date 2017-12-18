import { StackNavigator, TabNavigator } from 'react-navigation';

import CartScreen from '../views/screens/Cart.screen';
import UserScreen from '../views/screens/User.screen';
import MenuScreen from '../views/screens/Menu.screen';

const defaultStackNavigationOptions = {
  header: null
};

const MenuTab = StackNavigator({
  Menu: {
    screen: MenuScreen
  }
}, {
  navigationOptions: defaultStackNavigationOptions
});

const UserTab = StackNavigator({
  User: {
    screen: UserScreen
  }
}, {
  navigationOptions: defaultStackNavigationOptions
});

const CartTab = StackNavigator({
  Cart: {
    screen: CartScreen
  }
}, {
  navigationOptions: defaultStackNavigationOptions
});

const RootNavigator = TabNavigator({
  Menu: {
    screen: MenuTab
  },
  User: {
    screen: UserTab
  },
  Cart: {
    screen: CartTab
  }
});

export default RootNavigator;