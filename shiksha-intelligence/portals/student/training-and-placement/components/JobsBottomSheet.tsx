import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { Check, X } from 'lucide-react-native';

interface JobsBottomSheetProps {
  visible: boolean;
  onClose: () => void;
  onApply: (filters: any) => void;
}

export default function JobsBottomSheet({ visible, onClose, onApply }: JobsBottomSheetProps) {
  const [activeSort, setActiveSort] = useState('Best Match');
  const [activeWorkTypes, setActiveWorkTypes] = useState<string[]>([]);
  const [activeExperience, setActiveExperience] = useState<string[]>([]);
  const [activeCompanySize, setActiveCompanySize] = useState<string[]>([]);
  // We'll mock the slider since react-native doesn't have a built-in one that fits this perfectly without external libs

  const sorts = ['Best Match', 'Most Recent', 'Salary High–Low', 'Closing Soon'];
  const workTypes = ['Remote', 'Hybrid', 'On-site'];
  const experiences = ['Fresher', '1–3 yrs', '3–5 yrs'];
  const companySizes = ['Startup', 'Mid-size', 'Enterprise'];

  const toggleArrayItem = (item: string, array: string[], setArray: (val: string[]) => void) => {
    if (array.includes(item)) {
      setArray(array.filter(i => i !== item));
    } else {
      setArray([...array, item]);
    }
  };

  const handleApply = () => {
    onApply({
      sort: activeSort,
      workTypes: activeWorkTypes,
      experience: activeExperience,
      companySize: activeCompanySize,
    });
    onClose();
  };

  const handleReset = () => {
    setActiveSort('Best Match');
    setActiveWorkTypes([]);
    setActiveExperience([]);
    setActiveCompanySize([]);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.overlayClickArea} onPress={onClose} activeOpacity={1} />
        
        <View style={styles.sheetContainer}>
          <View style={styles.dragHandleWrap}>
            <View style={styles.dragHandle} />
          </View>
          
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
            
            {/* Sort Section */}
            <Text style={styles.sectionHeader}>Sort by</Text>
            {sorts.map(sort => (
              <TouchableOpacity
                key={sort}
                style={styles.radioRow}
                onPress={() => setActiveSort(sort)}
                activeOpacity={0.7}
              >
                <View style={styles.radioOuter}>
                  {activeSort === sort && <View style={styles.radioInner} />}
                </View>
                <Text style={styles.radioLabel}>{sort}</Text>
              </TouchableOpacity>
            ))}

            <View style={styles.divider} />

            {/* Work Type Section */}
            <Text style={styles.sectionHeader}>Work type</Text>
            <View style={styles.chipsRow}>
              {workTypes.map(type => {
                const isActive = activeWorkTypes.includes(type);
                return (
                  <TouchableOpacity
                    key={type}
                    style={[styles.chip, isActive && styles.chipActive]}
                    onPress={() => toggleArrayItem(type, activeWorkTypes, setActiveWorkTypes)}
                  >
                    <Text style={[styles.chipLabel, isActive && styles.chipLabelActive]}>{type}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <View style={styles.divider} />

            {/* Experience Section */}
            <Text style={styles.sectionHeader}>Experience</Text>
            <View style={styles.chipsRow}>
              {experiences.map(exp => {
                const isActive = activeExperience.includes(exp);
                return (
                  <TouchableOpacity
                    key={exp}
                    style={[styles.chip, isActive && styles.chipActive]}
                    onPress={() => toggleArrayItem(exp, activeExperience, setActiveExperience)}
                  >
                    <Text style={[styles.chipLabel, isActive && styles.chipLabelActive]}>{exp}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <View style={styles.divider} />

            {/* Salary Section - Mock Slider */}
            <Text style={styles.sectionHeader}>Salary</Text>
            <View style={styles.sliderMockContainer}>
              <Text style={styles.salaryRangeText}>₹0 — ₹50L</Text>
              <View style={styles.sliderTrack}>
                <View style={styles.sliderFill} />
                <View style={styles.sliderHandleLeft} />
                <View style={styles.sliderHandleRight} />
              </View>
            </View>

            <View style={styles.divider} />

            {/* Company Size Section */}
            <Text style={styles.sectionHeader}>Company size</Text>
            <View style={styles.chipsRow}>
              {companySizes.map(size => {
                const isActive = activeCompanySize.includes(size);
                return (
                  <TouchableOpacity
                    key={size}
                    style={[styles.chip, isActive && styles.chipActive]}
                    onPress={() => toggleArrayItem(size, activeCompanySize, setActiveCompanySize)}
                  >
                    <Text style={[styles.chipLabel, isActive && styles.chipLabelActive]}>{size}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <View style={{ height: 40 }} />
          </ScrollView>

          {/* Action Footer */}
          <View style={styles.footer}>
            <TouchableOpacity style={styles.resetBtn} onPress={handleReset}>
              <Text style={styles.resetBtnText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.applyBtn} onPress={handleApply}>
              <Text style={styles.applyBtnText}>Apply filters</Text>
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
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },
  overlayClickArea: {
    flex: 1,
  },
  sheetContainer: {
    backgroundColor: '#161618',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '85%',
  },
  dragHandleWrap: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  dragHandle: {
    width: 40,
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 2,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  sectionHeader: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
    marginTop: 8,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#7c6ef7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#7c6ef7',
  },
  radioLabel: {
    color: '#d1d1d6',
    fontSize: 15,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginVertical: 16,
  },
  chipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'transparent',
  },
  chipActive: {
    backgroundColor: 'rgba(124,110,247,0.15)',
    borderColor: '#7c6ef7',
    borderWidth: 1,
  },
  chipLabel: {
    color: '#a1a1aa',
    fontSize: 13,
  },
  chipLabelActive: {
    color: '#7c6ef7',
    fontWeight: '500',
  },
  sliderMockContainer: {
    marginTop: 4,
  },
  salaryRangeText: {
    color: '#d1d1d6',
    fontSize: 14,
    marginBottom: 16,
    textAlign: 'right',
  },
  sliderTrack: {
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 2,
    marginHorizontal: 10,
    position: 'relative',
    justifyContent: 'center',
  },
  sliderFill: {
    position: 'absolute',
    left: '20%',
    right: '20%',
    height: '100%',
    backgroundColor: '#7c6ef7',
    borderRadius: 2,
  },
  sliderHandleLeft: {
    position: 'absolute',
    left: '20%',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#7c6ef7',
    marginLeft: -10,
  },
  sliderHandleRight: {
    position: 'absolute',
    right: '20%',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#7c6ef7',
    marginRight: -10,
  },
  footer: {
    flexDirection: 'row',
    padding: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(255,255,255,0.1)',
    gap: 12,
  },
  resetBtn: {
    flex: 1,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  resetBtnText: {
    color: '#a1a1aa',
    fontSize: 15,
    fontWeight: '600',
  },
  applyBtn: {
    flex: 2,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7c6ef7',
  },
  applyBtnText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
});
