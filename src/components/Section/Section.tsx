import React from "react";
import { View, Text } from "react-native";
import useStyles from "./Section.styles";
import { Shadow } from "react-native-shadow-2";

export interface SectionProps {
  height: number;
  width?: any;
  title: string;
}

export default function Section({
  height,
  width = "100%",
  title,
}: SectionProps) {
  const styles = useStyles();

  return (
    <View style={{ height: height, width: width }}>
      <Shadow distance={12} startColor={"#00FFE933"}>
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.grid}>
            <Text style={{ fontSize: 40 }}>Lorem Ipsum</Text>
          </View>
        </View>
      </Shadow>
    </View>
  );
}
