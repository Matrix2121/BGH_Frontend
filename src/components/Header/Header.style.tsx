import {  StyleSheet } from 'react-native';
import theme from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background.app,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacings.header.paddingVertical,
    marginHorizontal: theme.spacings.interface.safeAreaHorizontal
  },
  backButton: {
    marginRight: 8,
  },
  title: {
    ...theme.typography.pageTitle,
    fontSize: 20,
    flex: 1,
    color: theme.colors.text.primary
  },
  chevron: {
    color: theme.colors.accent.primary
  }
});

export default styles;