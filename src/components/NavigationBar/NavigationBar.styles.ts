import { Dimensions, StyleSheet } from "react-native";
import theme from "../../theme/theme";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    position: "absolute",
    height: theme.spacings.bottomNav.height,
    width: SCREEN_WIDTH - theme.spacings.interface.safeAreaHorizontal * 2,
    bottom: 0,
    justifyContent: 'center',
    borderRadius: theme.spacings.bottomNav.cornerRadius
  },
  tabButtonsContainer: {
    height: theme.spacings.bottomNav.height,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: theme.spacings.bottomNav.cornerRadius,
    overflow: "hidden",
    // backgroundColor: 'red'
  },
  tabButton: {
    height: '100%',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  focusedIconWrapper: {
    backgroundColor: theme.colors.accent.primary,
    borderRadius: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
