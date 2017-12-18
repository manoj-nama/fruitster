import { StackNavigator, TabNavigator } from 'react-navigation';

import CartScreen from '../views/screens/Cart.screen';
import UserScreen from '../views/screens/User.screen';
import MenuScreen from '../views/screens/Menu.screen';

const MenuTab = StackNavigator({
  Menu: {
    screen: MenuScreen
  }
});

const UserTab = StackNavigator({
  User: {
    screen: UserScreen
  }
});

const CartTab = StackNavigator({
  Cart: {
    screen: CartScreen
  }
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