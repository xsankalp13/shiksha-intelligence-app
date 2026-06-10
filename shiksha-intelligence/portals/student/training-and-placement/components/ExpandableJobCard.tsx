import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation } from 'react-native';
import { Bookmark, Check, Share2, ChevronUp, Sparkles, Building, UserCircle2 } from 'lucide-react-native';

interface BulletPoint {
  id: string;
  text: string;
}

export interface ExpandableJobCardProps {
  company: string;
  role: string;
  badge?: 'New' | 'Closing soon';
  matchPercent: number;
  workType: string;
  location: string;
  experience: string;
  salary: string;
  logo: React.ReactNode;
  logoBgColor: string;
  matchReasons: BulletPoint[];
  aboutRole: string;
  skills: string[];
  recruiterSignal?: string;
  isSaved?: boolean;
}

export default function ExpandableJobCard({
  company,
  role,
  badge,
  matchPercent,
  workType,
  location,
  experience,
  salary,
  logo,
  logoBgColor,
  matchReasons,
  aboutRole,
  skills,
  recruiterSignal,
  isSaved = false,
}: ExpandableJobCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [saved, setSaved] = useState(isSaved);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={toggleExpand}
      style={[styles.card, expanded && styles.cardExpanded]}
    >
      {/* --- COLLAPSED CONTENT --- */}
      <View style={styles.topRow}>
        <View style={styles.companyInfo}>
          <View style={[styles.logoContainer, { backgroundColor: logoBgColor }]}>
            {logo}
          </View>
          <Text style={styles.companyName}>{company}</Text>
        </View>
        {badge && (
          <View
            style={[
              styles.badgeContainer,
              badge === 'Closing soon' ? styles.badgeClosing : styles.badgeNew,
            ]}
          >
            <Text
              style={[
                styles.badgeText,
                badge === 'Closing soon' ? styles.badgeTextClosing : styles.badgeTextNew,
              ]}
            >
              {badge}
            </Text>
          </View>
        )}
      </View>

      <Text style={styles.roleTitle}>{role}</Text>

      <View style={styles.tagRow}>
        <View style={styles.matchTag}>
          <Sparkles size={12} color="#3ecf8e" />
          <Text style={styles.matchText}>{matchPercent}% Match</Text>
        </View>
        <Text style={styles.tagText}>{workType}</Text>
        <Text style={styles.tagDot}>·</Text>
        <Text style={styles.tagText}>{location}</Text>
        <Text style={styles.tagDot}>·</Text>
        <Text style={styles.tagText}>{experience}</Text>
      </View>

      {!expanded && (
        <View style={styles.bottomRow}>
          <Text style={styles.salary}>{salary}</Text>
          <View style={styles.actions}>
            <TouchableOpacity onPress={handleSave} style={styles.iconBtn}>
              <Bookmark size={20} color={saved ? '#7c6ef7' : '#8a8a9a'} fill={saved ? '#7c6ef7' : 'none'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.applyBtnSmall}>
              <Text style={styles.applyBtnSmallText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* --- EXPANDED CONTENT --- */}
      {expanded && (
        <View style={styles.expandedContent}>
          <View style={styles.divider} />
          
          <Text style={styles.salaryExpanded}>{salary}</Text>

          <Text style={styles.sectionTitle}>Why you match</Text>
          <View style={styles.matchList}>
            {matchReasons.map((item) => (
              <View key={item.id} style={styles.matchListItem}>
                <Check size={14} color="#3ecf8e" style={styles.checkIcon} />
                <Text style={styles.matchListText}>{item.text}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.sectionTitle}>About the role</Text>
          <Text style={styles.aboutText}>{aboutRole}</Text>

          <View style={styles.skillsRow}>
            {skills.map((skill, index) => (
              <View key={index} style={styles.skillPill}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>

          {recruiterSignal && (
            <View style={styles.recruiterSignal}>
              <UserCircle2 size={16} color="#d4a847" />
              <Text style={styles.recruiterText}>{recruiterSignal}</Text>
            </View>
          )}

          <View style={styles.expandedActions}>
            <View style={styles.iconActionRow}>
              <TouchableOpacity style={styles.iconBtnLarge}>
                <Share2 size={20} color="#8a8a9a" />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSave} style={styles.iconBtnLarge}>
                <Bookmark size={20} color={saved ? '#7c6ef7' : '#8a8a9a'} fill={saved ? '#7c6ef7' : 'none'} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.applyBtnFull}>
              <Text style={styles.applyBtnFullText}>Apply now</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.collapseChevronWrap}>
            <ChevronUp size={20} color="#55555f" />
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#161618',
    borderRadius: 16,
    padding: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.08)',
    marginBottom: 12,
  },
  cardExpanded: {
    backgroundColor: '#1c1c1f',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  companyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoContainer: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  companyName: {
    color: '#8a8a9a',
    fontSize: 13,
    fontWeight: '500',
  },
  badgeContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
  },
  badgeNew: {
    backgroundColor: 'rgba(79,163,247,0.1)',
    borderColor: 'rgba(79,163,247,0.3)',
  },
  badgeClosing: {
    backgroundColor: 'rgba(240,92,92,0.1)',
    borderColor: 'rgba(240,92,92,0.3)',
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '600',
  },
  badgeTextNew: {
    color: '#4fa3f7',
  },
  badgeTextClosing: {
    color: '#f05c5c',
  },
  roleTitle: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 8,
  },
  tagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 16,
  },
  matchTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(62,207,142,0.1)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    gap: 4,
  },
  matchText: {
    color: '#3ecf8e',
    fontSize: 11,
    fontWeight: '600',
  },
  tagText: {
    color: '#8a8a9a',
    fontSize: 12,
  },
  tagDot: {
    color: '#55555f',
    fontSize: 12,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  salary: {
    color: '#3ecf8e',
    fontSize: 14,
    fontWeight: '600',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconBtn: {
    padding: 4,
  },
  applyBtnSmall: {
    backgroundColor: 'rgba(124,110,247,0.15)',
    borderWidth: 1,
    borderColor: '#7c6ef7',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  applyBtnSmallText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '600',
  },
  expandedContent: {
    marginTop: 0,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'rgba(255,255,255,0.08)',
    marginBottom: 16,
  },
  salaryExpanded: {
    color: '#3ecf8e',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 8,
  },
  matchList: {
    gap: 8,
    marginBottom: 16,
  },
  matchListItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  checkIcon: {
    marginTop: 2,
  },
  matchListText: {
    color: '#d1d1d6',
    fontSize: 13,
    lineHeight: 18,
    flex: 1,
  },
  aboutText: {
    color: '#8a8a9a',
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 16,
  },
  skillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  skillPill: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  skillText: {
    color: '#a1a1aa',
    fontSize: 12,
  },
  recruiterSignal: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(212,168,71,0.1)',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  recruiterText: {
    color: '#d4a847',
    fontSize: 12,
    fontWeight: '500',
  },
  expandedActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  iconActionRow: {
    flexDirection: 'row',
    gap: 8,
  },
  iconBtnLarge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.05)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyBtnFull: {
    flex: 1,
    backgroundColor: '#7c6ef7',
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyBtnFullText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  collapseChevronWrap: {
    alignItems: 'center',
    marginTop: 4,
  },
});
