// Android: community blur
import React from "react";
import { BlurView as RNBlur } from "@react-native-community/blur";

export type BlurProps = {
  intensity?: number;        // how “strong” the blur is
  tint?: "light" | "dark";   // matches expo-blur’s tint
  style?: any;
};

export default function BlurView({ intensity = 10, tint = "dark", style, children }: React.PropsWithChildren<BlurProps>) {
  return (
    <RNBlur
      blurAmount={intensity}
      blurType={tint}
      style={style}
    >
      {children}
    </RNBlur>
  );
}
