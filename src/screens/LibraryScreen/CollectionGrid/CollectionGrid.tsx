import { FlatList, Image, View } from "react-native";
import { mockGames } from "../../../data/mockGames";
import React from "react";
import useStyles from "./CollectionGrid.styles";


export default function CollectionGrid() {
  const styles = useStyles();
  
  const data = mockGames;
  const cols: { uri: string; id: string }[][] = [];
  for (let i = 0; i < data.length; i += 2) cols.push(data.slice(i, i + 2));

  return (
    <FlatList
      data={cols}
      keyExtractor={(_, i) => `col-${i}`}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <View style={styles.item}>
          {item.map((img) => (
            <Image key={img.id} source={{ uri: img.uri }} style={styles.tile} />
          ))}
        </View>
      )}
    />
  );
}
