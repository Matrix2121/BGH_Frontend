import React, { useMemo } from "react";
import { FlatList, Text, View } from "react-native";

import ScreenHeader from "../../components/Header/Header";
import SectionWrapper from "../../components/Section/SectionWrapper";
import useStyles from "./VoteOnGamesScreen.styles";

type PlaceholderItem = { id: string; title: string };

export default function VoteOnGamesScreen() {
  const styles = useStyles();
  const data = useMemo<PlaceholderItem[]>(
    () => [
      { id: "poll", title: "Vote (placeholder)" },
      { id: "options", title: "Game options (placeholder)" },
    ],
    []
  );

  return (
    <View style={styles.container}>
      <ScreenHeader title="Vote on games" showBack />
      <FlatList
        data={data}
        keyExtractor={(i) => i.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <SectionWrapper title={item.title}>
            <Text style={styles.placeholderText}>
              Voting flow will be implemented later.
            </Text>
          </SectionWrapper>
        )}
      />
    </View>
  );
}

