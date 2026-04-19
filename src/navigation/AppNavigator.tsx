import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import AuthStack from "./AuthStack";
import MainTabs from "./MainTabs";
import GameDetailsModal from "../screens/GameDetailsModal/GameDetailsModal";
import type { RootStackParamList } from "./types";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

const Root = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const { isAuthenticated } = useAuth();
  const theme = useTheme();
  const colors = theme.colors;

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.background.app }}
      edges={["top", "left", "right"]}
    >
      <StatusBar style={theme.isDark ? "light" : "dark"} />

      <Root.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Root.Screen name="Main" component={MainTabs} />
        ) : (
          <Root.Screen name="Auth" component={AuthStack} />
        )}

        <Root.Screen
          name="GameDetailsModal"
          component={GameDetailsModal}
          options={{ presentation: "modal" }}
        />
      </Root.Navigator>
    </SafeAreaView>
  );
}
