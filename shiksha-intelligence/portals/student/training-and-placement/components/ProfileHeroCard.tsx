import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Camera, MapPin, Link } from 'lucide-react-native';

export default function ProfileHeroCard({ isPreview = false }: { isPreview?: boolean }) {
  return (
    <View style={styles.wrapper}>
      {/* Hero Card */}
      <View style={styles.card}>
        <View style={styles.topSection}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatarGradient}>
              <Text style={styles.avatarInitials}>JD</Text>
            </View>
            {!isPreview && (
              <TouchableOpacity style={styles.cameraBtn} activeOpacity={0.8}>
                <Camera size={10} color="#e1e1e1" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.name}>Jane Doe</Text>
          {/* Pencil icon is implied on tap-hold, can add it if needed, or handle it via logic */}
        </View>

        <TouchableOpacity activeOpacity={0.7} style={styles.headlineRow}>
          <Text style={styles.headline}>Backend Engineer · Open to work</Text>
        </TouchableOpacity>

        <View style={styles.infoRow}>
          <TouchableOpacity activeOpacity={0.7} style={styles.infoPill}>
            <MapPin size={12} color="#8a8a9a" />
            <Text style={styles.infoText}>Pune, India</Text>
          </TouchableOpacity>
          <Text style={styles.dotText}>·</Text>
          <TouchableOpacity activeOpacity={0.7} style={styles.infoPill}>
            <View style={styles.greenDot} />
            <Text style={styles.infoText}>Available immediately</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.connectionRow}>
          <View style={styles.connectionLeft}>
            <View style={styles.linkedInIcon}>
              <Link size={10} color="#fff" />
            </View>
            <Text style={styles.connectionText}>Synced 2h ago</Text>
          </View>
          {!isPreview && (
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.refreshText}>Refresh</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Completeness Bar outside the card */}
      <View style={styles.completenessContainer}>
        <View style={styles.barHeader}>
          <Text style={styles.barLabelLeft}>Profile strength: 78%</Text>
          <Text style={styles.barLabelRight}>Strong</Text>
        </View>
        <View style={styles.barTrack}>
          <View style={[styles.barFill, { width: '78%' }]} />
        </View>
        <Text style={styles.barSubtext}>Add 2 more skills to reach Expert level</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#161618',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  topSection: {
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatarGradient: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#7c6ef7', // In a real app, use LinearGradient
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitials: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
  },
  cameraBtn: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#161618',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#e1e1e1',
  },
  headlineRow: {
    marginBottom: 12,
  },
  headline: {
    fontSize: 13,
    color: '#8a8a9a',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  infoPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  infoText: {
    fontSize: 12,
    color: '#8a8a9a',
  },
  dotText: {
    fontSize: 12,
    color: '#55555f',
    marginHorizontal: 8,
  },
  greenDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#3ecf8e',
  },
  connectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.06)',
  },
  connectionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  linkedInIcon: {
    width: 16,
    height: 16,
    borderRadius: 4,
    backgroundColor: '#0a66c2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectionText: {
    fontSize: 12,
    color: '#8a8a9a',
  },
  refreshText: {
    fontSize: 12,
    color: '#7c6ef7',
    fontWeight: '500',
  },
  completenessContainer: {
    paddingHorizontal: 4,
  },
  barHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  barLabelLeft: {
    fontSize: 12,
    color: '#8a8a9a',
  },
  barLabelRight: {
    fontSize: 12,
    color: '#7c6ef7',
    fontWeight: '500',
  },
  barTrack: {
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 2,
    marginBottom: 6,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    backgroundColor: '#7c6ef7',
    borderRadius: 2,
  },
  barSubtext: {
    fontSize: 11,
    color: '#8a8a9a',
    fontStyle: 'italic',
  },
});
