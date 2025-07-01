// src/theme/useTypography.ts
import { useMemo } from "react";

export const typography = {
  pageTitle: { 
    fontFamily: "Poppins-Bold", 
    fontSize: 24, 
    lineHeight: 28.8 
  },
  sectionTitle: { 
    fontFamily: "Poppins-Regular", 
    fontSize: 18, 
    lineHeight: 23.4 
  },
  groupLabel: { 
    fontFamily: "Inter-Medium", 
    fontSize: 14, 
    lineHeight: 16.8 
  },
  gameTileLabel: { 
    fontFamily: "Inter-Medium", 
    fontSize: 10, 
    lineHeight: 13 
  },
};

export function useTypography() {
  return useMemo(() => typography, []);
}
