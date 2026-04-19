// NavigationBar.tsx
import React from "react";
import { View, Pressable, Text } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import NavigationBarMask from "./mask/NavigationBarMask";
import { useTheme } from "../../context/ThemeContext";
import useStyles from "./NavigationBar.styles";

export default function NavigationBar(props: BottomTabBarProps) {
  const theme = useTheme();
  const styles = useStyles();
  const { state, descriptors, navigation } = props;

  return (
    <View style={styles.container}>
      <NavigationBarMask />

      <View style={styles.tabButtonsContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const baseColor = isFocused
            ? theme.colors.background.app
            : theme.colors.text.muted;

          const Icon =
            typeof options.tabBarIcon === "function" ? (
              <View style={isFocused ? styles.focusedIconWrapper : undefined}>
                {options.tabBarIcon({
                  focused: isFocused,
                  color: baseColor,
                  size: theme.spacings.tiles.bottomNavigation,
                })}
              </View>
            ) : null;

          return (
            <Pressable
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              onPress={onPress}
              style={styles.tabButton}
            >
              {Icon}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
