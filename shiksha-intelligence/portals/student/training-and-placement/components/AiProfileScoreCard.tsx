import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Sparkles } from 'lucide-react-native';

export default function AiProfileScoreCard() {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.titleRow}>
          <Sparkles size={16} color="#d4a847" />
          <Text style={styles.title}>AI Profile Score</Text>
        </View>
        <Text style={styles.scoreBadge}>74 / 100</Text>
      </View>
      
      <Text style={styles.subtext}>
        Based on recruiter engagement patterns and placement success data from 12,000+ profiles
      </Text>
      
      <View style={styles.divider} />
      
      <View style={styles.tipsContainer}>
        <View style={styles.tipRow}>
          <View style={[styles.dot, { backgroundColor: '#f05c5c' }]} />
          <Text style={styles.tipText}>
            <Text style={styles.tipLabel}>Missing:</Text> Quantified impact in work experience — adds ~8 pts
          </Text>
        </View>
        <View style={styles.tipRow}>
          <View style={[styles.dot, { backgroundColor: '#e8a030' }]} />
          <Text style={styles.tipText}>
            <Text style={styles.tipLabel}>Weak:</Text> GitHub link present but no pinned projects — adds ~5 pts
          </Text>
        </View>
        <View style={styles.tipRow}>
          <View style={[styles.dot, { backgroundColor: '#7c6ef7' }]} />
          <Text style={styles.tipText}>
            <Text style={styles.tipLabel}>Opportunity:</Text> Add 2 certifications from your completed courses — adds ~4 pts
          </Text>
        </View>
      </View>
      
      <TouchableOpacity activeOpacity={0.7} style={styles.actionRow}>
        <Text style={styles.actionText}>See full analysis →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(212,168,71,0.05)',
    borderWidth: 0.5,
    borderColor: '#d4a847',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 20,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  title: {
    fontSize: 13,
    fontWeight: '500',
    color: '#d4a847',
  },
  scoreBadge: {
    fontSize: 20,
    fontWeight: '600',
    color: '#d4a847',
  },
  subtext: {
    fontSize: 11,
    color: 'rgba(212,168,71,0.8)',
    lineHeight: 16,
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(212,168,71,0.2)',
    marginBottom: 12,
  },
  tipsContainer: {
    gap: 8,
    marginBottom: 12,
  },
  tipRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 5,
  },
  tipText: {
    fontSize: 12,
    color: '#e1e1e1',
    flex: 1,
    lineHeight: 18,
  },
  tipLabel: {
    fontWeight: '500',
  },
  actionRow: {
    alignItems: 'flex-end',
    marginTop: 4,
  },
  actionText: {
    fontSize: 12,
    color: '#d4a847',
    fontWeight: '500',
  },
});
