import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

interface TimetableItemProps {
  time: string;
  period: string;
  subject: string;
  details: string;
  hasLeftIndicator?: boolean;
  cardBgColor?: string;
  onPress?: () => void;
}

export default function TimetableItem({
  time,
  period,
  subject,
  details,
  hasLeftIndicator = false,
  cardBgColor = '#FFFFFF',
  onPress,
}: TimetableItemProps) {
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: cardBgColor }]}
      onPress={onPress}
      activeOpacity={onPress ? 0.8 : 1}
    >
      {hasLeftIndicator && <View style={styles.leftIndicator} />}
      <View style={[styles.contentRow, hasLeftIndicator && styles.contentRowWithIndicator]}>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{time}</Text>
          <Text style={styles.periodText}>{period}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.infoContainer}>
          <Text style={styles.subjectText} numberOfLines={1}>
            {subject}
          </Text>
          <Text style={styles.detailsText} numberOfLines={1}>
            {details}
          </Text>
        </View>
        <ChevronRight size={18} color="#94A3B8" style={styles.chevron} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    overflow: 'hidden',
    marginBottom: 12,
    position: 'relative',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.01,
    shadowRadius: 8,
    elevation: 1,
  },
  leftIndicator: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
    backgroundColor: '#0F172A', // solid black indicator stripe as in screenshot
    borderRadius: 2,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  contentRowWithIndicator: {
    paddingLeft: 20, // push content in slightly to clear indicator
  },
  timeContainer: {
    width: 65,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 16,
    color: '#0F172A',
  },
  periodText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
  },
  divider: {
    width: 1,
    height: 32,
    backgroundColor: '#E2E8F0',
    marginHorizontal: 16,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  subjectText: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 15,
    color: '#0F172A',
  },
  detailsText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#64748B',
    marginTop: 4,
  },
  chevron: {
    marginLeft: 8,
  },
});
