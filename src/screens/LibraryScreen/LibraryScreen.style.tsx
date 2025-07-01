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
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: 24,
    },
    card: {
      borderRadius: theme.spacings.borderRadius.section,
      gap: theme.spacings.gaps.sectionToSection,
      backgroundColor: theme.colors.background.card,
      height: 260,
      width: "100%",
      padding: theme.spacings.paddings.section.contentToBorder,
    },
    title: {
      ...theme.typography.sectionTitle,
      color: theme.colors.text.secondary,
      fontSize: 20,
    },
    grid: {
      height: 30,
      backgroundColor: "red",
      width: "100%",
    },
    placeholderText: {
      fontSize: 84,
      color: "#fff",
    },
  });
}
