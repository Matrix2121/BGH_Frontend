import { StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function useStyles() {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background.app,
    },
    listContent: {
      paddingHorizontal: theme.spacings.paddings.screen.horizontal,
      paddingTop: theme.spacings.margins.titleToFirstSection,
      paddingBottom:
        theme.spacings.bottomNavigation.height +
        theme.spacings.safeArea.bottom +
        theme.spacings.gaps.sectionToSection,
      gap: theme.spacings.gaps.sectionToSection,
    },
    placeholderText: {
      ...theme.typography.gameTileLabel,
      color: theme.colors.text.muted,
    },
    fabContainer: {
      position: "absolute",
      right: theme.spacings.fab.inset,
      bottom:
        theme.spacings.bottomNavigation.height +
        theme.spacings.safeArea.bottom +
        theme.spacings.fab.inset,
    },
    fabButton: {
      width: theme.spacings.fab.size,
      height: theme.spacings.fab.size,
      borderRadius: theme.spacings.fab.radius,
      backgroundColor: theme.colors.text.primary,
      alignItems: "center",
      justifyContent: "center",
    },
  });
}

