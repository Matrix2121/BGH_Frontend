import { StyleSheet } from "react-native";
import theme from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.app,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    bottom: 40
  },
  collection: {

  },
  placeholderText: {
    fontSize: 84,
    color: "#fff",
  },
});

export default styles;