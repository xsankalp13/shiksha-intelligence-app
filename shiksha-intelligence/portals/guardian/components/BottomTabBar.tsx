import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Home, GraduationCap, Settings, MessageSquare } from 'lucide-react-native';

interface BottomTabBarProps {
  activeTab: 'Home' | 'Schools' | 'Chat' | 'Settings';
  onTabPress: (tab: 'Home' | 'Schools' | 'Chat' | 'Settings') => void;
  safeBottomInset: number;
}

export default function BottomTabBar({
  activeTab,
  onTabPress,
  safeBottomInset,
}: BottomTabBarProps) {
  return (
    <View style={[styles.bottomTabBar, { paddingBottom: Math.max(safeBottomInset, 12) }]}>
      {/* Tab 1: Home */}
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onTabPress('Home')}
        activeOpacity={0.8}
      >
        <View style={[styles.tabIconWrapper, activeTab === 'Home' && styles.tabIconWrapperActive]}>
          <Home size={22} color={activeTab === 'Home' ? '#0F172A' : '#94A3B8'} />
        </View>
        <Text style={[styles.tabText, activeTab === 'Home' && styles.tabTextActive]}>Home</Text>
      </TouchableOpacity>

      {/* Tab 2: Schools */}
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onTabPress('Schools')}
        activeOpacity={0.8}
      >
        <View style={[styles.tabIconWrapper, activeTab === 'Schools' && styles.tabIconWrapperActive]}>
          <GraduationCap size={22} color={activeTab === 'Schools' ? '#0F172A' : '#94A3B8'} />
        </View>
        <Text style={[styles.tabText, activeTab === 'Schools' && styles.tabTextActive]}>Schools</Text>
      </TouchableOpacity>

      {/* Tab 3: Chat */}
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onTabPress('Chat')}
        activeOpacity={0.8}
      >
        <View style={[styles.tabIconWrapper, activeTab === 'Chat' && styles.tabIconWrapperActive]}>
          <MessageSquare size={22} color={activeTab === 'Chat' ? '#0F172A' : '#94A3B8'} />
        </View>
        <Text style={[styles.tabText, activeTab === 'Chat' && styles.tabTextActive]}>Chat</Text>
      </TouchableOpacity>

      {/* Tab 4: Settings */}
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onTabPress('Settings')}
        activeOpacity={0.8}
      >
        <View style={[styles.tabIconWrapper, activeTab === 'Settings' && styles.tabIconWrapperActive]}>
          <Settings size={22} color={activeTab === 'Settings' ? '#0F172A' : '#94A3B8'} />
        </View>
        <Text style={[styles.tabText, activeTab === 'Settings' && styles.tabTextActive]}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomTabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 10,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 8,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 4,
    flex: 1,
  },
  tabIconWrapper: {
    width: 64,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  tabIconWrapperActive: {
    backgroundColor: '#4DEEEA', // Mint-teal active background pill
  },
  tabText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 11,
    color: '#94A3B8',
  },
  tabTextActive: {
    fontFamily: 'Inter_600SemiBold',
    color: '#0F172A',
  },
});
