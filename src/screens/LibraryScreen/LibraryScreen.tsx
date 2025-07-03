import React from "react";
import { View, Text, Image } from "react-native";
import ScreenHeader from "../../components/Header/Header";
import useStyles from "./LibraryScreen.styles";
import SectionWrapper from "../../components/Section/SectionWrapper";
import { ScrollView } from "react-native-gesture-handler";
import CollectionGrid from "./CollectionGrid/CollectionGrid";

export default function LibraryScreen() {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <ScreenHeader title="Library" showBack={true} />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <SectionWrapper title={"My Collection"}>
          <CollectionGrid />
        </SectionWrapper>
        <SectionWrapper title={"Wishlist"}>
          <Image
            source={{ uri: "https://picsum.photos/seed/gr${i}/200/200" }}
            style={{ width: 78, height: 92 }}
          />
        </SectionWrapper>
        <SectionWrapper title={"Groups"}>
          <Image
            source={{ uri: "https://picsum.photos/seed/gr${i}/200/200" }}
            style={{ width: 100, height: 100 }}
          />
        </SectionWrapper>
      </ScrollView>
    </View>
  );
}
