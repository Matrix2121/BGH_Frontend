import { StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function useStyles() {
  const theme = useTheme();

  return StyleSheet.create({
    innerContainer: {
      borderRadius: theme.spacings.borderRadius.section,
      backgroundColor: theme.colors.background.card,
      padding: theme.spacings.paddings.section.contentToBorder ,
      overflow: 'hidden',
    },
    title: {
      ...theme.typography.sectionTitle,
      color: theme.colors.text.secondary,
      fontSize: 20,
      marginBottom: theme.spacings.margins.section.titleToContent
    },
  })
};