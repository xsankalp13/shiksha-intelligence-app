import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Home, Briefcase, Book, MessageSquare, User } from 'lucide-react-native';

type TabName = 'home' | 'jobs' | 'training' | 'ai' | 'profile';

interface BottomNavProps {
  safeBottomInset: number;
  activeTab?: TabName;
}

export default function BottomNav({ safeBottomInset, activeTab = 'home' }: BottomNavProps) {
  const router = useRouter();

  return (
    <View style={[styles.bottomNav, { paddingBottom: Math.max(safeBottomInset, 16) }]}>
      <TouchableOpacity 
        style={activeTab === 'home' ? styles.navItemActive : styles.navItem} 
        onPress={() => {
          if (activeTab !== 'home') router.replace('/(protected)/training-and-placement');
        }}
      >
        <Home size={22} color={activeTab === 'home' ? "#7c6ef7" : "#55555f"} />
        <Text style={activeTab === 'home' ? styles.navLabelActive : styles.navLabel}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={activeTab === 'jobs' ? styles.navItemActive : styles.navItem}
        onPress={() => {
          if (activeTab !== 'jobs') router.replace('/(protected)/jobs');
        }}
      >
        <Briefcase size={22} color={activeTab === 'jobs' ? "#7c6ef7" : "#55555f"} />
        <Text style={activeTab === 'jobs' ? styles.navLabelActive : styles.navLabel}>Jobs</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={activeTab === 'training' ? styles.navItemActive : styles.navItem}
        onPress={() => {
          if (activeTab !== 'training') router.replace('/(protected)/training');
        }}
      >
        <Book size={22} color={activeTab === 'training' ? "#7c6ef7" : "#55555f"} />
        <Text style={activeTab === 'training' ? styles.navLabelActive : styles.navLabel}>Training</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={activeTab === 'ai' ? styles.navItemActive : styles.navItem}
        activeOpacity={1}
        onPress={() => {
          // @ts-ignore
          if (activeTab !== 'ai') router.replace('/(protected)/ai-coach');
        }}
      >
        <MessageSquare size={22} color={activeTab === 'ai' ? "#7c6ef7" : "#55555f"} />
        <Text style={activeTab === 'ai' ? styles.navLabelActive : styles.navLabel}>AI Coach</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={activeTab === 'profile' ? styles.navItemActive : styles.navItem}
        onPress={() => {
          if (activeTab !== 'profile') router.replace('/(protected)/profile');
        }}
      >
        <User size={22} color={activeTab === 'profile' ? "#7c6ef7" : "#55555f"} />
        <Text style={activeTab === 'profile' ? styles.navLabelActive : styles.navLabel}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(14,14,16,0.95)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.11)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  navItem: {
    alignItems: 'center',
    gap: 4,
    flex: 1,
    paddingVertical: 6,
  },
  navItemActive: {
    alignItems: 'center',
    gap: 4,
    flex: 1,
    paddingVertical: 6,
    backgroundColor: 'rgba(124,110,247,0.13)',
    borderRadius: 12,
  },
  navLabel: {
    fontSize: 10,
    color: '#55555f',
    fontWeight: '600',
  },
  navLabelActive: {
    fontSize: 10,
    color: '#7c6ef7',
    fontWeight: '600',
  },
});
