import React from 'react';

import StackRouter from './router/StackRouter'; 
import { Provider as PaperProvider } from 'react-native-paper';

import {
  SafeAreaViewRoot
} from './@styles';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <StackRouter/>
      </PaperProvider>
    </NavigationContainer>
    
  );
}