import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface InfoRowProps {
  icon: React.ReactNode;
  iconBgColor?: string;
  label?: string;
  value: string;
}

export default function InfoRow({
  icon,
  iconBgColor = '#EFF6FF', // Light blue background
  label,
  value,
}: InfoRowProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.iconWrapper, { backgroundColor: iconBgColor }]}>
        {icon}
      </View>

      <View style={styles.textContainer}>
        {label && <Text style={styles.label}>{label}</Text>}
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  iconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontFamily: 'Inter_500Medium',
    fontSize: 11,
    color: '#94A3B8', // Gray text
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  value: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 15,
    color: '#0F172A', // Dark Navy
  },
});
