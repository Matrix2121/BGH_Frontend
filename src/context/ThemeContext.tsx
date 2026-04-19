// src/theme/ThemeContext.tsx
import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";
import { useColorScheme } from "react-native";
import { useSpacings } from "../theme/useSpacings";
import { useColors } from "../theme/useColors";
import { useTypography } from "../theme/useTypography";

export interface Theme {
  isDark: boolean;
  toggleTheme: () => void;
  spacings: ReturnType<typeof useSpacings>;
  colors: ReturnType<typeof useColors>;
  typography: ReturnType<typeof useTypography>;
}

const ThemeContext = createContext<Theme | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const systemTheme = useColorScheme();
  const [isManualDark, setIsManualDark] = useState<boolean | null>(null);

  const isDark =
    isManualDark !== null ? isManualDark : systemTheme !== "light";

  const toggleTheme = () => {
    setIsManualDark((prev) => (prev !== null ? !prev : !isDark));
  };

  const spacings = useSpacings();
  const colors = useColors(isDark);
  const typography = useTypography();
  
  const theme = useMemo(
    () => ({ isDark, toggleTheme, spacings, colors, typography }),
    [isDark, spacings, colors, typography]
  );

  console.log("OS System Theme:", systemTheme);
  console.log("App Calculated isDark:", isDark);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function useTheme(): Theme {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error("useTheme must be inside ThemeProvider");
  return theme;
}
