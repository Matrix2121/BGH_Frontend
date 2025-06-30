// src/screens/LibraryScreen.tsx
import React from "react";
import { View, Text } from "react-native";
import ScreenHeader from "../../components/Header/Header";
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "./LibraryScreen.style";

export default function LibraryScreen() {
  return (
      <View style={styles.container}>
        <ScreenHeader title="Library" showBack={true} />
        <View style={styles.content} >
          <View style={styles.collection}>
            

          </View>

          <Text style={styles.placeholderText}>Library Content</Text>
        </View>
      </View>
  );
}
