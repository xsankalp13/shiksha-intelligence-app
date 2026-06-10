import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface TrainingItemProps {
  title: string;
  meta: string;
  time: string;
  icon: React.ReactNode;
  iconBgColor: string;
  isLive?: boolean;
  onPress?: () => void;
}

export default function TrainingItem({
  title,
  meta,
  time,
  icon,
  iconBgColor,
  isLive = false,
  onPress,
}: TrainingItemProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.trainingItem} onPress={onPress}>
      <View style={[styles.trainingIconWrap, { backgroundColor: iconBgColor }]}>
        {icon}
      </View>
      <View style={styles.trainingBody}>
        <Text style={styles.trainingTitle} numberOfLines={1}>{title}</Text>
        <Text style={styles.trainingMeta}>{meta}</Text>
      </View>
      {isLive ? (
        <View style={{ alignItems: 'flex-end' }}>
          <View style={styles.liveBadge}>
            <Text style={styles.liveBadgeText}>LIVE</Text>
          </View>
          <Text style={[styles.trainingTime, { marginTop: 4 }]}>{time}</Text>
        </View>
      ) : (
        <Text style={styles.trainingTime}>{time}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  trainingItem: {
    backgroundColor: '#161618',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.07)',
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  trainingIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trainingBody: {
    flex: 1,
  },
  trainingTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#f0f0f2',
    marginBottom: 4,
  },
  trainingMeta: {
    fontSize: 12,
    color: '#8a8a9a',
  },
  trainingTime: {
    fontSize: 12,
    color: '#55555f',
  },
  liveBadge: {
    backgroundColor: 'rgba(240,92,92,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(240,92,92,0.2)',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  liveBadgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#f05c5c',
  },
});
