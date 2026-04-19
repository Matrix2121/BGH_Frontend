import React, { useMemo } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import ScreenHeader from "../../components/Header/Header";
import SectionWrapper from "../../components/Section/SectionWrapper";
import { useTheme } from "../../context/ThemeContext";
import useStyles from "./ProfileScreen.styles";

type PlaceholderItem = { id: string; title: string };

export default function ProfileScreen() {
  const styles = useStyles();
  const theme = useTheme();

  const data = useMemo<PlaceholderItem[]>(
    () => [
      { id: "overview", title: "Profile overview (placeholder)" },
      { id: "stats", title: "Stats (placeholder)" },
      { id: "settings", title: "App Settings" },
    ],
    []
  );

  return (
    <View style={styles.container}>
      <ScreenHeader title="Profile" />

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => {
          if (item.id === "settings") {
            return (
              <SectionWrapper title={item.title}>
                <TouchableOpacity
                  activeOpacity={0.85}
                  style={styles.themeToggleButton}
                  onPress={theme.toggleTheme}
                >
                  <Text style={styles.themeToggleLabel}>
                    {theme.isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                  </Text>
                </TouchableOpacity>
              </SectionWrapper>
            );
          }

          return (
            <SectionWrapper title={item.title}>
              <Text style={styles.placeholderText}>
                Themed dashboard section content goes here.
              </Text>
            </SectionWrapper>
          );
        }}
      />
    </View>
  );
}

