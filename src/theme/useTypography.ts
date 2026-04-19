import { useMemo } from "react";

export const typography = {
  pageTitle: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    lineHeight: 28.8,
    letterSpacing: 0.2,
  },
  sectionTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    lineHeight: 23.4,
    letterSpacing: 0.2,
  },
  gameTileLabel: {
    fontFamily: "Inter-Medium",
    fontSize: 14,
    lineHeight: 18.2,
    letterSpacing: 0.2,
  },
  groupLabel: {
    fontFamily: "Inter-Medium",
    fontSize: 13,
    lineHeight: 15.6,
  },
  navLabel: {
    fontFamily: "Inter-SemiBold",
    fontSize: 11,
    lineHeight: 13.2,
    letterSpacing: 0.5,
    textTransform: "uppercase" as const,
  },
};

export function useTypography() {
  return useMemo(() => typography, []);
}
