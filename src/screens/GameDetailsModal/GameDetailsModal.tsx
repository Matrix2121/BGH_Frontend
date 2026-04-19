import React, { useMemo } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import ScreenHeader from "../../components/Header/Header";
import SectionWrapper from "../../components/Section/SectionWrapper";
import { useTheme } from "../../context/ThemeContext";
import type { RootStackParamList } from "../../navigation/types";
import useStyles from "./GameDetailsModal.styles";

type PlaceholderItem = { id: string; title: string };

export default function GameDetailsModal() {
  const theme = useTheme();
  const styles = useStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute();
  const params = route.params as RootStackParamList["GameDetailsModal"];
  const data = useMemo<PlaceholderItem[]>(
    () => [
      { id: "hero", title: "Game header (placeholder)" },
      { id: "details", title: "Details (placeholder)" },
      { id: "actions", title: "Actions (placeholder)" },
    ],
    []
  );

  return (
    <View style={styles.container}>
      <ScreenHeader title="Game Details" showBack />

      <View style={styles.hero}>
        <Text style={styles.gameIdTitle}>Game ID</Text>
        <Text style={styles.gameIdValue}>{params.gameId}</Text>
        <Pressable style={styles.closeButton} onPress={() => navigation.goBack()}>
          <Text style={styles.closeButtonLabel}>Close</Text>
        </Pressable>
      </View>

      <FlatList
        data={data}
        keyExtractor={(i) => i.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <SectionWrapper title={item.title}>
            <Text style={styles.placeholderText}>
              This modal will show game info and actions later.
            </Text>
          </SectionWrapper>
        )}
      />
    </View>
  );
}

