import { useMemo } from "react";

export const colors = {
  background: 
  { 
    app: "#0B132B", 
    card: "#101630", 
    nested: "#1C2339" 
  },
  accent: 
  { 
    primary: "#00FFE9", 
    secondary: "#1BFDE5", 
    tertiary: "#9FF", 
    shadow: "#00FFE933" 
  },
  text: 
  { 
    primary: "#00FFE9", 
    secondary: "#1BFDE5", 
    tertiary: "#5BC0BE", 
    disabled: "#FFFFFF33" 
  },
  navBar: 
  { 
    background: "#1C233977" 
  },
};

export function useColors() {
  return useMemo(() => colors, []);
}
