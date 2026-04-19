import React, { useMemo } from "react";
import { FlatList, Text, View } from "react-native";

import ScreenHeader from "../../components/Header/Header";
import SectionWrapper from "../../components/Section/SectionWrapper";
import useStyles from "./WishlistScreen.styles";

type PlaceholderItem = { id: string; title: string };

export default function WishlistScreen() {
  const styles = useStyles();
  const data = useMemo<PlaceholderItem[]>(
    () => [
      { id: "wanted", title: "Wanted games (placeholder)" },
      { id: "alerts", title: "Price/availability alerts (placeholder)" },
    ],
    []
  );

  return (
    <View style={styles.container}>
      <ScreenHeader title="Wishlist" showBack />
      <FlatList
        data={data}
        keyExtractor={(i) => i.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <SectionWrapper title={item.title}>
            <Text style={styles.placeholderText}>
              Wishlist list/grid will be implemented later.
            </Text>
          </SectionWrapper>
        )}
      />
    </View>
  );
}

