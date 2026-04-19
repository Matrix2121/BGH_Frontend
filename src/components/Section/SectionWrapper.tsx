import React, { Children } from "react";
import { View, Text, Image } from "react-native";
import useStyles from "./SectionWrapper.styles";
import { Shadow } from "react-native-shadow-2";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "../../context/ThemeContext";

export interface SectionWrapperProps {
  // height?: any;
  width?: any;
  title: string;
  children?: React.ReactNode;
}

export default function SectionWrapper({
  // height = 'auto',
  width = "100%",
  title,
  children,
}: SectionWrapperProps) {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <View style={{ width: width }}>
      <Shadow
        distance={12}
        startColor={theme.colors.effects.primaryGlow}
        stretch={true}
      >
        <View style={[styles.innerContainer, { width: "100%" }]}>
          <Text style={styles.title}>{title}</Text>
          {children}
        </View>
      </Shadow>
    </View>
  );
}
