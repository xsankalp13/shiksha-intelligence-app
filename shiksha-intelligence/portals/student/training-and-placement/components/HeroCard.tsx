import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Pencil, ChevronRight, Sparkles } from 'lucide-react-native';
import Svg, { Circle } from 'react-native-svg';

interface HeroCardProps {
  score: number;
  pointsToNextTier: number;
  nextTierName: string;
  nextActionText: string;
  nextActionPoints: number;
  aiSuggestion: string;
}

export default function HeroCard({
  score,
  pointsToNextTier,
  nextTierName,
  nextActionText,
  nextActionPoints,
  aiSuggestion,
}: HeroCardProps) {
  // calculate dash offset based on score (0-100)
  // radius is 33, so circumference is ~207.34
  const circumference = 207.34;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <View style={styles.hero}>
      <Text style={styles.heroLabel}>Placement Readiness</Text>
      <View style={styles.heroScoreRow}>
        <View style={styles.scoreRing}>
          <Svg height="76" width="76" viewBox="0 0 76 76" style={{ transform: [{ rotate: '-90deg' }] }}>
            <Circle cx="38" cy="38" r="33" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="5" />
            <Circle
              cx="38"
              cy="38"
              r="33"
              fill="none"
              stroke="#7c6ef7"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </Svg>
          <View style={styles.scoreCenter}>
            <Text style={styles.scoreNum}>{score}</Text>
            <Text style={styles.scorePct}>/ 100</Text>
          </View>
        </View>
        <View style={styles.heroMeta}>
          <Text style={styles.heroMetaTitle}>Almost placement-ready</Text>
          <View style={styles.readinessBarWrap}>
            <View style={[styles.readinessBar, { width: `${score}%` }]} />
          </View>
          <Text style={styles.readinessSub}>
            {pointsToNextTier} pts to <Text style={{ color: '#7c6ef7', fontWeight: 'bold' }}>{nextTierName}</Text> tier
          </Text>
        </View>
      </View>

      <TouchableOpacity activeOpacity={0.8} style={styles.heroAction}>
        <Pencil size={16} color="#7c6ef7" style={{ flexShrink: 0 }} />
        <Text style={styles.actionText}>
          <Text style={{ color: '#f0f0f2', fontWeight: '600' }}>Next action:</Text> {nextActionText} to boost score by +{nextActionPoints} pts
        </Text>
        <ChevronRight size={16} color="#55555f" style={{ marginLeft: 'auto', flexShrink: 0 }} />
      </TouchableOpacity>

      <View style={styles.aiChip}>
        <Sparkles size={14} color="#d4a847" style={{ flexShrink: 0, marginTop: 2 }} />
        <Text style={styles.aiChipText}>
          {aiSuggestion}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    marginHorizontal: 16,
    backgroundColor: '#161618',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.11)',
    borderRadius: 18,
    padding: 20,
    overflow: 'hidden',
  },
  heroLabel: {
    fontSize: 11,
    letterSpacing: 1,
    color: '#55555f',
    textTransform: 'uppercase',
    fontWeight: '600',
    marginBottom: 12,
  },
  heroScoreRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 16,
    marginBottom: 16,
  },
  scoreRing: {
    width: 76,
    height: 76,
  },
  scoreCenter: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreNum: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f0f0f2',
    lineHeight: 26,
  },
  scorePct: {
    fontSize: 11,
    color: '#8a8a9a',
  },
  heroMeta: {
    flex: 1,
  },
  heroMetaTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#f0f0f2',
    marginBottom: 6,
  },
  readinessBarWrap: {
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 8,
  },
  readinessBar: {
    height: 4,
    backgroundColor: '#7c6ef7',
    borderRadius: 2,
  },
  readinessSub: {
    fontSize: 12,
    color: '#8a8a9a',
  },
  heroAction: {
    backgroundColor: 'rgba(124,110,247,0.13)',
    borderWidth: 1,
    borderColor: 'rgba(124,110,247,0.3)',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  actionText: {
    fontSize: 12,
    color: '#8a8a9a',
    flex: 1,
    lineHeight: 16,
  },
  aiChip: {
    backgroundColor: 'rgba(212,168,71,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(212,168,71,0.2)',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  aiChipText: {
    fontSize: 11.5,
    color: '#c8a84e',
    lineHeight: 16,
    flex: 1,
  },
});
