import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import FontProvider from './src/context/FontProvider';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import '@expo/metro-runtime';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'light-content'}/>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#0B132B'}} edges={['top', 'left', 'right', 'bottom']}>
        <FontProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </FontProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
