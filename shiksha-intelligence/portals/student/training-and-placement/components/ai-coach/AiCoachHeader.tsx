import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Clock, SlidersHorizontal } from 'lucide-react-native';

interface AiCoachHeaderProps {
  safeTopInset: number;
  onHistoryPress?: () => void;
  onSettingsPress?: () => void;
}

export default function AiCoachHeader({ safeTopInset, onHistoryPress, onSettingsPress }: AiCoachHeaderProps) {
  // Pulsing animation for the active dot
  const pulseAnim = React.useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 0.4,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={[styles.container, { marginTop: Math.max(safeTopInset, 10) }]}>
      <View style={styles.leftContent}>
        <Text style={styles.title}>AI Coach</Text>
        <View style={styles.statusRow}>
          <Animated.View style={[styles.activeDot, { opacity: pulseAnim }]} />
          <Text style={styles.statusText}>Coach is active · Analyzing your profile</Text>
        </View>
      </View>
      <View style={styles.rightContent}>
        <TouchableOpacity style={styles.iconButton} onPress={onHistoryPress} activeOpacity={0.7}>
          <Clock size={20} color="#8a8a9a" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={onSettingsPress} activeOpacity={0.7}>
          <SlidersHorizontal size={20} color="#8a8a9a" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  leftContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: 4,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#d4a847',
  },
  statusText: {
    fontSize: 12,
    color: '#d4a847',
    opacity: 0.8,
  },
  rightContent: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.05)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
