// src/screens/LibraryScreen.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenHeader from "../components/Header";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ScreenHeader title="Profile" />
      <View style={styles.content}>
        <Text style={styles.placeholderText}>Profile Content</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderText: {
    fontSize: 16,
    color: "#333333",
  },
});
