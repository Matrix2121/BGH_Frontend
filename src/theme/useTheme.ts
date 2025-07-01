import { useSpacings } from "./useSpacings";
import { useColors } from "./useColors";
import { useTypography } from "./useTypography";

export function useTheme() {
  return {
    spacings: useSpacings(),
    colors: useColors(),
    typography: useTypography(),
  };
}
