import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
    HomeScreen,
    DetailsScreen,
    AccountScreen,
} from '../screens'


const Tab = createBottomTabNavigator();

export default function TabRouter() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          headerShown: false,
        }} 
      />
      <Tab.Screen name="Details" component={DetailsScreen} options={{headerShown: false}} />
      <Tab.Screen name="Account" component={AccountScreen} options={{headerShown: false}} />
    </Tab.Navigator>
  )
}