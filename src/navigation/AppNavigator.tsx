import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LibraryStack from "./LibraryStack";
import GroupsScreen from "../screens/GroupsScreen";
import EventsScreen from "../screens/EventsScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

import { Book, Calendar, Home, Users, User } from "lucide-react-native";
import { useTheme } from "../context/ThemeContext";
import { View } from "react-native";
import NavigationBar from "./NavigationBar/NavigationBar";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: theme.spacings.safeArea.horizontal,
      }}
    >
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
        tabBar={(props) => <NavigationBar {...props} />}
      >
        <Tab.Screen
          name="Library"
          component={LibraryStack}
          options={{
            tabBarIcon: ({ size, color }) => <Book size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name="Events"
          component={EventsScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Calendar size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, color }) => <Home size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name="Groups"
          component={GroupsScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Users size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ size, color }) => <User size={size} color={color} />,
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
