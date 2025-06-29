import { useSafeAreaInsets } from "react-native-safe-area-context";

export const spacings = {
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  interface: {
    safeAreaHorizontal: 8,
    marginTop: 12,
    gapTitleToContent: 16,
  },
  section: {
    marginBetweenSections: 24,
    padding: 16,
    gapTitleToItems: 12,
    cornerRadius: 12,
  },
  tile: {
    width: 90,
    height: 91,
    cornerRadius: 8,
    gapBetweenTiles: 12,
  },
  bottomNav: {
    height: 72,
    cornerRadius: 24,
    safeAreaBottom: 16,
    chevronContainer: {
      width: 24,
      height: 16
    },
    chevronIcon: {
      size: 20,
    },
    iconSize: 28,
  }
};
