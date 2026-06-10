import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function InterviewHistorySection({ isPreview = false }: { isPreview?: boolean }) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const interviews = [
    {
      id: 1,
      company: 'Amazon',
      role: 'SDE-1',
      type: 'System Design',
      outcome: 'Cleared',
      date: '2 days ago',
      notes: '',
      isMock: false,
    },
    {
      id: 2,
      company: 'Google',
      role: 'SWE Intern',
      type: 'Technical',
      outcome: 'Pending',
      date: '1 week ago',
      notes: 'Asked about DP and Graph algorithms. Managed to solve the graph one optimally.',
      isMock: false,
    },
    {
      id: 3,
      company: 'Mock Interview',
      role: 'Backend Role',
      type: 'HR Round',
      outcome: 'Rejected',
      date: '2 weeks ago',
      notes: 'AI Feedback: Improve STAR method storytelling. Try to sound more confident about past impact.',
      isMock: true,
    }
  ];

  return (
    <View style={[styles.container, isPreview && interviews.length === 0 && { display: 'none' }]}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Interview History</Text>
        {!isPreview && (
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.seeAllText}>See all →</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.card}>
        {interviews.map((interview, index) => (
          <View key={interview.id}>
            {index > 0 && <View style={styles.divider} />}
            <TouchableOpacity 
              activeOpacity={0.7} 
              style={styles.row}
              onPress={() => setExpandedId(expandedId === interview.id ? null : interview.id)}
            >
              <View style={styles.logoContainer}>
                <Text style={styles.logoText}>{interview.company.charAt(0)}</Text>
              </View>
              
              <View style={styles.infoCol}>
                <Text style={styles.companyName}>{interview.company}</Text>
                <View style={styles.metaRow}>
                  <Text style={styles.roleText}>{interview.role}</Text>
                  <Text style={styles.dot}>·</Text>
                  <View style={styles.typePill}>
                    <Text style={styles.typePillText}>{interview.type}</Text>
                  </View>
                </View>
                <Text style={styles.dateText}>{interview.date}</Text>
              </View>

              <View style={[
                styles.outcomeBadge,
                interview.outcome === 'Cleared' && styles.outcomeCleared,
                interview.outcome === 'Pending' && styles.outcomePending,
                interview.outcome === 'Rejected' && styles.outcomeRejected,
              ]}>
                <Text style={[
                  styles.outcomeText,
                  interview.outcome === 'Cleared' && styles.outcomeTextCleared,
                  interview.outcome === 'Pending' && styles.outcomeTextPending,
                  interview.outcome === 'Rejected' && styles.outcomeTextRejected,
                ]}>
                  {interview.outcome}
                </Text>
              </View>
            </TouchableOpacity>

            {expandedId === interview.id && (
              <View style={styles.expandedContent}>
                {interview.notes ? (
                  <View>
                    <Text style={styles.notesLabel}>
                      {interview.isMock ? 'AI Feedback:' : 'Your Notes:'}
                    </Text>
                    <Text style={styles.notesText}>{interview.notes}</Text>
                  </View>
                ) : !isPreview ? (
                  <TouchableOpacity activeOpacity={0.7}>
                    <Text style={styles.addNotesText}>Add notes →</Text>
                  </TouchableOpacity>
                ) : null}
              </View>
            )}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#55555f',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  seeAllText: {
    fontSize: 12,
    color: '#7c6ef7',
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#161618',
    borderRadius: 16,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 16,
    gap: 12,
  },
  logoContainer: {
    width: 24,
    height: 24,
    borderRadius: 6,
    backgroundColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  logoText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#e1e1e1',
  },
  infoCol: {
    flex: 1,
  },
  companyName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#e1e1e1',
    marginBottom: 4,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  roleText: {
    fontSize: 13,
    color: '#8a8a9a',
  },
  dot: {
    fontSize: 12,
    color: '#55555f',
    marginHorizontal: 6,
  },
  typePill: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  typePillText: {
    fontSize: 10,
    color: '#8a8a9a',
  },
  dateText: {
    fontSize: 11,
    color: '#55555f',
  },
  outcomeBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  outcomeCleared: {
    backgroundColor: 'rgba(62,207,142,0.1)',
  },
  outcomePending: {
    backgroundColor: 'rgba(232,160,48,0.1)',
  },
  outcomeRejected: {
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  outcomeText: {
    fontSize: 11,
    fontWeight: '500',
  },
  outcomeTextCleared: {
    color: '#3ecf8e',
  },
  outcomeTextPending: {
    color: '#e8a030',
  },
  outcomeTextRejected: {
    color: '#8a8a9a',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  expandedContent: {
    paddingBottom: 16,
    paddingLeft: 36,
  },
  notesLabel: {
    fontSize: 11,
    color: '#8a8a9a',
    marginBottom: 4,
    fontWeight: '500',
  },
  notesText: {
    fontSize: 12,
    color: '#e1e1e1',
    lineHeight: 18,
  },
  addNotesText: {
    fontSize: 12,
    color: '#7c6ef7',
    fontWeight: '500',
  },
});
