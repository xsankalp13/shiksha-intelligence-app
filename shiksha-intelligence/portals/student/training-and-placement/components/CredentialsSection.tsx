import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Award, Lock, ShieldCheck, ArrowRight } from 'lucide-react-native';

export default function CredentialsSection({ isPreview = false }: { isPreview?: boolean }) {
  const badges = [
    { id: 1, name: 'DSA Pro', date: 'May 2024', earned: true, iconColor: '#7c6ef7' },
    { id: 2, name: 'Top 5% Cohort', date: 'Apr 2024', earned: true, iconColor: '#d4a847' },
    { id: 3, name: 'System Design', date: 'Mar 2024', earned: true, iconColor: '#4fa3f7' },
    { id: 4, name: 'Mock Elite', date: '', earned: false, iconColor: '#8a8a9a' },
  ];

  const externalCerts = [
    { id: 1, name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', date: 'Aug 2023' },
    { id: 2, name: 'Meta Backend Developer', issuer: 'Coursera', date: 'Dec 2022' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Credentials</Text>
        {!isPreview && (
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.addText}>+ Add certification</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.card}>
        {/* Platform Badges */}
        <View style={styles.badgesSection}>
          <Text style={styles.subLabel}>Platform Badges</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.badgesScroll}>
            {badges.map((badge) => (
              <View key={badge.id} style={[styles.badgeChip, !badge.earned && styles.badgeChipLocked]}>
                <View style={styles.badgeIconWrap}>
                  {badge.earned ? (
                    <Award size={14} color={badge.iconColor} />
                  ) : (
                    <Lock size={14} color="#55555f" />
                  )}
                </View>
                <View>
                  <Text style={[styles.badgeName, !badge.earned && styles.badgeNameLocked]}>{badge.name}</Text>
                  {badge.earned && <Text style={styles.badgeDate}>{badge.date}</Text>}
                </View>
              </View>
            ))}
            <TouchableOpacity style={styles.seeAllBadgesBtn}>
              <Text style={styles.seeAllBadgesText}>See all (14) →</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.divider} />

        {/* External Certifications */}
        <View style={styles.certsSection}>
          <Text style={styles.subLabel}>External Certifications</Text>
          <View style={styles.certList}>
            {externalCerts.map((cert) => (
              <TouchableOpacity key={cert.id} activeOpacity={0.7} style={styles.certRow}>
                <View style={styles.certIconWrap}>
                  <ShieldCheck size={18} color="#e1e1e1" />
                </View>
                <View style={styles.certInfo}>
                  <Text style={styles.certName}>{cert.name}</Text>
                  <Text style={styles.certIssuer}>{cert.issuer} · {cert.date}</Text>
                </View>
                <TouchableOpacity style={styles.verifyBtn}>
                  <Text style={styles.verifyBtnText}>Verify link →</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
          {!isPreview && (
            <TouchableOpacity activeOpacity={0.7} style={styles.addCertBtn}>
              <Text style={styles.addText}>+ Add</Text>
            </TouchableOpacity>
          )}
        </View>
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
  addText: {
    fontSize: 12,
    color: '#7c6ef7',
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#161618',
    borderRadius: 16,
    paddingVertical: 16,
  },
  badgesSection: {
    paddingBottom: 16,
  },
  subLabel: {
    fontSize: 11,
    color: '#8a8a9a',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  badgesScroll: {
    paddingHorizontal: 16,
    gap: 12,
  },
  badgeChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.06)',
    paddingRight: 12,
    paddingVertical: 8,
    paddingLeft: 8,
    borderRadius: 12,
    gap: 8,
  },
  badgeChipLocked: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  badgeIconWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeName: {
    fontSize: 13,
    fontWeight: '500',
    color: '#e1e1e1',
  },
  badgeNameLocked: {
    color: '#55555f',
  },
  badgeDate: {
    fontSize: 10,
    color: '#8a8a9a',
  },
  seeAllBadgesBtn: {
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  seeAllBadgesText: {
    fontSize: 12,
    color: '#8a8a9a',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.06)',
    marginBottom: 16,
  },
  certsSection: {
  },
  certList: {
    paddingHorizontal: 16,
    gap: 16,
    marginBottom: 16,
  },
  certRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  certIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  certInfo: {
    flex: 1,
  },
  certName: {
    fontSize: 13,
    fontWeight: '500',
    color: '#e1e1e1',
    marginBottom: 2,
  },
  certIssuer: {
    fontSize: 12,
    color: '#8a8a9a',
  },
  verifyBtn: {
    paddingLeft: 8,
  },
  verifyBtnText: {
    fontSize: 12,
    color: '#7c6ef7',
    fontWeight: '500',
  },
  addCertBtn: {
    paddingHorizontal: 16,
  },
});
