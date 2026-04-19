import { StyleSheet } from "react-native";
import { useTheme } from "../../../context/ThemeContext";

export default function useStyles() {
  const theme = useTheme();

  return StyleSheet.create({
    list: {
      gap: theme.spacings.gaps.grid,
    },
    item: { 
        gap: theme.spacings.gaps.grid 
    },
    tile: { 
        width: theme.spacings.tiles.section.games.width, 
        height: theme.spacings.tiles.section.games.height, 
        borderRadius: theme.spacings.borderRadius.tiles
    },
  });
}
