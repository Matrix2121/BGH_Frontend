import { StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function useStyles() {
  const theme = useTheme();
  
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background.app,
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: theme.spacings.paddings.header.vertical,
      paddingHorizontal: theme.spacings.paddings.header.horizontal,
      marginHorizontal: theme.spacings.margins.global.horizontal,
    },
    backButton: {
      marginRight: 8,
    },
    title: {
      ...theme.typography.pageTitle,
      fontSize: 24,
      flex: 1,
      color: theme.colors.text.primary,
    },
    chevron: {
      color: theme.colors.accent.primary,
    },
  })
};
