import { StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function useStyles() {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background.app,
    },
    testLoginButton: {
      marginHorizontal: theme.spacings.paddings.screen.horizontal,
      marginTop: theme.spacings.margins.titleToFirstSection,
      paddingVertical: theme.spacings.gaps.grid,
      paddingHorizontal: theme.spacings.paddings.section.contentToBorder,
      borderRadius: theme.spacings.borderRadius.section,
      backgroundColor: theme.colors.accent.primary,
    },
    testLoginButtonLabel: {
      ...theme.typography.sectionTitle,
      color: theme.colors.background.app,
      textAlign: "center",
    },
    listContent: {
      paddingHorizontal: theme.spacings.paddings.screen.horizontal,
      paddingTop: theme.spacings.margins.titleToFirstSection,
      paddingBottom: theme.spacings.safeArea.bottom + theme.spacings.gaps.sectionToSection,
      gap: theme.spacings.gaps.sectionToSection,
    },
    placeholderText: {
      ...theme.typography.gameTileLabel,
      color: theme.colors.text.muted,
    },
  });
}

