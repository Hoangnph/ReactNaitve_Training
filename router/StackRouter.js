import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './partTabRoute/MainScreen'
import {
    SplashScreen,
    HomeScreen,
    DetailsScreen,
    AccountScreen,
} from '../screens'

import {
  TabStyle1,
  TabStyle2,
  TabStyle3,
} from './partTabRoute/TabStyles'

const Stack = createStackNavigator();

export default function StackRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='SplashScreen' component={SplashScreen} options={{headerShown: false}} />
      <Stack.Screen name='MainScreen' component={MainScreen} options={{headerShown: false}} />
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false, gestureEnabled: false}} />
      <Stack.Screen name='AccountScreen' component={AccountScreen} options={{headerShown: false}} />
      <Stack.Screen name='DetailsScreen' component={DetailsScreen} options={{headerShown: false}} />

      <Stack.Screen name='TabStyle1' component={TabStyle1} options={{headerShown: false}} />
      <Stack.Screen name='TabStyle2' component={TabStyle2} options={{headerShown: false}} />
      <Stack.Screen name='TabStyle3' component={TabStyle3} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}