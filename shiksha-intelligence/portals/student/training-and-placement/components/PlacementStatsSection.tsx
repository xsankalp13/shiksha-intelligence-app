import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PlacementStatsSection() {
  const stats = [
    { label: 'Applications sent', value: '42' },
    { label: 'Shortlisted', value: '8' },
    { label: 'Rounds cleared', value: '14' },
    { label: 'Offers received', value: '2' },
    { label: 'Highest offer', value: '₹24 LPA' },
    { label: 'Avg response rate', value: '19%' },
  ];

  const stages = ['Applied', 'Shortlisted', 'Interviewed', 'Offered'];
  const currentStageIndex = 2; // Interviewed is the current furthest stage

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Placement Stats</Text>
      
      <View style={styles.grid}>
        {stats.map((stat, idx) => (
          <View key={idx} style={styles.statCard}>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.timelineContainer}>
        <View style={styles.timelineLine} />
        <View style={styles.timelineTrack}>
          {stages.map((stage, idx) => {
            const isActive = idx <= currentStageIndex;
            const isCurrent = idx === currentStageIndex;
            return (
              <View key={stage} style={styles.timelineNode}>
                <View style={[
                  styles.nodeDot, 
                  isActive ? styles.nodeDotActive : styles.nodeDotInactive,
                  isCurrent && styles.nodeDotCurrent
                ]} />
                <Text style={[
                  styles.nodeText,
                  isActive ? styles.nodeTextActive : styles.nodeTextInactive,
                  isCurrent && styles.nodeTextCurrent
                ]}>
                  {stage}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#55555f',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },
  statCard: {
    width: '31%',
    backgroundColor: '#161618',
    borderRadius: 12,
    padding: 12,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.03)',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#e1e1e1',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 10,
    color: '#8a8a9a',
    lineHeight: 14,
  },
  timelineContainer: {
    paddingVertical: 12,
    position: 'relative',
  },
  timelineLine: {
    position: 'absolute',
    top: 17,
    left: 20,
    right: 20,
    height: 2,
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  timelineTrack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timelineNode: {
    alignItems: 'center',
    gap: 8,
    width: 60,
  },
  nodeDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#0e0e10',
  },
  nodeDotInactive: {
    backgroundColor: '#55555f',
  },
  nodeDotActive: {
    backgroundColor: '#7c6ef7',
  },
  nodeDotCurrent: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#7c6ef7',
    borderWidth: 4,
    borderColor: 'rgba(124,110,247,0.3)',
    marginTop: -2,
    marginBottom: -2,
  },
  nodeText: {
    fontSize: 10,
    textAlign: 'center',
  },
  nodeTextInactive: {
    color: '#55555f',
  },
  nodeTextActive: {
    color: '#8a8a9a',
  },
  nodeTextCurrent: {
    color: '#e1e1e1',
    fontWeight: '600',
  },
});
