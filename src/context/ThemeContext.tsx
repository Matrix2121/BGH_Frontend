// src/theme/ThemeContext.tsx
import React, { createContext, ReactNode, useContext, useMemo } from "react";
import { useSpacings } from "../theme/useSpacings";
import { useColors } from "../theme/useColors";
import { useTypography } from "../theme/useTypography";

export interface Theme {
  spacings: ReturnType<typeof useSpacings>;
  colors: ReturnType<typeof useColors>;
  typography: ReturnType<typeof useTypography>;
}

const ThemeContext = createContext<Theme | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const spacings = useSpacings();
  const colors = useColors();
  const typography = useTypography();
  const theme = useMemo(() => ({ spacings, colors, typography }), [
    spacings,
    colors,
    typography,
  ]);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function useTheme(): Theme {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error("useTheme must be inside ThemeProvider");
  return theme;
}
