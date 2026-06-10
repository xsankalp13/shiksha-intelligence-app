import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Animated } from 'react-native';
import { ArrowLeft, MessageSquare, Briefcase, Target } from 'lucide-react-native';

interface Session {
  id: string;
  type: 'interview' | 'resume' | 'strategy';
  title: string;
  date: string;
  duration: string;
  summary: string;
}

const SESSIONS: Session[] = [
  {
    id: '1',
    type: 'strategy',
    title: 'Stripe Application Strategy',
    date: 'Yesterday',
    duration: '14 min',
    summary: 'Reviewed Stripe application strategy · 3 action items',
  },
  {
    id: '2',
    type: 'interview',
    title: 'Mock Interview: System Design',
    date: 'Jun 8',
    duration: '22 min',
    summary: 'Focused on scaling databases · Scored 74%',
  },
  {
    id: '3',
    type: 'resume',
    title: 'Resume Feedback',
    date: 'Jun 5',
    duration: '8 min',
    summary: 'Optimized headline and work experience bullet points',
  },
];

interface SessionHistoryOverlayProps {
  visible: boolean;
  onClose: () => void;
  safeTopInset: number;
  safeBottomInset: number;
}

export default function SessionHistoryOverlay({ visible, onClose, safeTopInset, safeBottomInset }: SessionHistoryOverlayProps) {
  // To implement "slides in from right" properly without a navigation library,
  // we can use a Modal with animationType="slide". Since React Native's slide is from bottom,
  // we might just use a custom Animated view if we strictly need "from right",
  // but for simplicity we will use standard Modal with a horizontal translation if we must.
  // Actually, standard Modal with slide is vertical. Let's build a custom right-slide using Animated.

  const [slideAnim] = useState(new Animated.Value(400)); // Start off-screen right

  React.useEffect(() => {
    if (visible) {
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        bounciness: 0,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 400,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  return (
    <Modal visible={visible} transparent animationType="none" onRequestClose={onClose}>
      <Animated.View style={[styles.container, { transform: [{ translateX: slideAnim }] }]}>
        <View style={[styles.header, { paddingTop: Math.max(safeTopInset, 10) }]}>
          <TouchableOpacity style={styles.backBtn} onPress={onClose}>
            <ArrowLeft size={20} color="#ffffff" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Past Sessions</Text>
          <View style={styles.headerRight} />
        </View>

        <ScrollView contentContainerStyle={[styles.content, { paddingBottom: safeBottomInset + 20 }]}>
          {SESSIONS.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>No past sessions yet · Start a conversation to build your coaching history</Text>
            </View>
          ) : (
            SESSIONS.map((session) => (
              <View key={session.id} style={styles.card}>
                <View style={styles.cardTop}>
                  <View style={styles.iconBox}>
                    {session.type === 'strategy' && <Target size={16} color="#7c6ef7" />}
                    {session.type === 'interview' && <MessageSquare size={16} color="#d4a847" />}
                    {session.type === 'resume' && <Briefcase size={16} color="#3ecf8e" />}
                  </View>
                  <View style={styles.cardMeta}>
                    <Text style={styles.cardTitle}>{session.title}</Text>
                    <Text style={styles.cardTime}>{session.date} · {session.duration}</Text>
                  </View>
                </View>
                <Text style={styles.cardSummary}>{session.summary}</Text>
                <TouchableOpacity style={styles.continueBtn}>
                  <Text style={styles.continueText}>Continue →</Text>
                </TouchableOpacity>
              </View>
            ))
          )}
        </ScrollView>
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e10',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    flex: 1,
  },
  backText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },
  headerRight: {
    flex: 1,
  },
  content: {
    padding: 20,
    gap: 16,
  },
  card: {
    backgroundColor: '#161618',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  iconBox: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.05)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardMeta: {
    flex: 1,
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 2,
  },
  cardTime: {
    color: '#8a8a9a',
    fontSize: 12,
  },
  cardSummary: {
    color: '#a0a0ab',
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 16,
  },
  continueBtn: {
    alignSelf: 'flex-start',
  },
  continueText: {
    color: '#7c6ef7',
    fontSize: 13,
    fontWeight: '600',
  },
  emptyState: {
    paddingTop: 60,
    alignItems: 'center',
  },
  emptyText: {
    color: '#8a8a9a',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
  },
});
