import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ActivityItemProps {
  title: string;
  subtitle: string;
  time: string;
  dotColor: string;
  isLast?: boolean;
}

export default function ActivityItem({
  title,
  subtitle,
  time,
  dotColor,
  isLast = false,
}: ActivityItemProps) {
  return (
    <View style={[styles.activityItem, isLast && { borderBottomWidth: 0 }]}>
      <View style={styles.activityDotWrap}>
        <View style={[styles.activityDot, { backgroundColor: dotColor }]} />
      </View>
      <View style={styles.activityBody}>
        <Text style={styles.activityTitle}>{title}</Text>
        <Text style={styles.activitySub}>{subtitle}</Text>
      </View>
      <Text style={styles.activityTime}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  activityItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.07)',
  },
  activityDotWrap: {
    paddingTop: 5,
    alignItems: 'center',
  },
  activityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  activityBody: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 13,
    color: '#f0f0f2',
    marginBottom: 2,
    fontWeight: '500',
  },
  activitySub: {
    fontSize: 12,
    color: '#8a8a9a',
  },
  activityTime: {
    fontSize: 12,
    color: '#55555f',
  },
});
