import { StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function useStyles() {
  const theme = useTheme();

  return StyleSheet.create({
    card: {
      borderRadius: theme.spacings.borderRadius.section,
      // backgroundColor: theme.colors.background.card,
      backgroundColor: 'red',
      padding: theme.spacings.paddings.section.contentToBorder ,
      
      overflow: 'hidden',
      
    },
    title: {
      ...theme.typography.sectionTitle,
      color: theme.colors.text.secondary,
      fontSize: 20,
      marginBottom: theme.spacings.margins.section.titleToContent
    },
    grid: {
      flex: 1,
      width: '100%',
      // height: '100%',
      overflow: 'hidden',
      backgroundColor: "grey",
    },
  })
};