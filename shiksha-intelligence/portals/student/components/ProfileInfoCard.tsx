import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Pencil } from 'lucide-react-native';

interface ProfileInfoCardProps {
  title: string;
  titleIcon?: React.ReactNode;
  onEditPress?: () => void;
  children: React.ReactNode;
}

export default function ProfileInfoCard({
  title,
  titleIcon,
  onEditPress,
  children,
}: ProfileInfoCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View style={styles.titleWrapper}>
          {titleIcon && <View style={styles.titleIconWrapper}>{titleIcon}</View>}
          <Text style={styles.title}>{title}</Text>
        </View>

        {onEditPress && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onEditPress}
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
            style={styles.editButton}
          >
            <Pencil size={16} color="#0D9488" strokeWidth={2.5} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    padding: 20,
    marginBottom: 16,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.015,
    shadowRadius: 8,
    elevation: 1.5,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  titleIconWrapper: {
    marginRight: 8,
  },
  title: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 17,
    color: '#334155',
  },
  editButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: '#F0FDFA', // Light teal background for edit button matching pixel design
  },
  content: {
    width: '100%',
  },
});
