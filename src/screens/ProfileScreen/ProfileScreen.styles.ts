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
    themeToggleButton: {
      backgroundColor: theme.colors.background.surface,
      borderRadius: theme.spacings.borderRadius.tiles,
      paddingVertical: theme.spacings.gaps.grid,
      paddingHorizontal: theme.spacings.paddings.section.contentToBorder,
    },
    themeToggleLabel: {
      ...theme.typography.groupLabel,
      color: theme.colors.accent.primary,
    },
  });
}

