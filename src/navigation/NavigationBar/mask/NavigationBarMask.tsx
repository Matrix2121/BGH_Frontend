import React from "react";
import { Pressable, View } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { ChevronUp } from "lucide-react-native";

import BlurView from "../../../components/BlurView";
import Handle from "../../../../assets/icons/Handle";
import { useTheme } from "../../../context/ThemeContext";
import useStyles from "./NavigationBarMask.styles";

export type NavigationBarMaskProps = {
  barHeight: number;
  gridMaskHeight: number;
  isExpanded: boolean;
  onToggle: () => void;
};

export default function NavigationBarMask({
  barHeight,
  gridMaskHeight,
  isExpanded,
  onToggle,
}: NavigationBarMaskProps) {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <View style={[styles.maskShell, { height: barHeight }]} pointerEvents="box-none">
      <MaskedView
        style={styles.maskedView}
        maskElement={
          <View style={styles.maskRoot} collapsable={false}>
            {gridMaskHeight > 0 ? (
              <View
                style={[styles.gridMask, { height: gridMaskHeight }]}
                collapsable={false}
              />
            ) : null}
            <View style={styles.handleWrap} collapsable={false}>
              <Handle fill={theme.colors.text.primary} width={64} height={15} />
            </View>
            <View style={styles.pillMask} collapsable={false} />
          </View>
        }
      >
        <BlurView intensity={80} tint="dark" style={styles.blurFill} />
        <View pointerEvents="none" style={styles.tintOverlay} />
      </MaskedView>

      <View style={styles.chevronContainer}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={
            isExpanded ? "Collapse navigation" : "Expand navigation"
          }
          onPress={onToggle}
          hitSlop={{
            top: theme.spacings.gaps.grid,
            bottom: theme.spacings.gaps.grid,
            left: theme.spacings.gaps.grid,
            right: theme.spacings.gaps.grid,
          }}
        >
          <View style={styles.chevronGlow}>
            <ChevronUp
              size={24}
              color={theme.colors.accent.primary}
              strokeWidth={3}
              style={{
                transform: [{ rotate: isExpanded ? "180deg" : "0deg" }],
              }}
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
}
