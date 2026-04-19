import React from "react";
import { Text, View } from "react-native";

import ScreenHeader from "../../components/Header/Header";
import { useTheme } from "../../context/ThemeContext";
import useStyles from "./PlaceholderScreen.styles";

export default function PlaceholderScreen() {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <ScreenHeader title="Placeholder" />
      <Text style={styles.body}>This screen is a navigation placeholder.</Text>
    </View>
  );
}
