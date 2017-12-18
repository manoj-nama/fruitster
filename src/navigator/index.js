import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Ionicons as Icon } from '@expo/vector-icons';

import CartScreen from '../views/screens/Cart.screen';
import UserScreen from '../views/screens/User.screen';
import MenuScreen from '../views/screens/Menu.screen';
import SupportScreen from '../views/screens/Support.screen';

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
const SupportTab = StackNavigator({
  Support: {
    screen: SupportScreen
  }
}, {
    navigationOptions: defaultStackNavigationOptions
  });

const RootNavigator = TabNavigator({
  Menu: {
    screen: MenuTab,
    navigationOptions: {
      tabBarLabel: 'Menu',
      tabBarIcon: ({ tintColor }) => <Icon name={'logo-buffer'} size={24} color={tintColor} />
    }
  },
  Cart: {
    screen: CartTab,
    navigationOptions: {
      tabBarLabel: 'Cart',
      tabBarIcon: ({ tintColor }) => <Icon name={'md-basket'} size={24} color={tintColor} />
    }
  },
  Support: {
    screen: SupportTab,
    navigationOptions: {
      tabBarLabel: 'Support',
      tabBarIcon: ({ tintColor }) => <Icon name={'ios-quote'} size={24} color={tintColor} />
    }
  },
  User: {
    screen: UserTab,
    navigationOptions: {
      tabBarLabel: 'Account',
      tabBarIcon: ({ tintColor }) => <Icon name={'ios-contact'} size={24} color={tintColor} />
    }
  },
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      inactiveTintColor: '#555',
      activeTintColor: '#fff',
      activeBackgroundColor: '#d22',
      inactiveBackgroundColor: '#fff',
      showIcon: true,
      labelStyle: {
        fontFamily: 'amarnath',
        fontSize: 12
      },
      style: {
        backgroundColor: '#fff',
        borderTopWidth: 0,
        shadowColor: '#555',
        shadowRadius: 5,
        shadowOpacity: 0.2,
        elevation: 5,
      }
    }
  });

export default RootNavigator;