import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Edit2 } from 'lucide-react-native';

const InfoRow = ({ label, value, isMulti = false, isEmpty = false, isPreview = false }: { label: string, value: any, isMulti?: boolean, isEmpty?: boolean, isPreview?: boolean }) => {
  if (isPreview && isEmpty) return null;

  return (
    <View style={styles.row}>
      <View style={styles.rowHeader}>
        <Text style={styles.label}>{label}</Text>
        {!isPreview && (
          <TouchableOpacity activeOpacity={0.7} style={styles.editIcon}>
            <Edit2 size={12} color="#8a8a9a" />
          </TouchableOpacity>
        )}
      </View>
      {isEmpty ? (
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.addText}>Add →</Text>
        </TouchableOpacity>
      ) : isMulti && Array.isArray(value) ? (
        <View style={styles.pillsContainer}>
          {value.map((v, i) => (
            <View key={i} style={styles.pill}>
              <Text style={styles.pillText}>{v}</Text>
            </View>
          ))}
        </View>
      ) : (
        <Text style={styles.value}>{value}</Text>
      )}
    </View>
  );
};

export default function BasicInfoSection({ isPreview = false }: { isPreview?: boolean }) {
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Basic Info</Text>
        {!isPreview && (
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.editAllText}>Edit all →</Text>
          </TouchableOpacity>
        )}
      </View>
      
      <View style={styles.card}>
        <InfoRow label="Full name" value="Jane Doe" isPreview={isPreview} />
        <View style={styles.divider} />
        <InfoRow label="Email" value="jane.doe@example.com" isPreview={isPreview} />
        <View style={styles.divider} />
        <InfoRow label="Phone" value="+91 9876543210" isPreview={isPreview} />
        {(!isPreview || false) && <View style={styles.divider} />}
        <InfoRow label="Date of birth" value="" isEmpty isPreview={isPreview} />
        <View style={styles.divider} />
        <InfoRow label="Gender" value="Female" isPreview={isPreview} />
        <View style={styles.divider} />
        <InfoRow label="Nationality" value="Indian" isPreview={isPreview} />
        <View style={styles.divider} />
        <InfoRow label="Current city" value="Pune, Maharashtra" isPreview={isPreview} />
        <View style={styles.divider} />
        <InfoRow label="Preferred work locations" value={['Pune', 'Bangalore', 'Remote']} isMulti isPreview={isPreview} />
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
  editAllText: {
    fontSize: 12,
    color: '#7c6ef7',
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#161618',
    borderRadius: 16,
    padding: 16,
  },
  row: {
    paddingVertical: 12,
  },
  rowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  label: {
    fontSize: 11,
    color: '#8a8a9a',
  },
  editIcon: {
    padding: 2,
  },
  value: {
    fontSize: 13,
    color: '#e1e1e1',
    fontWeight: '500',
  },
  addText: {
    fontSize: 13,
    color: '#7c6ef7',
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  pillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 4,
  },
  pill: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  pillText: {
    fontSize: 12,
    color: '#e1e1e1',
  },
});
