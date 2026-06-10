import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function CoachIdentityCard() {
  return (
    <View style={styles.card}>
      <View style={styles.topSection}>
        <View style={styles.avatarContainer}>
          <View style={styles.activeRing}>
            <LinearGradient
              colors={['#4b3a9e', '#2c1e6d']}
              style={styles.avatarGradient}
            >
              {/* Abstract geometric shapes inside the avatar */}
              <View style={styles.geoShape1} />
              <View style={styles.geoShape2} />
            </LinearGradient>
          </View>
        </View>

        <View style={styles.identityInfo}>
          <Text style={styles.coachName}>Arya</Text>
          <Text style={styles.coachRole}>Your AI Placement Coach · Powered by Claude</Text>
          
          <View style={styles.pillsRow}>
            <View style={styles.pill}>
              <Text style={styles.pillText}>Interview Prep</Text>
            </View>
            <View style={styles.pill}>
              <Text style={styles.pillText}>Resume Review</Text>
            </View>
            <View style={styles.pill}>
              <Text style={styles.pillText}>Job Strategy</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.bottomSection}>
        <Text style={styles.contextMessage}>
          You have a Razorpay technical round in 3 days. Your System Design score is 61% — let's close that gap today.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#161618',
    borderRadius: 18,
    marginHorizontal: 20,
    marginBottom: 24,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  topSection: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    gap: 16,
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeRing: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 1.5,
    borderColor: '#d4a847',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarGradient: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
    position: 'relative',
  },
  geoShape1: {
    position: 'absolute',
    width: 30,
    height: 30,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 8,
    transform: [{ rotate: '45deg' }],
    top: -5,
    left: 10,
  },
  geoShape2: {
    position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 10,
    bottom: 5,
    right: -2,
  },
  identityInfo: {
    flex: 1,
  },
  coachName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 2,
  },
  coachRole: {
    fontSize: 12,
    color: '#8a8a9a',
    marginBottom: 8,
  },
  pillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  pill: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  pillText: {
    fontSize: 10,
    color: '#a0a0ab',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.05)',
    marginHorizontal: 16,
  },
  bottomSection: {
    padding: 16,
    paddingTop: 12,
  },
  contextMessage: {
    fontSize: 13,
    color: '#a0a0ab',
    lineHeight: 19.5, // 1.5 * 13
  },
});
