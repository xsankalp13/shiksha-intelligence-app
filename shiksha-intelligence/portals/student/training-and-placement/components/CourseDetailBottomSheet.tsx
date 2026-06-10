import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Platform } from 'react-native';
import { Layers, Star, CheckCircle, Lock, Unlock, X } from 'lucide-react-native';

interface CourseModule {
  id: string;
  title: string;
  duration: string;
  isLocked: boolean;
}

interface CourseDetailBottomSheetProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  instructor: string;
  rating: number;
  enrolledCount: number;
  description: string;
  learningPoints: string[];
  modules: CourseModule[];
  prerequisites: string[];
}

export default function CourseDetailBottomSheet({
  visible, onClose, title, instructor, rating, enrolledCount, description, learningPoints, modules, prerequisites
}: CourseDetailBottomSheetProps) {

  if (!visible) return null;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose} />

        <View style={styles.sheet}>
          <View style={styles.dragHandleWrap}>
            <View style={styles.dragHandle} />
          </View>

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

            {/* Header */}
            <View style={styles.header}>
              <View style={styles.iconContainer}>
                <Layers size={24} color="#7c6ef7" />
              </View>
              <View style={styles.headerTextCol}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.instructor}>{instructor}</Text>
                <View style={styles.statsRow}>
                  <Star size={12} color="#d4a847" fill="#d4a847" />
                  <Text style={styles.ratingText}>{rating}</Text>
                  <Text style={styles.enrolledText}>· {enrolledCount} enrolled</Text>
                </View>
              </View>
            </View>

            {/* Description */}
            <Text style={styles.sectionTitle}>About this course</Text>
            <Text style={styles.description}>{description}</Text>

            {/* What you'll learn */}
            <Text style={styles.sectionTitle}>What you'll learn</Text>
            <View style={styles.pointsList}>
              {learningPoints.map((point, idx) => (
                <View key={idx} style={styles.pointRow}>
                  <CheckCircle size={16} color="#7c6ef7" />
                  <Text style={styles.pointText}>{point}</Text>
                </View>
              ))}
            </View>

            {/* Modules */}
            <Text style={styles.sectionTitle}>Modules</Text>
            <View style={styles.modulesList}>
              {modules.map((mod, idx) => (
                <View key={mod.id} style={styles.moduleRow}>
                  <View style={styles.moduleIndex}>
                    <Text style={styles.moduleIndexText}>{idx + 1}</Text>
                  </View>
                  <View style={styles.moduleInfoCol}>
                    <Text style={[styles.moduleTitle, mod.isLocked && styles.moduleTitleLocked]}>{mod.title}</Text>
                    <Text style={styles.moduleDuration}>{mod.duration}</Text>
                  </View>
                  {mod.isLocked ? (
                    <Lock size={16} color="#55555f" />
                  ) : (
                    <Unlock size={16} color="#7c6ef7" />
                  )}
                </View>
              ))}
            </View>

            {/* Prerequisites */}
            <Text style={styles.sectionTitle}>Prerequisites</Text>
            <View style={styles.tagsRow}>
              {prerequisites.map((req, idx) => (
                <View key={idx} style={styles.tag}>
                  <Text style={styles.tagText}>{req}</Text>
                </View>
              ))}
            </View>

            <View style={styles.spacer} />
          </ScrollView>

          {/* Fixed Bottom Bar */}
          <View style={styles.bottomBar}>
            <TouchableOpacity style={styles.saveBtn}>
              <Text style={styles.saveBtnText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.enrollBtn}>
              <Text style={styles.enrollBtnText}>Enroll free</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  sheet: {
    backgroundColor: '#1c1c1f',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '75%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  dragHandleWrap: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  dragHandle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 14,
    backgroundColor: 'rgba(124,110,247,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextCol: {
    flex: 1,
    justifyContent: 'center',
    gap: 4,
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  instructor: {
    color: '#8a8a9a',
    fontSize: 14,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 2,
  },
  ratingText: {
    color: '#d4a847',
    fontSize: 13,
    fontWeight: '600',
  },
  enrolledText: {
    color: '#55555f',
    fontSize: 13,
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 24,
    marginBottom: 12,
  },
  description: {
    color: '#a0a0ab',
    fontSize: 13,
    lineHeight: 20,
  },
  pointsList: {
    gap: 10,
  },
  pointRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  pointText: {
    color: '#d4d4d8',
    fontSize: 13,
    flex: 1,
    lineHeight: 20,
  },
  modulesList: {
    gap: 12,
  },
  moduleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#161618',
    padding: 12,
    borderRadius: 10,
  },
  moduleIndex: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.05)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moduleIndexText: {
    color: '#8a8a9a',
    fontSize: 11,
    fontWeight: '600',
  },
  moduleInfoCol: {
    flex: 1,
    gap: 2,
  },
  moduleTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
  moduleTitleLocked: {
    color: '#8a8a9a',
  },
  moduleDuration: {
    color: '#55555f',
    fontSize: 12,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  tagText: {
    color: '#a0a0ab',
    fontSize: 12,
  },
  spacer: {
    height: 100,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1c1c1f',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.05)',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: Platform.OS === 'ios' ? 34 : 20,
    flexDirection: 'row',
    gap: 12,
  },
  saveBtn: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveBtnText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  enrollBtn: {
    flex: 1,
    backgroundColor: '#7c6ef7',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
  },
  enrollBtnText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
});
