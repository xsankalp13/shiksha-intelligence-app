import React from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface TimetableDaySelectorProps {
  selectedDay: string;
  onDaySelect: (day: string) => void;
}

export default function TimetableDaySelector({
  selectedDay,
  onDaySelect,
}: TimetableDaySelectorProps) {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      {days.map((day) => {
        const isActive = day === selectedDay;
        return (
          <TouchableOpacity
            key={day}
            activeOpacity={0.8}
            onPress={() => onDaySelect(day)}
            style={[styles.dayButton, isActive && styles.activeDayButton]}
          >
            <Text style={[styles.dayText, isActive && styles.activeDayText]}>
              {day}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    height: 72,
    flexGrow: 0,
    backgroundColor: '#F8FAFC',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    gap: 12,
  },
  dayButton: {
    width: 64,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 4,
    elevation: 1,
  },
  activeDayButton: {
    backgroundColor: '#0F172A', // Dark active background
    borderColor: '#0F172A',
  },
  dayText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#64748B', // Inactive text gray
  },
  activeDayText: {
    color: '#FFFFFF', // Active text white
  },
});
