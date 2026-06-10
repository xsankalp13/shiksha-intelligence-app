import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ArrowLeft, Pencil } from 'lucide-react-native';

interface ProfileHeaderProps {
  title: string;
  onBackPress?: () => void;
  onEditPress?: () => void;
}

export default function ProfileHeader({
  title,
  onBackPress,
  onEditPress,
}: ProfileHeaderProps) {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onBackPress}
        hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        style={styles.headerButton}
      >
        <ArrowLeft size={24} color="#0F172A" strokeWidth={2} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onEditPress}
        hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        style={styles.headerButton}
      >
        <Pencil size={20} color="#0F172A" strokeWidth={2} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F8FAFC',
  },
  headerButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  title: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 20,
    color: '#0F172A',
    textAlign: 'center',
  },
});
