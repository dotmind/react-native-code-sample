
import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './../Home';
import ScrollViewDemo from '../ScrollViewDemo/ScrollViewDemo';
import ListDemo from './../ListDemo/ListDemo';

const AppNavigator = createStackNavigator({
  Home: { 
    screen: Home,
    navigationOptions: () => ({
      title: 'Demo app',
    }),
  },
  ScrollViewDemo: { screen: ScrollViewDemo },
  ListDemo: { screen: ListDemo },
});

export default createAppContainer(AppNavigator);