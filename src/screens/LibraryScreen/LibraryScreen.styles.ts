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
      alignItems: "center",
      justifyContent: "flex-start",
      gap: theme.spacings.gaps.sectionToSection,
      paddingBottom: theme.spacings.bottomNavigation.height + 8,
      marginHorizontal: theme.spacings.margins.global.horizontal,
      marginVertical: theme.spacings.margins.section.titleToContent,
    },
  });
}
