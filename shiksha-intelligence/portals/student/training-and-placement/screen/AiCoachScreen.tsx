import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import AiCoachHeader from '../components/ai-coach/AiCoachHeader';
import CoachIdentityCard from '../components/ai-coach/CoachIdentityCard';
import CoachInsightsList from '../components/ai-coach/CoachInsightsList';
import QuickActionStrip from '../components/ai-coach/QuickActionStrip';
import ChatInterface, { ChatMessage } from '../components/ai-coach/ChatInterface';
import InputBar from '../components/ai-coach/InputBar';
import SessionHistoryOverlay from '../components/ai-coach/SessionHistoryOverlay';
import CoachPreferencesSheet from '../components/ai-coach/CoachPreferencesSheet';
import BottomNav from '../components/BottomNav';

interface AiCoachScreenProps {
  safeTopInset: number;
  safeBottomInset: number;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: '1',
    type: 'user',
    text: 'What should I focus on this week?',
    time: '10:42 AM',
  },
  {
    id: '2',
    type: 'ai',
    isFirstInSequence: true,
    time: '10:42 AM',
    structuredContent: (
      <View style={{ padding: 12 }}>
        <Text style={{ color: '#ffffff', fontSize: 13, marginBottom: 8, fontWeight: '600' }}>This week's focus plan:</Text>
        <View style={{ gap: 6, marginBottom: 12 }}>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: '#7c6ef7', marginTop: 6 }} />
            <Text style={{ color: '#8a8a9a', fontSize: 13, flex: 1, lineHeight: 18 }}>Complete System Design module 3 — closes your biggest skill gap</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: '#7c6ef7', marginTop: 6 }} />
            <Text style={{ color: '#8a8a9a', fontSize: 13, flex: 1, lineHeight: 18 }}>Apply to the 6 closing jobs — deadline Thursday</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: '#7c6ef7', marginTop: 6 }} />
            <Text style={{ color: '#8a8a9a', fontSize: 13, flex: 1, lineHeight: 18 }}>Attend today's live masterclass at 7 PM</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: '#7c6ef7', marginTop: 6 }} />
            <Text style={{ color: '#8a8a9a', fontSize: 13, flex: 1, lineHeight: 18 }}>Add impact metrics to your Infosys experience entry</Text>
          </View>
        </View>
        <Text style={{ color: '#ffffff', fontSize: 13, lineHeight: 18 }}>
          If you do these four things, your readiness score moves from 87 → 94. Want me to block time for any of these?
        </Text>
      </View>
    ),
  },
  {
    id: '3',
    type: 'user',
    text: 'Can you do a quick mock interview with me?',
    time: '10:45 AM',
  },
  {
    id: '4',
    type: 'ai',
    isFirstInSequence: true,
    text: "Absolutely. Let's do a 15-minute technical screen — I'll play the interviewer. I'll ask 3 DSA questions at the difficulty level Razorpay typically uses for backend roles. Ready when you are. Type 'start' to begin.",
    time: '10:45 AM',
  },
  {
    id: '5',
    type: 'user',
    text: 'start',
    time: '10:46 AM',
  },
  {
    id: '6',
    type: 'ai',
    isFirstInSequence: true,
    text: "Question 1 of 3 — [Medium · Arrays]\n\nGiven an array of integers, return the indices of the two numbers that add up to a target sum. You may not use the same element twice.\n\nTake your time. Walk me through your approach before coding.",
    time: '10:46 AM',
  },
];

export default function AiCoachScreen({ safeTopInset, safeBottomInset }: AiCoachScreenProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [isMockInterview, setIsMockInterview] = useState(false);
  
  const [historyVisible, setHistoryVisible] = useState(false);
  const [preferencesVisible, setPreferencesVisible] = useState(false);

  const handleSend = (text: string) => {
    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      text,
      time: 'Just now',
    };
    setMessages(prev => [...prev, newMsg]);

    if (text.toLowerCase().includes('mock interview') || text.toLowerCase().includes('start')) {
      setIsMockInterview(true);
    }
  };

  return (
    <View style={styles.container}>
      <AiCoachHeader 
        safeTopInset={safeTopInset} 
        onHistoryPress={() => setHistoryVisible(true)}
        onSettingsPress={() => setPreferencesVisible(true)}
      />
      
      {isMockInterview && (
        <View style={styles.mockInterviewBanner}>
          <Text style={styles.mockBannerText}>🎙 Mock Interview in progress · Question 1 of 3 · Timer: 4:32</Text>
          <Text style={styles.endSessionText} onPress={() => setIsMockInterview(false)}>End session</Text>
        </View>
      )}

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: safeBottomInset + 140 }}
      >
        <CoachIdentityCard />
        <CoachInsightsList />
        
        {/* Gradient fade transition to chat area */}
        <LinearGradient
          colors={['rgba(14,14,16,0)', '#0e0e10']}
          style={styles.fadeGradient}
        />
        
        <QuickActionStrip onActionSelect={handleSend} />
        
        <ChatInterface messages={messages} />
      </ScrollView>

      {/* Input Bar pinned to bottom above nav */}
      <View style={[styles.inputContainer, { bottom: safeBottomInset + 56 }]}>
        <InputBar onSend={handleSend} />
      </View>

      <BottomNav safeBottomInset={safeBottomInset} activeTab="ai" />

      <SessionHistoryOverlay 
        visible={historyVisible} 
        onClose={() => setHistoryVisible(false)} 
        safeTopInset={safeTopInset}
        safeBottomInset={safeBottomInset}
      />
      
      <CoachPreferencesSheet 
        visible={preferencesVisible} 
        onClose={() => setPreferencesVisible(false)} 
        safeBottomInset={safeBottomInset}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e10',
  },
  fadeGradient: {
    height: 40,
    width: '100%',
    marginTop: -40,
    marginBottom: 10,
  },
  inputContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: '#0e0e10',
  },
  mockInterviewBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(232,160,48,0.1)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(232,160,48,0.2)',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  mockBannerText: {
    fontSize: 12,
    color: '#e8a030',
    fontWeight: '500',
  },
  endSessionText: {
    fontSize: 12,
    color: '#f05c5c',
    fontWeight: '600',
  },
});
