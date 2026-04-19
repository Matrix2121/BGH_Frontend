import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LibraryScreen from "../screens/LibraryScreen/LibraryScreen";
import MyCollectionScreen from "../screens/MyCollectionScreen/MyCollectionScreen";
import GroupCollectionsScreen from "../screens/GroupCollectionsScreen/GroupCollectionsScreen";
import WishlistScreen from "../screens/WishlistScreen/WishlistScreen";
import type { LibraryStackParamList } from "./types";

const Stack = createNativeStackNavigator<LibraryStackParamList>();

export default function LibraryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LibraryHome"
        component={LibraryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyCollection"
        component={MyCollectionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GroupCollections"
        component={GroupCollectionsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
