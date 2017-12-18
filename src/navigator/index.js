import { StackNavigator, TabNavigator } from 'react-navigation';

const MenuTab = StackNavigator({

});

const UserTab = StackNavigator({

});

const CartTab = StackNavigator({

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