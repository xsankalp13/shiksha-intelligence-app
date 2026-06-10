import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface OverviewCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  isAlert?: boolean;
  alertBgColor?: string;
  alertTextColor?: string;
  alertBorderColor?: string;
  normalBgColor?: string;
  onPress?: () => void;
}

export default function OverviewCard({
  icon,
  label,
  value,
  isAlert = false,
  alertBgColor = '#FEE2E2',
  alertTextColor = '#991B1B',
  alertBorderColor = '#FCA5A5',
  normalBgColor = '#F0FDF4',
  onPress,
}: OverviewCardProps) {
  const CardContainer = onPress ? TouchableOpacity : View;

  return (
    <CardContainer
      style={[
        styles.card,
        isAlert
          ? { backgroundColor: alertBgColor, borderColor: alertBorderColor }
          : styles.normalCard,
      ]}
      onPress={onPress}
      activeOpacity={onPress ? 0.8 : 1}
    >
      <View
        style={[
          styles.iconCircle,
          {
            backgroundColor: isAlert ? alertBgColor : normalBgColor,
          },
        ]}
      >
        {icon}
      </View>
      <Text style={[styles.label, isAlert && { color: alertTextColor }]}>
        {label}
      </Text>
      <Text style={[styles.value, isAlert && { color: alertTextColor }]}>
        {value}
      </Text>
    </CardContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.02,
    shadowRadius: 10,
    elevation: 2,
  },
  normalCard: {
    borderColor: '#F1F5F9',
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  label: {
    fontFamily: 'Inter_500Medium',
    fontSize: 13,
    color: '#64748B',
  },
  value: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 24,
    color: '#0F172A',
    marginTop: 4,
  },
});
