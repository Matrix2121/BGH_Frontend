import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EventsScreen from "../screens/EventsScreen/EventsScreen";
import EventPlannerScreen from "../screens/EventPlannerScreen/EventPlannerScreen";
import type { EventsStackParamList } from "./types";

const Stack = createNativeStackNavigator<EventsStackParamList>();

export default function EventsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="EventsHome" component={EventsScreen} />
      <Stack.Screen name="EventPlanner" component={EventPlannerScreen} />
    </Stack.Navigator>
  );
}

