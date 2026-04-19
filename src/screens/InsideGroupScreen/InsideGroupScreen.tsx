import React, { useMemo } from "react";
import { FlatList, Text, View } from "react-native";

import ScreenHeader from "../../components/Header/Header";
import SectionWrapper from "../../components/Section/SectionWrapper";
import useStyles from "./InsideGroupScreen.styles";

type PlaceholderItem = { id: string; title: string };

export default function InsideGroupScreen() {
  const styles = useStyles();
  const data = useMemo<PlaceholderItem[]>(
    () => [
      { id: "details", title: "Group details (placeholder)" },
      { id: "chat", title: "Chat (placeholder)" },
      { id: "shared", title: "Shared library (placeholder)" },
    ],
    []
  );

  return (
    <View style={styles.container}>
      <ScreenHeader title="Group" showBack />
      <FlatList
        data={data}
        keyExtractor={(i) => i.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <SectionWrapper title={item.title}>
            <Text style={styles.placeholderText}>
              Group experience will be implemented later.
            </Text>
          </SectionWrapper>
        )}
      />
    </View>
  );
}

