import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FileUp, Sparkles, Eye, Link2 } from 'lucide-react-native';

export default function ProfileQuickActions() {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} style={styles.actionCard}>
        <FileUp size={18} color="#e1e1e1" />
        <Text style={styles.actionText}>Upload Resume</Text>
      </TouchableOpacity>
      
      <TouchableOpacity activeOpacity={0.7} style={styles.actionCard}>
        <View style={styles.iconWithBadge}>
          <Sparkles size={18} color="#e1e1e1" />
          <View style={styles.aiBadge}>
            <Text style={styles.aiBadgeText}>AI</Text>
          </View>
        </View>
        <Text style={styles.actionText}>Generate Resume</Text>
      </TouchableOpacity>
      
      <TouchableOpacity activeOpacity={0.7} style={styles.actionCard}>
        <Eye size={18} color="#e1e1e1" />
        <Text style={styles.actionText}>Preview Profile</Text>
      </TouchableOpacity>
      
      <TouchableOpacity activeOpacity={0.7} style={styles.actionCard}>
        <Link2 size={18} color="#e1e1e1" />
        <Text style={styles.actionText}>Copy Profile Link</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  actionCard: {
    width: '48%',
    backgroundColor: '#161618',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  actionText: {
    fontSize: 12,
    color: '#e1e1e1',
    fontWeight: '500',
    textAlign: 'center',
  },
  iconWithBadge: {
    position: 'relative',
  },
  aiBadge: {
    position: 'absolute',
    top: -6,
    right: -10,
    backgroundColor: '#d4a847',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
  aiBadgeText: {
    fontSize: 8,
    fontWeight: '700',
    color: '#161618',
  },
});
