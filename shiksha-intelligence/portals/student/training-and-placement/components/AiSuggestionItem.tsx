import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

interface AiSuggestionItemProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  onPress?: () => void;
}

export default function AiSuggestionItem({
  title,
  subtitle,
  icon,
  onPress,
}: AiSuggestionItemProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.aiItem} onPress={onPress}>
      <View style={styles.aiItemIcon}>{icon}</View>
      <View style={styles.aiItemBody}>
        <Text style={styles.aiItemTitle}>{title}</Text>
        <Text style={styles.aiItemSub}>{subtitle}</Text>
      </View>
      <ChevronRight size={18} color="#55555f" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  aiItem: {
    backgroundColor: '#161618',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.07)',
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  aiItemIcon: {
    marginTop: 2,
  },
  aiItemBody: {
    flex: 1,
  },
  aiItemTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#f0f0f2',
    marginBottom: 4,
  },
  aiItemSub: {
    fontSize: 12,
    color: '#8a8a9a',
    lineHeight: 18,
  },
});
