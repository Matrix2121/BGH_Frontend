import { StyleSheet } from "react-native";
import { useTheme } from "../../../context/ThemeContext";
import { HANDLE_HEIGHT } from "../constants";

/** Figma specs — handle / bump width */
const HANDLE_WIDTH = 64;

export default function useStyles() {
  const theme = useTheme();
  /** +1px so the pill mask overlaps the handle by 1px (removes hairline gaps). */
  const pillMaskHeight = theme.spacings.bottomNavigation.height + 1;

  return StyleSheet.create({
    maskShell: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      width: "100%",
      alignItems: "center",
      overflow: "hidden",
    },
    maskedView: {
      flex: 1,
      width: "100%",
    },
    maskRoot: {
      flex: 1,
      width: "100%",
      backgroundColor: "transparent",
    },
    gridMask: {
      position: "absolute",
      top: HANDLE_HEIGHT,
      left: 0,
      right: 0,
      borderTopLeftRadius: theme.spacings.borderRadius.section,
      borderTopRightRadius: theme.spacings.borderRadius.section,
      backgroundColor: theme.colors.text.primary,
    },
    handleWrap: {
      position: "absolute",
      top: 0,
      alignSelf: "center",
    },
    pillMask: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      width: "100%",
      height: pillMaskHeight,
      borderRadius: theme.spacings.borderRadius.bottomNavigation,
      backgroundColor: theme.colors.text.primary,
    },
    blurFill: {
      ...StyleSheet.absoluteFillObject,
    },
    tintOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.colors.background.navBlurTint,
    },
    chevronContainer: {
      position: "absolute",
      top: 0,
      width: HANDLE_WIDTH,
      height: HANDLE_HEIGHT,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
    },
    chevronGlow: {
      shadowColor: theme.colors.accent.primary,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.33,
      shadowRadius: 4,
      elevation: 4,
    },
  });
}
