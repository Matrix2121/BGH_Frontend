import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
import FontProvider from "./src/context/FontProvider";
import { ThemeProvider } from "./src/context/ThemeContext";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import "@expo/metro-runtime";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={"light-content"} />
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ThemeProvider>
            <FontProvider>
              <NavigationContainer>
                <AppNavigator />
              </NavigationContainer>
            </FontProvider>
          </ThemeProvider>
        </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
