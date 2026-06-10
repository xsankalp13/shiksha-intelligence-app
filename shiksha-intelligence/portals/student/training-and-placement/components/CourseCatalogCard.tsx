import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Terminal, Layers, PlayCircle, Code, Star, FileText } from 'lucide-react-native';

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

interface CourseCatalogCardProps {
  title: string;
  instructor: string;
  moduleCount: number;
  totalDuration: string;
  difficulty: Difficulty;
  progress?: number;
  isNew?: boolean;
  isCompleted?: boolean;
  iconType: 'terminal' | 'layers' | 'play' | 'code' | 'star' | 'document';
  onPress: () => void;
}

export default function CourseCatalogCard({
  title, instructor, moduleCount, totalDuration, difficulty, progress, isNew, isCompleted, iconType, onPress
}: CourseCatalogCardProps) {
  
  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'Beginner': return '#3ecf8e';
      case 'Intermediate': return '#d4a847';
      case 'Advanced': return '#f05c5c';
      default: return '#7c6ef7';
    }
  };

  const getIcon = () => {
    switch(iconType) {
      case 'terminal': return <Terminal size={20} color="#7c6ef7" />;
      case 'layers': return <Layers size={20} color="#4fa3f7" />;
      case 'play': return <PlayCircle size={20} color="#f05c5c" />;
      case 'code': return <Code size={20} color="#3ecf8e" />;
      case 'star': return <Star size={20} color="#d4a847" />;
      case 'document': return <FileText size={20} color="#a0a0ab" />;
      default: return <PlayCircle size={20} color="#7c6ef7" />;
    }
  };

  const diffColor = getDifficultyColor();

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.7} onPress={onPress}>
      <View style={styles.topRow}>
        <View style={styles.iconContainer}>
          {getIcon()}
        </View>
        <View style={styles.infoCol}>
          <View style={styles.titleRow}>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
            {isNew && (
              <View style={styles.newBadge}>
                <Text style={styles.newBadgeText}>NEW</Text>
              </View>
            )}
            {isCompleted && (
              <View style={styles.completedBadge}>
                <Text style={styles.completedBadgeText}>Done</Text>
              </View>
            )}
          </View>
          <Text style={styles.metaText}>{instructor} · {moduleCount} modules · {totalDuration}</Text>
        </View>
        <View style={[styles.diffBadge, { backgroundColor: `${diffColor}15` }]}>
          <Text style={[styles.diffText, { color: diffColor }]}>{difficulty}</Text>
        </View>
      </View>
      
      {progress !== undefined && !isCompleted && (
        <View style={styles.progressRow}>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
          <Text style={styles.progressText}>{progress}%</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(255,255,255,0.08)',
    paddingHorizontal: 16,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#1c1c1f',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.03)',
  },
  infoCol: {
    flex: 1,
    gap: 4,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    flexShrink: 1,
  },
  metaText: {
    color: '#8a8a9a',
    fontSize: 12,
  },
  newBadge: {
    backgroundColor: '#7c6ef7',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  newBadgeText: {
    color: '#ffffff',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  completedBadge: {
    backgroundColor: 'rgba(62,207,142,0.15)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(62,207,142,0.3)',
  },
  completedBadgeText: {
    color: '#3ecf8e',
    fontSize: 9,
    fontWeight: '600',
  },
  diffBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  diffText: {
    fontSize: 10,
    fontWeight: '600',
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 12,
    paddingLeft: 56, // Align with text (44 icon + 12 gap)
  },
  progressTrack: {
    flex: 1,
    height: 4,
    backgroundColor: '#1c1c1f',
    borderRadius: 2,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#7c6ef7',
    borderRadius: 2,
  },
  progressText: {
    color: '#7c6ef7',
    fontSize: 11,
    fontWeight: '600',
    width: 28,
    textAlign: 'right',
  },
});
