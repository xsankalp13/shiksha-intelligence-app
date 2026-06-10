import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { X } from 'lucide-react-native';

interface InsightData {
  id: string;
  type: 'urgent' | 'opportunity' | 'strategic';
  label: string;
  time: string;
  title: string;
  body: string;
  actionText: string;
}

const INSIGHTS: InsightData[] = [
  {
    id: '1',
    type: 'urgent',
    label: 'DEADLINE',
    time: '2h ago',
    title: '6 jobs closing in 48 hours — you haven\'t applied',
    body: 'Stripe Backend, Notion Platform, and 4 others from your saved list close by Thursday. Your match scores are above 88% for all six. Apply now while your profile momentum is high.',
    actionText: 'Review & apply →',
  },
  {
    id: '2',
    type: 'opportunity',
    label: 'OPPORTUNITY',
    time: '5h ago',
    title: '4 recruiters viewed your profile this week',
    body: 'Atlassian, Razorpay, and 2 others from your target list have viewed your profile in the last 72 hours. This is the best window to apply — response rates spike 3× within 5 days of a profile view.',
    actionText: 'Apply to these companies →',
  },
  {
    id: '3',
    type: 'strategic',
    label: 'STRATEGY',
    time: '1d ago',
    title: 'Your System Design score is holding you back',
    body: 'You\'re at 61% in System Design — the threshold for senior roles at product companies is 75%. At your current training pace, you\'ll cross it in 11 days. The masterclass today at 7 PM is your fastest path.',
    actionText: 'Join today\'s session →',
  },
];

const TYPE_COLORS = {
  urgent: '#f05c5c',
  opportunity: '#d4a847',
  strategic: '#7c6ef7',
};

function InsightCard({ insight }: { insight: InsightData }) {
  const accentColor = TYPE_COLORS[insight.type];

  return (
    <View style={[styles.card, { borderLeftColor: accentColor }]}>
      <View style={styles.cardHeader}>
        <Text style={[styles.typeLabel, { color: accentColor }]}>{insight.label}</Text>
        <Text style={styles.timeText}>{insight.time}</Text>
      </View>
      <Text style={styles.cardTitle}>{insight.title}</Text>
      <Text style={styles.cardBody}>{insight.body}</Text>
      
      <View style={styles.cardFooter}>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={[styles.actionText, { color: accentColor }]}>{insight.actionText}</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.dismissBtn}>
          <X size={14} color="#8a8a9a" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function CoachInsightsList() {
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionLabel}>Coach Insights</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.refreshText}>Refresh ↻</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.list}>
        {INSIGHTS.map(insight => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#8a8a9a',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  refreshText: {
    fontSize: 12,
    color: '#7c6ef7',
    fontWeight: '500',
  },
  list: {
    gap: 12,
  },
  card: {
    backgroundColor: '#161618',
    borderRadius: 12,
    borderLeftWidth: 4,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  typeLabel: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  timeText: {
    fontSize: 12,
    color: '#8a8a9a',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: 6,
  },
  cardBody: {
    fontSize: 12,
    color: '#8a8a9a',
    lineHeight: 18,
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 13,
    fontWeight: '600',
  },
  dismissBtn: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 12,
  },
});
