import React from "react";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
import FontProvider from "./src/context/FontProvider";
import { ThemeProvider, useTheme } from "./src/context/ThemeContext";
import { AuthProvider } from "./src/context/AuthContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "@expo/metro-runtime";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function ThemedNavigationContainer({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  return (
    <NavigationContainer theme={theme.isDark ? DarkTheme : DefaultTheme}>
      {children}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ThemeProvider>
            <AuthProvider>
              <FontProvider>
                <ThemedNavigationContainer>
                  <AppNavigator />
                </ThemedNavigationContainer>
              </FontProvider>
            </AuthProvider>
          </ThemeProvider>
        </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
