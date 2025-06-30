// iOS: expo blur
import React from "react";
import { BlurView as ExpoBlur } from "expo-blur";
import type { BlurProps } from "./BlurView.android";  // reuse the type

export default function BlurView({ intensity = 70, tint = "dark", style, children }: React.PropsWithChildren<BlurProps>) {
  return (
    <ExpoBlur
      intensity={intensity}
      tint={tint}
      style={style}
    >
      {children}
    </ExpoBlur>
  );
}
