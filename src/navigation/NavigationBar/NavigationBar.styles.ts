import { StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { HANDLE_HEIGHT } from "./constants";

export default function useStyles() {
  const theme = useTheme();

  return StyleSheet.create({
    screenWrapper: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      width: "100%",
      height: theme.spacings.screen.height,
      pointerEvents: "box-none",
    },
    frozenBackdrop: {
      ...StyleSheet.absoluteFillObject,
      zIndex: 100,
    },
    rootWrapper: {
      position: "absolute",
      left: theme.spacings.margins.global.horizontal,
      right: theme.spacings.margins.global.horizontal,
      bottom: theme.spacings.safeArea.bottom,
      zIndex: 101,
      overflow: "visible",
    },
    expandedGrid: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      paddingHorizontal: theme.spacings.paddings.screen.horizontal,
      paddingBottom: theme.spacings.gaps.grid,
      zIndex: 2,
    },
    rowOneWrapper: {
      marginTop: HANDLE_HEIGHT,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      width: "100%",
    },
    gridRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginBottom: theme.spacings.gaps.grid,
    },
    gridItem: {
      alignItems: "center",
      justifyContent: "center",
      marginBottom: theme.spacings.gaps.grid,
    },
    /** Five primary tabs (matches `state.routes` order). */
    gridItemFiveTabs: {
      width: "20%",
    },
    /** Four columns (rows 2–3). */
    gridItemFourCol: {
      width: "25%",
    },
    gridLabel: {
      ...theme.typography.navLabel,
      color: theme.colors.text.muted,
      marginTop: theme.spacings.gaps.grid,
      textAlign: "center",
    },
    tabButtonsContainer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: theme.spacings.bottomNavigation.height,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      borderRadius: theme.spacings.borderRadius.bottomNavigation,
      overflow: "hidden",
      zIndex: 3,
    },
    tabButton: {
      height: "100%",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    focusedIconWrapper: {
      backgroundColor: theme.colors.text.primary,
      borderRadius: theme.spacings.activeTab.radius,
      padding: theme.spacings.activeTab.padding,
      justifyContent: "center",
      alignItems: "center",
    },
  });
}
