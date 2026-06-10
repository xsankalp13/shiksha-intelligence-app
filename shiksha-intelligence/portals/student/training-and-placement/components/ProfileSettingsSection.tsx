import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

export default function ProfileSettingsSection() {
  const SettingRow = ({ label, isDestructive = false }: { label: string, isDestructive?: boolean }) => (
    <TouchableOpacity activeOpacity={0.7} style={styles.row}>
      <Text style={[styles.rowLabel, isDestructive && styles.rowLabelDestructive]}>{label}</Text>
      {!isDestructive && <ChevronRight size={16} color="#55555f" />}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Text style={styles.groupTitle}>Preferences</Text>
        <View style={styles.card}>
          <SettingRow label="Notification settings" />
          <View style={styles.divider} />
          <SettingRow label="Job alert preferences" />
          <View style={styles.divider} />
          <SettingRow label="Privacy settings" />
        </View>
      </View>

      <View style={styles.group}>
        <Text style={styles.groupTitle}>Account</Text>
        <View style={styles.card}>
          <SettingRow label="Linked accounts" />
          <View style={styles.divider} />
          <SettingRow label="Change password" />
          <View style={styles.divider} />
          <SettingRow label="Download my data" />
          <View style={styles.divider} />
          <SettingRow label="Delete account" isDestructive />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 40,
  },
  group: {
    marginBottom: 24,
  },
  groupTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#55555f',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#161618',
    borderRadius: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  rowLabel: {
    fontSize: 14,
    color: '#e1e1e1',
  },
  rowLabelDestructive: {
    color: '#f05c5c',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.06)',
    marginLeft: 16,
  },
});
