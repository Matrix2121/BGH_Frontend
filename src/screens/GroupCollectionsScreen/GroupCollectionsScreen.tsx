import React, { useMemo } from "react";
import { FlatList, Text, View } from "react-native";

import ScreenHeader from "../../components/Header/Header";
import SectionWrapper from "../../components/Section/SectionWrapper";
import useStyles from "./GroupCollectionsScreen.styles";

type PlaceholderItem = { id: string; title: string };

export default function GroupCollectionsScreen() {
  const styles = useStyles();
  const data = useMemo<PlaceholderItem[]>(
    () => [
      { id: "groups", title: "Groups list (placeholder)" },
      { id: "collections", title: "Selected group collection (placeholder)" },
    ],
    []
  );

  return (
    <View style={styles.container}>
      <ScreenHeader title="Group Collections" showBack />
      <FlatList
        data={data}
        keyExtractor={(i) => i.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <SectionWrapper title={item.title}>
            <Text style={styles.placeholderText}>
              Group collections UI will be implemented later.
            </Text>
          </SectionWrapper>
        )}
      />
    </View>
  );
}

