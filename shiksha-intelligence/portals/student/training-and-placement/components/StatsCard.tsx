import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StatsCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
}

export default function StatsCard({ icon, value, label }: StatsCardProps) {
  return (
    <View style={styles.statCard}>
      <View style={styles.statIcon}>{icon}</View>
      <Text style={styles.statNum}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statCard: {
    flex: 1,
    backgroundColor: '#161618',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.07)',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  statIcon: {
    marginBottom: 6,
  },
  statNum: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f0f0f2',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 10,
    color: '#8a8a9a',
    textAlign: 'center',
  },
});
