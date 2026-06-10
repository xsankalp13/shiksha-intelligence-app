import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MapPin } from 'lucide-react-native';

interface LiveClassCardProps {
  subject: string;
  timeRange: string;
  instructorName: string;
  instructorAvatar: string;
  location: string;
}

export default function LiveClassCard({
  subject,
  timeRange,
  instructorName,
  instructorAvatar,
  location,
}: LiveClassCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.liveIndicator} />

      <View style={styles.cardContent}>
        {/* Top row: Live Badge and Time */}
        <View style={styles.topRow}>
          <View style={styles.liveBadge}>
            <View style={styles.liveDot} />
            <Text style={styles.liveText}>LIVE</Text>
          </View>
          
          <View style={styles.timeWrapper}>
            <Text style={styles.subject}>{subject}</Text>
            <Text style={styles.timeRange}>{timeRange}</Text>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Bottom row: Instructor and Location info */}
        <View style={styles.bottomRow}>
          {/* Instructor Column */}
          <View style={styles.infoBlock}>
            <Image source={{ uri: instructorAvatar }} style={styles.instructorAvatar} />
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoLabel}>Instructor</Text>
              <Text style={styles.infoValue} numberOfLines={2}>{instructorName}</Text>
            </View>
          </View>

          {/* Location Column */}
          <View style={styles.infoBlock}>
            <View style={styles.locationIconBox}>
              <MapPin size={16} color="#2563EB" strokeWidth={2.5} />
            </View>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoLabel}>Location</Text>
              <Text style={styles.infoValue} numberOfLines={2}>{location}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 3,
    marginBottom: 24,
  },
  liveIndicator: {
    width: 6,
    backgroundColor: '#0F766E', // Green/Teal indicator on left
  },
  cardContent: {
    flex: 1,
    padding: 16,
  },
  topRow: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8,
  },
  liveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CCFBF1', // Teal 100
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 100,
    gap: 4,
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#0D9488', // Teal 600
  },
  liveText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 10,
    color: '#0F766E',
    letterSpacing: 0.5,
  },
  timeWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: 4,
  },
  subject: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 22,
    color: '#0F172A',
    flex: 1,
    minWidth: 150,
  },
  timeRange: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 13,
    color: '#334155',
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 14,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  infoBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  instructorAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E2E8F0',
  },
  locationIconBox: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EFF6FF', // Light blue background for map pin icon
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoTextWrapper: {
    flex: 1,
  },
  infoLabel: {
    fontFamily: 'Inter_500Medium',
    fontSize: 10,
    color: '#94A3B8',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  infoValue: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 13,
    color: '#0F172A',
  },
});
