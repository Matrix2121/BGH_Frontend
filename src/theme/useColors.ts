// src/theme/useColors.ts
import { useMemo } from "react";

export const colors = {
  background: { 
    app: "#0B132B", 
    card: "#11182F", 
    nested: "#1C2339" 
  },
  accent: { 
    primary: "#6FFFE9", 
    secondary: "#5BC0BE", 
    tertiary: "#D6FFF9", 
    shadow: "#6FFFE933" 
  },
  text: { 
    primary: "#6FFFE9", 
    secondary: "#D6FFF9", 
    tertiary: "#5BC0BE", 
    disabled: "#FFFFFF33" 
  },
  navBar: { 
    background: "#1C233977" 
  },
};

export function useColors() {
  // we could add theme-switching logic here later
  return useMemo(() => colors, []);
}
