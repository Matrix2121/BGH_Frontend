import React, { useMemo } from "react";
import { FlatList, Text, View } from "react-native";

import ScreenHeader from "../../components/Header/Header";
import SectionWrapper from "../../components/Section/SectionWrapper";
import useStyles from "./EventPlannerScreen.styles";

type PlaceholderItem = { id: string; title: string };

export default function EventPlannerScreen() {
  const styles = useStyles();
  const data = useMemo<PlaceholderItem[]>(
    () => [
      { id: "details", title: "Event details (placeholder)" },
      { id: "schedule", title: "Schedule (placeholder)" },
      { id: "games", title: "Game picks (placeholder)" },
    ],
    []
  );

  return (
    <View style={styles.container}>
      <ScreenHeader title="Event Planner" showBack />
      <FlatList
        data={data}
        keyExtractor={(i) => i.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <SectionWrapper title={item.title}>
            <Text style={styles.placeholderText}>
              Event planning flow will be implemented later.
            </Text>
          </SectionWrapper>
        )}
      />
    </View>
  );
}

