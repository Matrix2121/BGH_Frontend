import React from "react";
import { View } from "react-native";
import ScreenHeader from "../../components/Header/Header";
import useStyles from "./LibraryScreen.styles";
import Section from "../../components/Section/Section";
import { ScrollView } from "react-native-gesture-handler";

export default function LibraryScreen() {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <ScreenHeader title="Library" showBack={true} />
      <ScrollView 
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <Section height={256} title={"My Collection"}/>
        <Section height={136} title={"Wishlist"}/>
        <Section height={196} title={"Groups"}/>
      </ScrollView> 
    </View>
  );
}
