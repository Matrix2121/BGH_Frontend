import React, { useMemo } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { UserPlus } from "lucide-react-native";
import { Shadow } from "react-native-shadow-2";

import ScreenHeader from "../../components/Header/Header";
import SectionWrapper from "../../components/Section/SectionWrapper";
import { useTheme } from "../../context/ThemeContext";
import useStyles from "./GroupsScreen.styles";

type PlaceholderItem = { id: string; title: string };

export default function GroupsScreen() {
  const theme = useTheme();
  const styles = useStyles();

  const data = useMemo<PlaceholderItem[]>(
    () => [
      { id: "my-groups", title: "My groups (placeholder)" },
      { id: "invites", title: "Invites (placeholder)" },
      { id: "discover", title: "Discover groups (placeholder)" },
    ],
    []
  );

  return (
    <View style={styles.container}>
      <ScreenHeader title="Groups" />

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <SectionWrapper title={item.title}>
            <Text style={styles.placeholderText}>
              Themed dashboard section content goes here.
            </Text>
          </SectionWrapper>
        )}
      />

      <View style={styles.fabContainer} pointerEvents="box-none">
        <Shadow distance={12} startColor={theme.colors.effects.primaryGlow}>
          <Pressable style={styles.fabButton} onPress={() => {}}>
            <UserPlus
              size={theme.spacings.tiles.bottomNavigation}
              color={theme.colors.background.app}
            />
          </Pressable>
        </Shadow>
      </View>
    </View>
  );
}

