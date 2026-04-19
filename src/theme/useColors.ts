import { useMemo } from "react";

export type ThemeMode = "light" | "dark";

export interface ThemeColors {
  mode: ThemeMode;
  isDark: boolean;
  background: {
    app: string;
    surface: string;
    nav: string;
    /** Semi-transparent tint over nav blur (frosted glass). */
    navBlurTint: string;
  };
  accent: {
    primary: string;
    secondary: string;
    shadow: string;
  };
  text: {
    primary: string;
    sectionHeader: string;
    muted: string;
    disabled: string;
  };
  effects: {
    primaryGlow: string;
    neonShadow: string;
  };
}

const DARK: Omit<ThemeColors, "mode" | "accent"> = {
  isDark: true,
  background: {
    app: "#0B132B", // Oxford Blue
    surface: "#1C2541", // Space Cadet
    nav: "#1C2541CC", // Space Cadet @ 80% for blur , was CC
    navBlurTint: "rgba(28, 37, 65, 0.3)",
  },
  text: {
    primary: "#6FFFE9", // Fluorescent Cyan
    sectionHeader: "#D6FFF9", // Mint Green
    muted: "#5BC0BE", // Verdigris
    disabled: "rgba(91, 192, 190, 0.45)",
  },
  effects: {
    primaryGlow: "rgba(111, 255, 233, 0.25)",
    neonShadow: "rgba(111, 255, 233, 0.3)",
  },
};

const LIGHT: Omit<ThemeColors, "mode" | "accent"> = {
  isDark: false,
  background: {
    app: "#F4F7FB",
    surface: "#E2E8F0",
    nav: "rgba(226, 232, 240, 0.8)",
    navBlurTint: "rgba(226, 232, 240, 0.35)",
  },
  text: {
    primary: "#0B132B", // reuse dark background as text for contrast
    sectionHeader: "#1C2541",
    muted: "#2E3B61",
    disabled: "rgba(46, 59, 97, 0.45)",
  },
  effects: {
    primaryGlow: "rgba(44, 132, 122, 0.18)",
    neonShadow: "rgba(44, 132, 122, 0.22)",
  },
};

export function useColors(isDark: boolean) {
  return useMemo(() => {
    const base = isDark ? DARK : LIGHT;
    const mode = isDark ? "dark" : "light";
    
    return {
      mode,
      ...base,
      isDark,
      accent: {
        primary: isDark ? base.text.primary : "#2C847A",
        secondary: base.text.sectionHeader,
        shadow: base.effects.primaryGlow,
      },
    };
  }, [isDark]);
}
