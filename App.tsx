import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import FontProvider from './src/context/FontProvider';

export default function App() {
  return (
    <FontProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </FontProvider>
  );
}
