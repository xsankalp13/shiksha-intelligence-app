import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

interface FilterChipProps {
  label: string;
  isActive: boolean;
  onPress: () => void;
  showPulse?: boolean;
}

export default function TrainingFilterChips({ activeFilter, onFilterSelect }: { activeFilter: string, onFilterSelect: (f: string) => void }) {
  const filters = ['All', 'Live Now', 'Upcoming', 'Completed', 'Saved', 'DSA', 'System Design', 'Behavioural', 'LLM'];

  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {filters.map((filter) => (
        <TouchableOpacity
          key={filter}
          onPress={() => onFilterSelect(filter)}
          style={[
            styles.chip,
            activeFilter === filter ? styles.activeChip : styles.inactiveChip
          ]}
        >
          {filter === 'Live Now' && <View style={styles.pulseDot} />}
          <Text style={[
            styles.chipText,
            activeFilter === filter ? styles.activeChipText : styles.inactiveChipText
          ]}>{filter}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 24,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  activeChip: {
    backgroundColor: 'rgba(124,110,247,0.15)',
    borderWidth: 1,
    borderColor: '#7c6ef7',
  },
  inactiveChip: {
    backgroundColor: '#161618',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  chipText: {
    fontSize: 13,
  },
  activeChipText: {
    color: '#7c6ef7',
    fontWeight: '500',
  },
  inactiveChipText: {
    color: '#8a8a9a',
    fontWeight: '400',
  },
  pulseDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#f05c5c',
  },
});
