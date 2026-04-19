import React, { useMemo } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { Pencil } from "lucide-react-native";
import { Shadow } from "react-native-shadow-2";

import ScreenHeader from "../../components/Header/Header";
import SectionWrapper from "../../components/Section/SectionWrapper";
import { useTheme } from "../../context/ThemeContext";
import { useAppNavigation } from "../../navigation/types";
import useStyles from "./HomeScreen.styles";

type PlaceholderItem = { id: string; title: string };

export default function HomeScreen() {
  const theme = useTheme();
  const styles = useStyles();
  const navigation = useAppNavigation();

  const data = useMemo<PlaceholderItem[]>(
    () => [
      { id: "recent", title: "Recent activity (placeholder)" },
      { id: "stats", title: "Stats snapshot (placeholder)" },
      { id: "suggestions", title: "Suggestions (placeholder)" },
    ],
    []
  );

  return (
    <View style={styles.container}>
      <ScreenHeader title="Home" />

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <SectionWrapper title={item.title}>
            <Pressable
              onPress={() =>
                navigation.navigate("GameDetailsModal", { gameId: "test-game-123" })
              }
              style={styles.modalTrigger}
            >
              <Text style={styles.placeholderText}>
                Tap to open GameDetailsModal (proof-of-life).
              </Text>
            </Pressable>
          </SectionWrapper>
        )}
      />

      <View style={styles.fabContainer} pointerEvents="box-none">
        <Shadow distance={12} startColor={theme.colors.effects.primaryGlow}>
          <Pressable style={styles.fabButton} onPress={() => {}}>
            <Pencil size={theme.spacings.tiles.bottomNavigation} color={theme.colors.background.app} />
          </Pressable>
        </Shadow>
      </View>
    </View>
  );
}

