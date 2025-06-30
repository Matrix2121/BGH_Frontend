import { Dimensions, StyleSheet } from "react-native";
import theme from "../../../theme/theme";

const SCREEN_WIDTH = Dimensions.get("window").width;
const BAR_HEIGHT   = theme.spacings.bottomNav.height;

const HANDLE_WIDTH  = 64;
const HANDLE_HEIGHT = 15;

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
    position: "absolute",
    width: SCREEN_WIDTH - theme.spacings.interface.safeAreaHorizontal * 2,
    height: BAR_HEIGHT,
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
    height: BAR_HEIGHT,
    overflow: "hidden",
    borderRadius: theme.spacings.bottomNav.cornerRadius,
  },
  blurPill: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.colors.navBar.background,
  },
});
