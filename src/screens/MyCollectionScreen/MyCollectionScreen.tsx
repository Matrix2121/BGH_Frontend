import React, { useMemo } from "react";
import { FlatList, Text, View } from "react-native";

import ScreenHeader from "../../components/Header/Header";
import SectionWrapper from "../../components/Section/SectionWrapper";
import useStyles from "./MyCollectionScreen.styles";

type PlaceholderItem = { id: string; title: string };

export default function MyCollectionScreen() {
  const styles = useStyles();
  const data = useMemo<PlaceholderItem[]>(
    () => [
      { id: "all", title: "All games (placeholder)" },
      { id: "filters", title: "Filters (placeholder)" },
    ],
    []
  );

  return (
    <View style={styles.container}>
      <ScreenHeader title="My Collection" showBack />
      <FlatList
        data={data}
        keyExtractor={(i) => i.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <SectionWrapper title={item.title}>
            <Text style={styles.placeholderText}>
              Collection list/grid will be implemented later.
            </Text>
          </SectionWrapper>
        )}
      />
    </View>
  );
}

