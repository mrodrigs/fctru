import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AboutRUScreen from '../screens/AboutRUScreen';
import AboutAppScreen from '../screens/AboutAppScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Cardápio',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-book${focused ? '' : '-outline'}`
          : 'md-book'
      }
    />
  ),
};

HomeStack.path = '';

const AboutRUStack = createStackNavigator(
  {
    AboutRU: AboutRUScreen,
  },
  config
);

AboutRUStack.navigationOptions = {
  tabBarLabel: 'Sobre o RU',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-help-circle-outline' : 'md-help-circle-outline'} />
  ),
};

AboutRUStack.path = '';

const AboutAppStack = createStackNavigator(
  {
    AboutApp: AboutAppScreen,
  },
  config
);

AboutAppStack.navigationOptions = {
  tabBarLabel: 'Sobre o App',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-phone-portrait' : 'md-phone-portrait'} />
  ),
};

AboutAppStack.path = '';

const tabNavigator = createBottomTabNavigator({
  AboutRUStack,
  HomeStack,
  AboutAppStack,
}, {
  initialRouteName: 'HomeStack',
});

tabNavigator.path = '';

export default tabNavigator;
