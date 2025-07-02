import { StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function useStyles() {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background.app,
    },
    content: {
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "flex-start",
      paddingBottom: theme.spacings.bottomNavigation.height + theme.spacings.safeArea.bottom + 24,
      marginHorizontal: theme.spacings.margins.global.horizontal,
      marginTop: theme.spacings.margins.section.titleToContent,
      gap: theme.spacings.gaps.sectionToSection,
    },
  });
}
