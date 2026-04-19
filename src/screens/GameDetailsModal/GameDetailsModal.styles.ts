import { StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function useStyles() {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background.app,
    },
    hero: {
      paddingHorizontal: theme.spacings.paddings.screen.horizontal,
      paddingTop: theme.spacings.margins.titleToFirstSection,
      paddingBottom: theme.spacings.gaps.sectionToSection,
      gap: theme.spacings.gaps.grid,
    },
    gameIdTitle: {
      ...theme.typography.sectionTitle,
      color: theme.colors.text.sectionHeader,
    },
    gameIdValue: {
      ...theme.typography.pageTitle,
      color: theme.colors.text.primary,
    },
    closeButton: {
      alignSelf: "flex-start",
      paddingVertical: theme.spacings.gaps.grid,
      paddingHorizontal: theme.spacings.paddings.section.contentToBorder,
      borderRadius: theme.spacings.borderRadius.tiles,
      backgroundColor: theme.colors.background.surface,
    },
    closeButtonLabel: {
      ...theme.typography.gameTileLabel,
      color: theme.colors.text.primary,
    },
    listContent: {
      paddingHorizontal: theme.spacings.paddings.screen.horizontal,
      paddingTop: 0,
      paddingBottom: theme.spacings.safeArea.bottom + theme.spacings.gaps.sectionToSection,
      gap: theme.spacings.gaps.sectionToSection,
    },
    placeholderText: {
      ...theme.typography.gameTileLabel,
      color: theme.colors.text.muted,
    },
  });
}

