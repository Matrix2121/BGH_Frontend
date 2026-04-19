// NavigationBar.tsx
import React, { useCallback, useState } from "react";
import {
  LayoutAnimation,
  Platform,
  Pressable,
  Text,
  UIManager,
  View,
  StyleSheet,
  type ViewStyle,
} from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import {
  Award,
  Bookmark,
  Calendar,
  MapPin,
  MessageSquare,
  PlusSquare,
  Settings,
  ShoppingCart,
} from "lucide-react-native";

import BlurView from "../../components/BlurView";
import NavigationBarMask from "./mask/NavigationBarMask";
import { useTheme, type Theme } from "../../context/ThemeContext";
import useStyles from "./NavigationBar.styles";
import {
  EXPANDED_NAV_TOTAL_HEIGHT,
  HANDLE_HEIGHT,
} from "./constants";
import type { MainTabParamList } from "../types";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

function FullScreenBlur({
  onPress,
  backdropStyle,
}: {
  onPress: () => void;
  backdropStyle: ViewStyle;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Dismiss expanded menu"
      onPress={onPress}
      style={backdropStyle}
    >
      <BlurView
        intensity={40}
        tint="dark"
        style={StyleSheet.absoluteFillObject}
      />
    </Pressable>
  );
}

function ExpandedRows({
  mainRoutes,
  descriptors,
  state,
  theme,
  styles,
  onPressMainTab,
  navigateToPlaceholder,
}: {
  mainRoutes: BottomTabBarProps["state"]["routes"];
  descriptors: BottomTabBarProps["descriptors"];
  state: BottomTabBarProps["state"];
  theme: Theme;
  styles: ReturnType<typeof useStyles>;
  onPressMainTab: (routeName: keyof MainTabParamList) => void;
  navigateToPlaceholder: () => void;
}) {
  const barHeight = EXPANDED_NAV_TOTAL_HEIGHT;
  const bottomNavHeight = theme.spacings.bottomNavigation.height;
  const expandedContentHeight = barHeight - bottomNavHeight;

  return (
    <View
      style={[styles.expandedGrid, { height: expandedContentHeight }]}
      pointerEvents="auto"
    >
      <View style={styles.rowOneWrapper}>
        {mainRoutes.map((route) => {
          const { options } = descriptors[route.key];
          const isFocused = state.routes[state.index]?.key === route.key;
          const baseColor = isFocused
            ? theme.colors.background.app
            : theme.colors.text.muted;

          const Icon =
            typeof options.tabBarIcon === "function" ? (
              <View
                style={isFocused ? styles.focusedIconWrapper : undefined}
              >
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
              style={[styles.gridItem, styles.gridItemFiveTabs]}
              onPress={() => onPressMainTab(route.name as keyof MainTabParamList)}
            >
              {Icon}
            </Pressable>
          );
        })}
      </View>

      <View style={styles.gridRow}>
        <Pressable
          style={[styles.gridItem, styles.gridItemFourCol]}
          onPress={navigateToPlaceholder}
        >
          <Calendar size={24} color={theme.colors.text.primary} />
          <Text style={styles.gridLabel}>Calendar</Text>
        </Pressable>
        <Pressable
          style={[styles.gridItem, styles.gridItemFourCol]}
          onPress={navigateToPlaceholder}
        >
          <MessageSquare size={24} color={theme.colors.text.primary} />
          <Text style={styles.gridLabel}>Chats</Text>
        </Pressable>
        <Pressable
          style={[styles.gridItem, styles.gridItemFourCol]}
          onPress={navigateToPlaceholder}
        >
          <Bookmark size={24} color={theme.colors.text.primary} />
          <Text style={styles.gridLabel}>Wishlist</Text>
        </Pressable>
        <Pressable
          style={[styles.gridItem, styles.gridItemFourCol]}
          onPress={navigateToPlaceholder}
        >
          <MapPin size={24} color={theme.colors.text.primary} />
          <Text style={styles.gridLabel}>Nearby</Text>
        </Pressable>
      </View>

      <View style={styles.gridRow}>
        <Pressable
          style={[styles.gridItem, styles.gridItemFourCol]}
          onPress={navigateToPlaceholder}
        >
          <ShoppingCart size={24} color={theme.colors.text.primary} />
          <Text style={styles.gridLabel}>Marketplace</Text>
        </Pressable>
        <Pressable
          style={[styles.gridItem, styles.gridItemFourCol]}
          onPress={navigateToPlaceholder}
        >
          <PlusSquare size={24} color={theme.colors.text.primary} />
          <Text style={styles.gridLabel}>Log</Text>
        </Pressable>
        <Pressable
          style={[styles.gridItem, styles.gridItemFourCol]}
          onPress={navigateToPlaceholder}
        >
          <Award size={24} color={theme.colors.text.primary} />
          <Text style={styles.gridLabel}>Achievements</Text>
        </Pressable>
        <Pressable
          style={[styles.gridItem, styles.gridItemFourCol]}
          onPress={navigateToPlaceholder}
        >
          <Settings size={24} color={theme.colors.text.primary} />
          <Text style={styles.gridLabel}>Settings</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function NavigationBar(props: BottomTabBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const theme = useTheme();
  const styles = useStyles();
  const { state, descriptors, navigation } = props;

  const bottomNavHeight = theme.spacings.bottomNavigation.height;
  const pillMaskHeight = bottomNavHeight + 1;
  const collapsedH = HANDLE_HEIGHT + bottomNavHeight;
  const expandedH = EXPANDED_NAV_TOTAL_HEIGHT;

  const barHeight = isExpanded ? expandedH : collapsedH;
  const gridMaskHeight = isExpanded
    ? Math.max(0, barHeight - HANDLE_HEIGHT - pillMaskHeight)
    : 0;

  const toggleExpand = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded((v) => !v);
  }, []);

  const collapse = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(false);
  }, []);

  const mainRoutes = state.routes.filter((r) => r.name !== "Placeholder");

  const navigateToPlaceholder = () => {
    collapse();
    requestAnimationFrame(() => {
      navigation.navigate("Placeholder" as keyof MainTabParamList);
    });
  };

  const onPressMainTab = (routeName: keyof MainTabParamList) => {
    collapse();
    requestAnimationFrame(() => {
      navigation.navigate(routeName);
    });
  };

  return (
    <View style={styles.screenWrapper} pointerEvents="box-none">
      {isExpanded && (
        <FullScreenBlur
          onPress={collapse}
          backdropStyle={styles.frozenBackdrop}
        />
      )}

      <View style={[styles.rootWrapper, { height: barHeight }]}>
        <NavigationBarMask
          barHeight={barHeight}
          gridMaskHeight={gridMaskHeight}
          isExpanded={isExpanded}
          onToggle={toggleExpand}
        />

        {isExpanded && (
          <ExpandedRows
            mainRoutes={mainRoutes}
            descriptors={descriptors}
            state={state}
            theme={theme}
            styles={styles}
            onPressMainTab={onPressMainTab}
            navigateToPlaceholder={navigateToPlaceholder}
          />
        )}

        {!isExpanded && (
          <View style={styles.tabButtonsContainer}>
            {mainRoutes.map((route) => {
              const { options } = descriptors[route.key];

              const isFocused = state.routes[state.index]?.key === route.key;

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
                  <View
                    style={isFocused ? styles.focusedIconWrapper : undefined}
                  >
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
        )}
      </View>
    </View>
  );
}
