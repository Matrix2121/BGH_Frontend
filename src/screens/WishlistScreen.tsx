// src/screens/LibraryScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenHeader from '../components/ScreenHeader';

export default function WishlistScreen() {
  return (
    <View style={styles.container}>
      <ScreenHeader title="Wishlist" />
      <View style={styles.content}>
        <Text style={styles.placeholderText}>Wish List Content</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 16,
    color: '#333333',
  },
});
