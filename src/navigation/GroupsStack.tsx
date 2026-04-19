import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GroupsScreen from "../screens/GroupsScreen/GroupsScreen";
import InsideGroupScreen from "../screens/InsideGroupScreen/InsideGroupScreen";
import VoteOnGamesScreen from "../screens/VoteOnGamesScreen/VoteOnGamesScreen";
import type { GroupsStackParamList } from "./types";

const Stack = createNativeStackNavigator<GroupsStackParamList>();

export default function GroupsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GroupsHome" component={GroupsScreen} />
      <Stack.Screen name="InsideGroup" component={InsideGroupScreen} />
      <Stack.Screen name="VoteOnGames" component={VoteOnGamesScreen} />
    </Stack.Navigator>
  );
}

