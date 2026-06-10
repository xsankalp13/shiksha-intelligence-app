import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronLeft, Flame, Search } from 'lucide-react-native';

interface TrainingHeaderProps {
  streakCount: number;
  onBack: () => void;
  onStreakPress: () => void;
}

export default function TrainingHeader({ streakCount, onBack, onStreakPress }: TrainingHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <TouchableOpacity style={styles.iconBtn} onPress={onBack}>
          <ChevronLeft size={24} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.title}>Training</Text>
        <TouchableOpacity style={styles.streakBtn} onPress={onStreakPress}>
          <Flame size={16} color="#d4a847" fill="#d4a847" />
          <Text style={styles.streakText}>{streakCount}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchBar}>
        <Search size={18} color="#8a8a9a" />
        <Text style={styles.searchPlaceholder}>Search courses, mentors, skills...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 16,
    gap: 16,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconBtn: {
    width: 36,
    height: 36,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
  },
  streakBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(212,168,71,0.1)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(212,168,71,0.3)',
  },
  streakText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#e8a030', // orange-amber
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161618',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 48,
    gap: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.07)',
  },
  searchPlaceholder: {
    color: '#8a8a9a',
    fontSize: 15,
  },
});
