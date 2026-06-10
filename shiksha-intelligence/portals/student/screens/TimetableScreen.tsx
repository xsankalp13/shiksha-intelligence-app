import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { ArrowLeft, Bell, Calendar } from 'lucide-react-native';

import TimetableDaySelector from '../components/TimetableDaySelector';
import LiveClassCard from '../components/LiveClassCard';
import UpcomingClassCard from '../components/UpcomingClassCard';

interface TimetableScreenProps {
  safeTopInset: number;
  safeBottomInset: number;
  onBackPress?: () => void;
  onBellPress?: () => void;
}

export default function TimetableScreen({
  safeTopInset,
  safeBottomInset,
  onBackPress,
  onBellPress,
}: TimetableScreenProps) {
  const [selectedDay, setSelectedDay] = useState<string>('Tue');

  // Multi-day timetable schedule data
  const schedules: Record<string, {
    live: {
      subject: string;
      timeRange: string;
      instructorName: string;
      instructorAvatar: string;
      location: string;
    } | null;
    upcoming: Array<{
      time: string;
      subject: string;
      badgeText: string;
      badgeBgColor: string;
      badgeTextColor: string;
      instructor: string;
      location: string;
    }>;
    endTime: string;
  }> = {
    Mon: {
      live: {
        subject: 'English Literature',
        timeRange: '09:00 AM - 10:15 AM',
        instructorName: 'Mrs. Evelyn Smith',
        instructorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        location: 'Room 105, Block A',
      },
      upcoming: [
        {
          time: '10:30',
          subject: 'Mathematics II',
          badgeText: 'MATH',
          badgeBgColor: '#EFF6FF',
          badgeTextColor: '#1D4ED8',
          instructor: 'Mr. Davis Harrison',
          location: 'Room 302',
        },
        {
          time: '1:00',
          subject: 'World History',
          badgeText: 'SOCIAL',
          badgeBgColor: '#FDF2F8',
          badgeTextColor: '#BE185D',
          instructor: 'Mrs. Diana Prince',
          location: 'Room 201',
        },
      ],
      endTime: '2:15 PM',
    },
    Tue: {
      // Matches the provided screenshot mockup
      live: {
        subject: 'Mathematics',
        timeRange: '10:30 AM - 11:30 AM',
        instructorName: 'Mr. David Harrison',
        instructorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        location: 'Room 302, Block B',
      },
      upcoming: [
        {
          time: '11:45',
          subject: 'Quantum Physics',
          badgeText: 'SCIENCE',
          badgeBgColor: '#E6FAF8', // Light mint green tint matching mockup
          badgeTextColor: '#0F766E',
          instructor: 'Dr. Sarah Miller',
          location: 'Lab 04',
        },
        {
          time: '1:30',
          subject: 'Modern Literature',
          badgeText: 'LANGUAGES',
          badgeBgColor: '#FEF3C7', // Light orange/yellow tint matching mockup
          badgeTextColor: '#B45309',
          instructor: 'Prof. Alan Turing',
          location: 'Room 102',
        },
        {
          time: '2:45',
          subject: 'Art & Philosophy',
          badgeText: 'ARTS',
          badgeBgColor: '#FCE7F3', // Light pink/red tint matching mockup
          badgeTextColor: '#9D174D',
          instructor: 'Ms. Emily Chen',
          location: 'Studio 3',
        },
      ],
      endTime: '4:00 PM',
    },
    Wed: {
      live: {
        subject: 'Organic Chemistry',
        timeRange: '10:30 AM - 11:30 AM',
        instructorName: 'Dr. Sarah Miller',
        instructorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        location: 'Lab 04, Block C',
      },
      upcoming: [
        {
          time: '11:45',
          subject: 'Organic Synthesis',
          badgeText: 'LAB WORK',
          badgeBgColor: '#F5F5F7',
          badgeTextColor: '#334155',
          instructor: 'Dr. Sarah Miller',
          location: 'Lab 04',
        },
        {
          time: '1:30',
          subject: 'Linear Algebra',
          badgeText: 'MATH',
          badgeBgColor: '#EFF6FF',
          badgeTextColor: '#1D4ED8',
          instructor: 'Mr. David Harrison',
          location: 'Room 302',
        },
      ],
      endTime: '3:00 PM',
    },
    Thu: {
      live: null, // No class currently
      upcoming: [
        {
          time: '9:00',
          subject: 'Computer Science',
          badgeText: 'CODING',
          badgeBgColor: '#ECFDF5',
          badgeTextColor: '#047857',
          instructor: 'Prof. Alan Turing',
          location: 'Lab 01',
        },
        {
          time: '11:00',
          subject: 'Modern Literature',
          badgeText: 'LANGUAGES',
          badgeBgColor: '#FEF3C7',
          badgeTextColor: '#B45309',
          instructor: 'Prof. Alan Turing',
          location: 'Room 102',
        },
      ],
      endTime: '12:30 PM',
    },
    Fri: {
      live: {
        subject: 'World Geography',
        timeRange: '09:00 AM - 10:15 AM',
        instructorName: 'Mrs. Diana Prince',
        instructorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        location: 'Room 201, Block B',
      },
      upcoming: [
        {
          time: '10:30',
          subject: 'Art Practice',
          badgeText: 'ARTS',
          badgeBgColor: '#FCE7F3',
          badgeTextColor: '#9D174D',
          instructor: 'Ms. Emily Chen',
          location: 'Studio 3',
        },
      ],
      endTime: '12:00 PM',
    },
    Sat: {
      live: null,
      upcoming: [],
      endTime: '10:00 AM',
    },
  };

  const schedule = schedules[selectedDay] || schedules['Tue'];

  return (
    <View style={styles.container}>
      {/* Sticky Header */}
      <View style={[styles.header, { paddingTop: Math.max(safeTopInset, 12) }]}>
        <View style={styles.headerContent}>
          {onBackPress ? (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onBackPress}
              hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
              style={styles.headerButton}
            >
              <ArrowLeft size={24} color="#0F172A" strokeWidth={2} />
            </TouchableOpacity>
          ) : (
            <View style={styles.headerButtonPlaceholder} />
          )}

          <Text style={styles.headerTitle}>Timetable</Text>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onBellPress || (() => Alert.alert('Notifications', 'No new notifications'))}
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
            style={styles.headerButton}
          >
            <Bell size={24} color="#0F172A" strokeWidth={2} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Horizontal Day Selector Tab Row */}
      <TimetableDaySelector
        selectedDay={selectedDay}
        onDaySelect={setSelectedDay}
      />

      <ScrollView
        contentContainerStyle={[
          styles.scrollContainer,
          { paddingBottom: safeBottomInset + 100 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* HAPPENING NOW Section */}
        {schedule.live && (
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>HAPPENING NOW</Text>
            <LiveClassCard
              subject={schedule.live.subject}
              timeRange={schedule.live.timeRange}
              instructorName={schedule.live.instructorName}
              instructorAvatar={schedule.live.instructorAvatar}
              location={schedule.live.location}
            />
          </View>
        )}

        {/* UPCOMING NEXT Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>UPCOMING NEXT</Text>
          {schedule.upcoming.length > 0 ? (
            schedule.upcoming.map((item, idx) => (
              <UpcomingClassCard
                key={`${item.subject}-${idx}`}
                time={item.time}
                subject={item.subject}
                badgeText={item.badgeText}
                badgeBgColor={item.badgeBgColor}
                badgeTextColor={item.badgeTextColor}
                instructor={item.instructor}
                location={item.location}
                showLine={idx < schedule.upcoming.length - 1}
              />
            ))
          ) : (
            <View style={styles.noClassesContainer}>
              <Text style={styles.noClassesText}>No upcoming classes scheduled.</Text>
            </View>
          )}
        </View>

        {/* Bottom Banner */}
        <View style={styles.bottomBanner}>
          <Calendar size={24} color="#0F172A" strokeWidth={2} style={styles.bannerIcon} />
          <Text style={styles.bannerText}>
            No more classes after {schedule.endTime} today.{'\n'}Have a productive evening!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
  },
  headerButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  headerButtonPlaceholder: {
    width: 40,
  },
  headerTitle: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 20,
    color: '#0F172A',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 13,
    color: '#64748B',
    letterSpacing: 1,
    marginBottom: 14,
    textTransform: 'uppercase',
  },
  noClassesContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noClassesText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#64748B',
  },
  bottomBanner: {
    borderStyle: 'dashed',
    borderWidth: 1.5,
    borderColor: '#94A3B8',
    borderRadius: 16,
    backgroundColor: '#EFF6FF', // Light blue tint background
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 24,
  },
  bannerIcon: {
    marginBottom: 12,
  },
  bannerText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#334155',
    textAlign: 'center',
    lineHeight: 20,
  },
});
