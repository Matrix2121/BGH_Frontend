import React from "react";
import { View } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { BlurView } from "expo-blur";
import Handle from "../../icons/Handle";
import styles from "./NavigationBarMask.styles";

export default function NavigationBarMask() {
  return (
    <View style={styles.container}>
       {/* <MaskedView
        style={styles.maskedView}
        maskElement={
          <View style={styles.maskWrapper}>
            <Handle style={styles.handleMask} />
          </View>
        }
      >
        <View style={styles.handle}>
          <BlurView intensity={80} tint="dark" style={styles.handleBlur} />
        </View>
      </MaskedView> */}

      <View style={styles.pill}>
        <BlurView intensity={30} tint="dark" style={styles.blurPill} />
      </View>
    </View>
  );
}
