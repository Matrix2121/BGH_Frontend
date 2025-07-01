// src/theme/useSpacings.ts
import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useMemo } from "react";

export interface Spacings {
  screen: { 
    width: number; 
    height: number 
  };
  safeArea: { 
    top: number; 
    bottom: number; 
    horizontal: number 
  };
  bottomNavigation: { 
    height: number; 
    totalHeight: number 
  };
  paddings: {
    header: { 
      vertical: number; 
      horizontal: number 
    };
    section: { 
      contentToBorder: number 
    };
  };
  margins: { 
    section: { 
      titleToContent: number 
    } 
  };
  gaps: { 
    sectionToSection: number; 
    gameTileToGameTile: number 
  };
  borderRadius: {
    section: number;
    gameTiles: number;
    bottomNavigation: number;
  };
  tiles: {
    games: { 
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
      // 1️⃣ screen dims
      screen: { width, height },

      // 2️⃣ safe-area insets
      safeArea: {
        top: insets.top,
        bottom: insets.bottom,
        horizontal: 8,
      },

      // 3️⃣ nav bar height + bottom inset
      bottomNavigation: {
        height: 72,
        totalHeight: 72 + insets.bottom,
      },

      // 4️⃣ your original static paddings
      paddings: {
        header: { vertical: 12, horizontal: 8 },
        section: { contentToBorder: 16 },
      },

      // 5️⃣ static margins between sections
      margins: { section: { titleToContent: 12 } },

      // 6️⃣ static gaps
      gaps: { sectionToSection: 24, gameTileToGameTile: 8 },

      // 7️⃣ border radii
      borderRadius: {
        section: 12,
        gameTiles: 12,
        bottomNavigation: 24,
      },

      // 8️⃣ tile sizes: dynamic for games (e.g. 20% of width), static for nav
      tiles: {
        games: {
          // example: make game tiles ~25% of screen width
          width: width * 0.25,
          height: width * 0.25 * (92 / 78), 
        },
        bottomNavigation: 28,
      },
    }),
    [width, height, insets.bottom, insets.left, insets.right]
  );
}
