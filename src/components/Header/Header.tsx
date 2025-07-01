import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import useStyles from "./Header.styles";

export interface ScreenHeaderProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
}

export default function ScreenHeader({
  title,
  showBack = false,
  onBack,
}: ScreenHeaderProps) {
  const navigation = useNavigation<NavigationProp<any>>();

  const styles = useStyles();
  const handleBack = () => {
    onBack ? onBack() : navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {showBack && (
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBack}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons name="chevron-back" size={30} style={styles.chevron} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
