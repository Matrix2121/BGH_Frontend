import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
// import { ChevronLeft } from 'lucide-react-native';

export interface ScreenHeaderProps {
  /** Title text to display in the header */
  title: string;
  /** Whether to show a back button */
  showBack?: boolean;
  /** Custom back handler; defaults to navigation.goBack() */
  onBack?: () => void;
}

export default function ScreenHeader({
  title,
  showBack = false,
  onBack,
}: ScreenHeaderProps) {
  const navigation = useNavigation<NavigationProp<any>>();

  const handleBack = () => {
    onBack ? onBack() : navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {showBack && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBack}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            {/* <ChevronLeft size={24} /> */}
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  backButton: {
    marginRight: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    color: '#000',
  },
});
