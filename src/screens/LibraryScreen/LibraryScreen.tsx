// src/screens/LibraryScreen.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenHeader from "../../components/ScreenHeader";
import styles from "./LibraryScreen.style"

export default function LibraryScreen() {
  return (
    <View style={styles.container}>
      <ScreenHeader title="Library" />
      <View style={styles.content}>
        <Text style={styles.placeholderText}>Library Content</Text>
      </View>
    </View>
  );
}
