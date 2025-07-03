import React, { Children } from "react";
import { View, Text, Image } from "react-native";
import useStyles from "./SectionWrapper.styles";
import { Shadow } from "react-native-shadow-2";
import { ScrollView } from "react-native-gesture-handler";

export interface SectionWrapperProps {
  height: number;
  width?: any;
  title: string;
  children?: React.ReactNode;
}

export default function SectionWrapper({
  height,
  width = "100%",
  title,
  children,
}: SectionWrapperProps) {
  const styles = useStyles();

  return (
    <View style={{ height: height, width: width }}>
      <Shadow distance={12} startColor={"#00FFE933"} stretch={true}>
        <View style={[styles.innerContainer, { height: height, width: "100%" }]} >
          <Text style={styles.title}>{title}</Text>
          <ScrollView style={styles.grid} horizontal={true} showsHorizontalScrollIndicator={false}>
            {children}
          </ScrollView>
        </View>
      </Shadow>
    </View>
  );
}
