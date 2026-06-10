import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface ContinuityBannerProps {
  courseTitle: string;
  progressText: string;
  onResume: () => void;
}

export default function ContinuityBanner({ courseTitle, progressText, onResume }: ContinuityBannerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <View style={styles.livePulseDot} />
        <View style={styles.textStack}>
          <Text style={styles.label}>Continue where you left off</Text>
          <Text style={styles.courseTitle}>{courseTitle}</Text>
          <Text style={styles.progressText}>{progressText}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.resumeBtn} onPress={onResume}>
        <Text style={styles.resumeText}>Resume</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    backgroundColor: 'rgba(124,110,247,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(124,110,247,0.3)',
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    flex: 1,
  },
  livePulseDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#7c6ef7',
    marginTop: 4,
    // Note: React Native reanimated could be used for pulse animation here.
  },
  textStack: {
    gap: 4,
    flex: 1,
    paddingRight: 10,
  },
  label: {
    fontSize: 12,
    color: '#7c6ef7',
    fontWeight: '500',
  },
  courseTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#ffffff',
  },
  progressText: {
    fontSize: 12,
    color: '#8a8a9a',
  },
  resumeBtn: {
    backgroundColor: '#7c6ef7',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  resumeText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '600',
  },
});
