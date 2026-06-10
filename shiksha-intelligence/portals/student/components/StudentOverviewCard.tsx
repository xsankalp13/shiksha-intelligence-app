import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface StudentOverviewCardProps {
  icon: React.ReactNode;
  iconBgColor: string;
  label: string;
  value: string;
  valueSuffix?: string;
  badgeText?: string;
  badgeBgColor?: string;
  badgeTextColor?: string;
  onPress?: () => void;
}

export default function StudentOverviewCard({
  icon,
  iconBgColor,
  label,
  value,
  valueSuffix,
  badgeText,
  badgeBgColor = '#D1FAE5',
  badgeTextColor = '#065F46',
  onPress,
}: StudentOverviewCardProps) {
  const CardContainer = onPress ? TouchableOpacity : View;

  return (
    <CardContainer
      style={styles.card}
      onPress={onPress}
      activeOpacity={onPress ? 0.8 : 1}
    >
      <View style={styles.topRow}>
        <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
          {icon}
        </View>
        {badgeText && (
          <View style={[styles.badge, { backgroundColor: badgeBgColor }]}>
            <Text style={[styles.badgeText, { color: badgeTextColor }]}>
              {badgeText}
            </Text>
          </View>
        )}
      </View>
      
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
      
      <View style={styles.valueContainer}>
        <Text style={styles.valueText}>
          {value}
        </Text>
        {valueSuffix && (
          <Text style={styles.suffixText}>
            {valueSuffix}
          </Text>
        )}
      </View>
    </CardContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0', // light grey border matching screenshot
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.02,
    shadowRadius: 10,
    elevation: 2,
    marginBottom: 12,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 100,
  },
  badgeText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
  },
  label: {
    fontFamily: 'Inter_500Medium',
    fontSize: 13,
    color: '#64748B',
    marginBottom: 4,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  valueText: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 24,
    color: '#0F172A',
  },
  suffixText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#64748B',
    marginLeft: 4,
  },
});
