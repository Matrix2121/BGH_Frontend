import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync(); // keep native splash up

export default function FontProvider({ children }: { children: React.ReactNode }) {
  const [fontsLoaded] = useFonts({
    'Inter-Medium': require('../../assets/fonts/Inter-Medium.otf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();  // hide the splash once fonts are ready
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <>{children}</>;
}
