import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface ProfileTabsProps {
  activeTab: 'personal' | 'academic';
  onTabChange: (tab: 'personal' | 'academic') => void;
}

export default function ProfileTabs({
  activeTab,
  onTabChange,
}: ProfileTabsProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => onTabChange('personal')}
        style={[
          styles.tabButton,
          activeTab === 'personal' && styles.activeTabButton,
        ]}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === 'personal' && styles.activeTabText,
          ]}
        >
          Personal Info
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => onTabChange('academic')}
        style={[
          styles.tabButton,
          activeTab === 'academic' && styles.activeTabButton,
        ]}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === 'academic' && styles.activeTabText,
          ]}
        >
          Academic Info
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1.5,
    borderBottomColor: '#E2E8F0',
    paddingHorizontal: 16,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
    marginBottom: -1.5, // Align with container border
  },
  activeTabButton: {
    borderBottomColor: '#0F766E', // Active underline teal
  },
  tabText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#64748B',
  },
  activeTabText: {
    color: '#0F766E', // Active text color
  },
});
