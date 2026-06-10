import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Camera } from 'lucide-react-native';

interface ProfileHeroProps {
  avatarUrl: string;
  name: string;
  studentId: string;
  onAvatarPress?: () => void;
}

export default function ProfileHero({
  avatarUrl,
  name,
  studentId,
  onAvatarPress,
}: ProfileHeroProps) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={onAvatarPress}
          style={styles.cameraButton}
        >
          <Camera size={16} color="#FFFFFF" strokeWidth={2.5} />
        </TouchableOpacity>
      </View>

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.studentId}>{studentId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: '#FFFFFF',
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 16,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 4,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#0F766E', // Dark teal camera background
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2.5,
    borderColor: '#FFFFFF',
  },
  name: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 24,
    color: '#0F172A',
    textAlign: 'center',
  },
  studentId: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
    letterSpacing: 0.5,
  },
});
