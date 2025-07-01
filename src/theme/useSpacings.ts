import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useMemo } from "react";

export interface Spacings {
  screen: 
  { 
    width: number; 
    height: number 
  };
  safeArea: 
  { 
    top: number; 
    bottom: number;
    left: number;
    right: number;
  };
  bottomNavigation: 
  { 
    height: number
  };
  paddings: 
  {
    header: 
    { 
      vertical: number; 
      horizontal: number 
    };
    section: 
    { 
      contentToBorder: number 
    };
  };
  margins: 
  { 
    global: 
    {
      horizontal: number
    },
    section: 
    { 
      titleToContent: number 
    } 
  };
  gaps: 
  { 
    sectionToSection: number; 
    gameTileToGameTile: number 
  };
  borderRadius: 
  {
    section: number;
    gameTiles: number;
    bottomNavigation: number;
  };
  tiles: 
  {
    games: 
    { 
      width: number; 
      height: number 
    };
    bottomNavigation: number;
  };
}

export function useSpacings(): Spacings {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  return useMemo<Spacings>(
    () => ({
      screen: 
      { 
        width, 
        height 
      },

      safeArea: 
      {
        top: insets.top,
        bottom: insets.bottom,
        left: insets.left,
        right: insets.right,
      },

      bottomNavigation: 
      {
        height: 72,
      },

      paddings: 
      {
        header: 
        { 
          vertical: 12, 
          horizontal: 8 
        },
        section: 
          {
           contentToBorder: 16 
          },
      },

      margins: 
      {
        global: 
        {
          horizontal: 8,
        },
        section: 
        { 
          titleToContent: 12 
        } 
      },

      gaps: 
      { 
        sectionToSection: 24, 
        gameTileToGameTile: 8 
      },

      borderRadius: 
      {
        section: 12,
        gameTiles: 12,
        bottomNavigation: 24,
      },

      tiles: {
        games: 
        {
          width: width * 0.25,
          height: width * 0.25 * (92 / 78), 
        },
        bottomNavigation: 28,
      },
    }),
    [width, height, insets.bottom, insets.left, insets.right]
  );
}
