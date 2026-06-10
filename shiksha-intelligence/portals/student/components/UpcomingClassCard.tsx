import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { User, MapPin } from 'lucide-react-native';

interface UpcomingClassCardProps {
  time: string;
  subject: string;
  badgeText: string;
  badgeBgColor?: string;
  badgeTextColor?: string;
  instructor: string;
  location: string;
  showLine?: boolean;
}

export default function UpcomingClassCard({
  time,
  subject,
  badgeText,
  badgeBgColor = '#F0FDF4', // Light green background
  badgeTextColor = '#15803D', // Dark green text
  instructor,
  location,
  showLine = true,
}: UpcomingClassCardProps) {
  return (
    <View style={styles.container}>
      {/* Left side: Timeline marker */}
      <View style={styles.timelineColumn}>
        <Text style={styles.timeText}>{time}</Text>
        {showLine && <View style={styles.verticalLine} />}
      </View>

      {/* Right side: Card content */}
      <View style={styles.card}>
        <View style={styles.headerRow}>
          <Text style={styles.subject} numberOfLines={2}>{subject}</Text>
          <View style={[styles.badge, { backgroundColor: badgeBgColor }]}>
            <Text style={[styles.badgeText, { color: badgeTextColor }]}>
              {badgeText}
            </Text>
          </View>
        </View>

        <View style={styles.detailsRow}>
          {/* Instructor Block */}
          <View style={styles.detailItem}>
            <User size={14} color="#64748B" style={styles.detailIcon} />
            <Text style={styles.detailText} numberOfLines={1}>{instructor}</Text>
          </View>

          {/* Location Block */}
          <View style={styles.detailItem}>
            <MapPin size={14} color="#64748B" style={styles.detailIcon} />
            <Text style={styles.detailText} numberOfLines={1}>{location}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 16,
    width: '100%',
  },
  timelineColumn: {
    width: 60,
    alignItems: 'center',
    paddingTop: 16,
  },
  timeText: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 15,
    color: '#0F172A',
    textAlign: 'center',
  },
  verticalLine: {
    width: 1.5,
    backgroundColor: '#E2E8F0',
    flex: 1,
    marginTop: 8,
    marginBottom: -24, // Overlap to next item for continuous look
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    padding: 16,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.015,
    shadowRadius: 6,
    elevation: 1.5,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 12,
  },
  subject: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 18,
    color: '#0F172A',
    flex: 1,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 9,
    letterSpacing: 0.5,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  detailIcon: {
    marginRight: 6,
  },
  detailText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 13,
    color: '#475569',
    flex: 1,
  },
});
