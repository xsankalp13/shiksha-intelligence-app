import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, TextInput, ScrollView, Animated } from 'react-native';

interface CoachPreferencesSheetProps {
  visible: boolean;
  onClose: () => void;
  safeBottomInset: number;
}

const STYLES = ['Direct & blunt', 'Encouraging & supportive', 'Socratic (asks questions back)'];
const FOCUS_AREAS = ['DSA', 'System Design', 'Behavioural', 'Resume', 'Salary Negotiation', 'Job Search Strategy'];
const NOTIF_CADENCE = ['Daily insight', 'Weekly summary', 'Only when urgent'];
const LANGUAGES = ['English', 'Hindi', 'Hinglish'];

export default function CoachPreferencesSheet({ visible, onClose, safeBottomInset }: CoachPreferencesSheetProps) {
  const [name, setName] = useState('Arya');
  const [style, setStyle] = useState('Encouraging & supportive');
  const [focus, setFocus] = useState<string[]>(['System Design', 'Resume']);
  const [cadence, setCadence] = useState('Daily insight');
  const [language, setLanguage] = useState('Hinglish');

  const [slideAnim] = useState(new Animated.Value(800));

  React.useEffect(() => {
    if (visible) {
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        bounciness: 0,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 800,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const toggleFocus = (item: string) => {
    if (focus.includes(item)) {
      setFocus(focus.filter(i => i !== item));
    } else {
      setFocus([...focus, item]);
    }
  };

  return (
    <Modal visible={visible} transparent animationType="none" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose} />
        <Animated.View style={[styles.sheet, { transform: [{ translateY: slideAnim }], paddingBottom: Math.max(safeBottomInset, 20) }]}>
          <View style={styles.dragHandle} />
          
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
            <Text style={styles.sheetTitle}>Coach Preferences</Text>

            <View style={styles.section}>
              <Text style={styles.sectionLabel}>COACH NAME</Text>
              <TextInput
                style={styles.textInput}
                value={name}
                onChangeText={setName}
                placeholderTextColor="#8a8a9a"
              />
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionLabel}>COACHING STYLE</Text>
              <View style={styles.radioGroup}>
                {STYLES.map(s => (
                  <TouchableOpacity key={s} style={styles.radioRow} onPress={() => setStyle(s)}>
                    <View style={[styles.radioOuter, style === s && styles.radioOuterActive]}>
                      {style === s && <View style={styles.radioInner} />}
                    </View>
                    <Text style={styles.radioLabel}>{s}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionLabel}>FOCUS AREAS</Text>
              <View style={styles.chipGroup}>
                {FOCUS_AREAS.map(f => {
                  const isActive = focus.includes(f);
                  return (
                    <TouchableOpacity 
                      key={f} 
                      style={[styles.chip, isActive && styles.chipActive]} 
                      onPress={() => toggleFocus(f)}
                    >
                      <Text style={[styles.chipText, isActive && styles.chipTextActive]}>{f}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionLabel}>NOTIFICATION CADENCE</Text>
              <View style={styles.radioGroup}>
                {NOTIF_CADENCE.map(c => (
                  <TouchableOpacity key={c} style={styles.radioRow} onPress={() => setCadence(c)}>
                    <View style={[styles.radioOuter, cadence === c && styles.radioOuterActive]}>
                      {cadence === c && <View style={styles.radioInner} />}
                    </View>
                    <Text style={styles.radioLabel}>{c}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionLabel}>LANGUAGE</Text>
              <View style={styles.radioGroup}>
                {LANGUAGES.map(l => (
                  <TouchableOpacity key={l} style={styles.radioRow} onPress={() => setLanguage(l)}>
                    <View style={[styles.radioOuter, language === l && styles.radioOuterActive]}>
                      {language === l && <View style={styles.radioInner} />}
                    </View>
                    <Text style={styles.radioLabel}>{l}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <TouchableOpacity style={styles.saveBtn} onPress={onClose}>
              <Text style={styles.saveBtnText}>Save preferences</Text>
            </TouchableOpacity>
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  sheet: {
    backgroundColor: '#161618',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '90%',
  },
  dragHandle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 20,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#8a8a9a',
    letterSpacing: 1,
    marginBottom: 12,
  },
  textInput: {
    backgroundColor: '#1c1c1f',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    borderRadius: 12,
    color: '#ffffff',
    fontSize: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  radioGroup: {
    gap: 16,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#8a8a9a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterActive: {
    borderColor: '#7c6ef7',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#7c6ef7',
  },
  radioLabel: {
    color: '#ffffff',
    fontSize: 14,
  },
  chipGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  chipActive: {
    backgroundColor: 'rgba(124,110,247,0.2)',
    borderColor: '#7c6ef7',
  },
  chipText: {
    color: '#8a8a9a',
    fontSize: 13,
  },
  chipTextActive: {
    color: '#7c6ef7',
  },
  saveBtn: {
    backgroundColor: '#7c6ef7',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  saveBtnText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
});
