// src/screens/LibraryScreen.tsx
import React, { useMemo } from "react";
import { View, Text } from "react-native";
import ScreenHeader from "../../components/Header/Header";
import useStyles from "./LibraryScreen.style";

export default function LibraryScreen() {
  const styles = useStyles();
  
  return (
    <View style={styles.container}>
      <ScreenHeader title="Library" showBack={true} />
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.title}>My Collection</Text>
          <View style={styles.grid}>
            <Text style={{ fontSize: 40 }}>ggggggefd</Text>
          </View>
        </View>

        {/* <Text style={styles.placeholderText}>Library Content</Text> */}
      </View>
    </View>
  );
}
