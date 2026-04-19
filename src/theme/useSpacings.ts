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
  safeAreaBuffers: {
    top: number;
    bottom: number;
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
    screen: {
      horizontal: number;
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
    },
    titleToFirstSection: number;
  };
  gaps: 
  { 
    sectionToSection: number;
    grid: number;
  };
  borderRadius: 
  {
    section: number;
    tiles: number;
    bottomNavigation: number;
  };
  tiles: 
  {
    section: 
    {
      games: 
      { 
        width: number;
        height: number;
      },
      groups:
      {
        width: number;
        height: number;
      }
    };
    bottomNavigation: number;
  };
  fab: {
    size: number;
    radius: number;
    inset: number;
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
        top: Math.max(insets.top, 52),
        bottom: Math.max(insets.bottom, 24),
        left: insets.left,
        right: insets.right,
      },
      safeAreaBuffers: {
        top: 52,
        bottom: 24,
      },

      bottomNavigation: 
      {
        height: 60, //was 72
      },

      paddings: 
      {
        header: 
        { 
          vertical: 12, 
          horizontal: 16,
        },
        section: 
          {
           contentToBorder: 16 
          },
        screen: {
          horizontal: 16,
        },
      },

      margins: 
      {
        global: 
        {
          horizontal: 16,
        },
        section: 
        { 
          titleToContent: 12 
        },
        titleToFirstSection: 606, //was 16
      },

      gaps: 
      { 
        sectionToSection: 24,
        grid: 12,
      },

      borderRadius: 
      {
        section: 12,
        tiles: 8,
        bottomNavigation: 30,
      },

      tiles: 
      {
        section:
        {
          games: 
          { 
            width: 78,
            height: 92,
          },
          groups:
          {
            width: 108,
            height: 138,
          }
        },
        bottomNavigation: 24, //was 28
        },
      fab: {
        size: 56,
        radius: 28,
        inset: 16,
      },
      activeTab: {
        padding: 10,
        radius: 24,
      },
    }),
    [width, height, insets.bottom, insets.left, insets.right]
  );
}
