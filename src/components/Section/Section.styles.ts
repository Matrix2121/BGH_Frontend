import { StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function useStyles() {
  const theme = useTheme();

  return StyleSheet.create({
    card: {
      flex: 1,
      borderRadius: theme.spacings.borderRadius.section,
      gap: theme.spacings.margins.section.titleToContent,
      backgroundColor: theme.colors.background.card,
      padding: theme.spacings.paddings.section.contentToBorder,
      height: '100%'
    },
    title: {
      ...theme.typography.sectionTitle,
      color: theme.colors.text.secondary,
      fontSize: 20,
    },
    grid: {
      height: 60,
      backgroundColor: "red",
      width: "100%",
    },
  })
};