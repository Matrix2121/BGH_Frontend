import { StyleSheet } from "react-native";
import { useTheme } from "../../../context/ThemeContext";

// const HANDLE_WIDTH  = 64;
// const HANDLE_HEIGHT = 15;

export default function useStyles() {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: "center",
      position: "absolute",
      width: theme.spacings.screen.width - theme.spacings.safeArea.horizontal * 2,
      height: theme.spacings.bottomNavigation.height,
      bottom: 0,
      // overflow:   "hidden",
    },

  //   maskedView: {
  //     width: HANDLE_WIDTH,
  //     height: HANDLE_HEIGHT,
  //     // backgroundColor: 'red',
  //     overflow: 'hidden'
  //   },


  //   maskWrapper: {
  //     backgroundColor: 'transparent',
  //     overflow: "hidden",
  //     // borderRightColor: 'red'
  //   },

  //   handleMask: {
  //     width: "100%",
  //     height: "100%",
  //     overflow: "hidden",
  //     // backgroundColor: 'red'
  //   },

  //   handle: {
  //     width: HANDLE_WIDTH,
  //     height: HANDLE_HEIGHT,
  //     // backgroundColor: theme.colors.navBar.background,
  //   },

  //   handleBlur: {
  //     ...StyleSheet.absoluteFillObject,
  //     overflow: "hidden",
  //     width: "100%",
  //     height: '100%',
  //     // backgroundColor: theme.colors.navBar.background
  //   },




    
    pill: {
      width: "100%",
      height: theme.spacings.bottomNavigation.height,
      overflow: "hidden",
      borderRadius: theme.spacings.borderRadius.bottomNavigation,
    },
    blurPill: {
      width: "100%",
      height: "100%",
      backgroundColor: theme.colors.navBar.background,
    },
  })
};
