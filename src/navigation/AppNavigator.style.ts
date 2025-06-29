import { StyleSheet } from "react-native";
import theme from '../theme/theme';

const styles = StyleSheet.create({
  navigationContainer: {
    height: theme.spacings.bottomNav.height,
    borderTopWidth: 0,
    backgroundColor: theme.colors.navBar.background,
    borderRadius: 24,
    paddingBottom: 0
  },
  navigationItems: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
});

export default styles;