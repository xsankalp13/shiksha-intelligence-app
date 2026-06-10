import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface JobCardProps {
  company: string;
  title: string;
  matchPercentage: number;
  type: string;
  salary: string;
  logo: React.ReactNode;
  logoBgColor: string;
  onApply?: () => void;
  onPress?: () => void;
}

export default function JobCard({
  company,
  title,
  matchPercentage,
  type,
  salary,
  logo,
  logoBgColor,
  onApply,
  onPress,
}: JobCardProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.jobCard} onPress={onPress}>
      <View style={styles.jobTop}>
        <View style={[styles.jobLogo, { backgroundColor: logoBgColor }]}>
          {logo}
        </View>
        <View>
          <Text style={styles.jobCompany}>{company}</Text>
        </View>
      </View>
      <Text style={styles.jobTitle}>{title}</Text>
      <View style={styles.jobTags}>
        <Text style={styles.tagMatch}>{matchPercentage}% match</Text>
        <Text style={styles.tagType}>{type}</Text>
      </View>
      <View style={styles.matchRow}>
        <Text style={styles.matchScore}>{salary}</Text>
        <TouchableOpacity style={styles.applyBtn} onPress={onApply}>
          <Text style={styles.applyBtnText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  jobCard: {
    backgroundColor: '#161618',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.07)',
    borderRadius: 14,
    padding: 14,
    width: 190,
  },
  jobTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  jobLogo: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  jobCompany: {
    fontSize: 11,
    color: '#8a8a9a',
  },
  jobTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#f0f0f2',
    marginBottom: 6,
  },
  jobTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 12,
  },
  tagMatch: {
    fontSize: 10,
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 4,
    fontWeight: '600',
    backgroundColor: 'rgba(62,207,142,0.1)',
    color: '#3ecf8e',
    overflow: 'hidden',
  },
  tagType: {
    fontSize: 10,
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 4,
    fontWeight: '600',
    backgroundColor: 'rgba(255,255,255,0.05)',
    color: '#8a8a9a',
    overflow: 'hidden',
  },
  matchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  matchScore: {
    fontSize: 11,
    color: '#3ecf8e',
    fontWeight: '600',
  },
  applyBtn: {
    backgroundColor: 'rgba(124,110,247,0.13)',
    borderWidth: 1,
    borderColor: 'rgba(124,110,247,0.3)',
    borderRadius: 6,
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  applyBtnText: {
    fontSize: 11,
    color: '#7c6ef7',
    fontWeight: '600',
  },
});
