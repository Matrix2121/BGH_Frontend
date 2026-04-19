import { StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function useStyles() {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      position: "absolute",
      height: theme.spacings.bottomNavigation.height,
      width: theme.spacings.screen.width - theme.spacings.margins.global.horizontal * 2,
      bottom: 0,
      justifyContent: 'center',
      borderRadius: theme.spacings.borderRadius.bottomNavigation,
      marginHorizontal: theme.spacings.margins.global.horizontal,
      marginBottom: theme.spacings.safeArea.bottom,
    },
    tabButtonsContainer: {
      height: theme.spacings.bottomNavigation.height,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      borderRadius: theme.spacings.borderRadius.bottomNavigation,
      overflow: "hidden",
    },
    tabButton: {
      height: '100%',
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    focusedIconWrapper: {
      backgroundColor: theme.colors.text.primary,
      borderRadius: theme.spacings.activeTab.radius,
      padding: theme.spacings.activeTab.padding,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
};
