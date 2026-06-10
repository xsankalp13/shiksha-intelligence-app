import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface NoticeCardProps {
  tagText: string;
  tagBgColor: string;
  tagTextColor: string;
  timeText: string;
  title: string;
  description: string;
  bgColor: string;
}

export default function NoticeCard({
  tagText,
  tagBgColor,
  tagTextColor,
  timeText,
  title,
  description,
  bgColor,
}: NoticeCardProps) {
  return (
    <View style={[styles.card, { backgroundColor: bgColor }]}>
      <View style={styles.headerRow}>
        <View style={[styles.tag, { backgroundColor: tagBgColor }]}>
          <Text style={[styles.tagText, { color: tagTextColor }]}>
            {tagText}
          </Text>
        </View>
        <Text style={styles.timeText}>
          {timeText}
        </Text>
      </View>
      <Text style={styles.titleText}>
        {title}
      </Text>
      <Text style={styles.descText} numberOfLines={2}>
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.01,
    shadowRadius: 8,
    elevation: 1,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  tagText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
  },
  timeText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#64748B',
  },
  titleText: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 15,
    color: '#0F172A',
    marginBottom: 6,
  },
  descText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#64748B',
    lineHeight: 18,
  },
});
