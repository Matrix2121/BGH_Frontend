import { StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function useStyles() {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background.app,
      paddingHorizontal: theme.spacings.paddings.screen.horizontal,
      paddingTop: theme.spacings.margins.titleToFirstSection,
    },
    body: {
      ...theme.typography.gameTileLabel,
      color: theme.colors.text.muted,
    },
  });
}
