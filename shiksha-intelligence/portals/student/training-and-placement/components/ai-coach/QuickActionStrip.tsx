import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const QUICK_ACTIONS = [
  'Mock Interview',
  'Review my resume',
  'Why am I getting rejected?',
  'What should I do today?',
];

interface QuickActionStripProps {
  onActionSelect: (action: string) => void;
}

export default function QuickActionStrip({ onActionSelect }: QuickActionStripProps) {
  const [tappedIndex, setTappedIndex] = useState<number | null>(null);

  const handlePress = (action: string, index: number) => {
    setTappedIndex(index);
    setTimeout(() => {
      setTappedIndex(null);
      onActionSelect(action);
    }, 150); // slight delay to show the violet flash
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {QUICK_ACTIONS.map((action, index) => {
          const isTapped = tappedIndex === index;
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.9}
              onPress={() => handlePress(action, index)}
              style={[
                styles.pill,
                isTapped && styles.pillTapped,
              ]}
            >
              <Text style={[styles.pillText, isTapped && styles.pillTextTapped]}>
                {action}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  scrollContent: {
    paddingHorizontal: 20,
    gap: 8,
  },
  pill: {
    backgroundColor: '#161618',
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  pillTapped: {
    backgroundColor: 'rgba(124,110,247,0.2)',
    borderColor: '#7c6ef7',
  },
  pillText: {
    fontSize: 12,
    color: '#8a8a9a',
    fontWeight: '500',
  },
  pillTextTapped: {
    color: '#7c6ef7',
  },
});
