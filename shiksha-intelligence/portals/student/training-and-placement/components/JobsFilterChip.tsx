import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface JobsFilterChipProps {
  label: string;
  isActive: boolean;
  onPress: () => void;
}

export default function JobsFilterChip({ label, isActive, onPress }: JobsFilterChipProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.chip, isActive && styles.chipActive]}
      onPress={onPress}
    >
      <Text style={[styles.label, isActive && styles.labelActive]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#0e0e10',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.15)',
    marginRight: 8,
  },
  chipActive: {
    backgroundColor: 'rgba(124,110,247,0.15)',
    borderColor: '#7c6ef7',
    borderWidth: 1,
  },
  label: {
    color: '#8a8a9a',
    fontSize: 13,
    fontWeight: '500',
  },
  labelActive: {
    color: '#ffffff',
    fontWeight: '600',
  },
});
