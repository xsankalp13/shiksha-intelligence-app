import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Flame } from 'lucide-react-native';

interface GamificationLayerProps {
  streakDays: number;
  timeRemaining: string;
  weekProgress: boolean[]; // array of 7 booleans for Mon-Sun
  currentXP: number;
  nextLevelXP: number;
  currentLevel: number;
  nextLevel: number;
}

export default function GamificationLayer({
  streakDays, timeRemaining, weekProgress, currentXP, nextLevelXP, currentLevel, nextLevel
}: GamificationLayerProps) {
  
  const xpPercentage = Math.round((currentXP / nextLevelXP) * 100);

  return (
    <View style={styles.card}>
      <View style={styles.topSection}>
        <View style={styles.streakInfo}>
          <View style={styles.streakTitleRow}>
            <Flame size={24} color="#d4a847" fill="#d4a847" />
            <Text style={styles.streakTitle}>{streakDays}-day streak</Text>
          </View>
          <Text style={styles.streakSubtext}>Study today to keep it alive · {timeRemaining} remaining</Text>
        </View>

        <View style={styles.weekCalendar}>
          {weekProgress.map((didStudy, idx) => {
            const isToday = idx === 3; // just mock today as middle of week
            return (
              <View 
                key={idx} 
                style={[
                  styles.dayCircle,
                  didStudy && styles.dayCompleted,
                  !didStudy && styles.dayMissed,
                  isToday && styles.dayToday
                ]}
              />
            );
          })}
        </View>
      </View>

      <View style={styles.xpSection}>
        <View style={styles.xpHeaderRow}>
          <Text style={styles.xpCount}>{currentXP} / {nextLevelXP} XP to next level</Text>
          <Text style={styles.levelText}>Level {currentLevel} → {nextLevel}</Text>
        </View>
        <View style={styles.xpTrack}>
          <View style={[styles.xpFill, { width: `${xpPercentage}%` }]} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    backgroundColor: 'rgba(212,168,71,0.08)',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(212,168,71,0.3)',
    marginBottom: 40,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  streakInfo: {
    flex: 1,
    paddingRight: 16,
    gap: 4,
  },
  streakTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  streakTitle: {
    color: '#d4a847',
    fontSize: 16,
    fontWeight: '600',
  },
  streakSubtext: {
    color: '#e8a030', // muted amber
    fontSize: 12,
  },
  weekCalendar: {
    flexDirection: 'row',
    gap: 6,
  },
  dayCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  dayCompleted: {
    backgroundColor: '#d4a847',
  },
  dayMissed: {
    borderWidth: 1,
    borderColor: 'rgba(212,168,71,0.3)',
    backgroundColor: 'transparent',
  },
  dayToday: {
    borderWidth: 2,
    borderColor: '#ffffff',
    backgroundColor: '#d4a847',
  },
  xpSection: {
    gap: 8,
  },
  xpHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  xpCount: {
    color: '#8a8a9a',
    fontSize: 12,
  },
  levelText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  xpTrack: {
    height: 6,
    backgroundColor: '#1c1c1f',
    borderRadius: 3,
    overflow: 'hidden',
  },
  xpFill: {
    height: '100%',
    backgroundColor: '#7c6ef7', // violet fill as requested
    borderRadius: 3,
  },
});
