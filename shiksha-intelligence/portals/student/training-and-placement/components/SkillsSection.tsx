import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckCircle2, X } from 'lucide-react-native';

export default function SkillsSection({ isPreview = false }: { isPreview?: boolean }) {
  const [skills, setSkills] = useState([
    { id: 1, name: 'Node.js', verified: true, level: 'Advanced · Top 8%', category: 'Languages' },
    { id: 2, name: 'TypeScript', verified: true, level: 'Intermediate', category: 'Languages' },
    { id: 3, name: 'Go', verified: false, category: 'Languages' },
    { id: 4, name: 'React', verified: true, level: 'Advanced', category: 'Frameworks' },
    { id: 5, name: 'Express', verified: false, category: 'Frameworks' },
    { id: 6, name: 'Redis', verified: true, level: 'Intermediate', category: 'Tools' },
    { id: 7, name: 'Docker', verified: false, category: 'Tools' },
    { id: 8, name: 'PostgreSQL', verified: true, level: 'Advanced', category: 'Tools' },
    { id: 9, name: 'System Design', verified: false, category: 'Soft Skills' },
  ]);

  const [activeSkillId, setActiveSkillId] = useState<number | null>(null);

  // Group by category since count > 8
  const categories = ['Languages', 'Frameworks', 'Tools', 'Soft Skills'];

  const removeSkill = (id: number) => {
    setSkills(skills.filter(s => s.id !== id));
  };

  return (
    <View style={[styles.container, isPreview && skills.length === 0 && { display: 'none' }]}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Skills</Text>
        {!isPreview && (
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.addText}>+ Add skill</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.card}>
        {categories.map((cat) => {
          const catSkills = skills.filter(s => s.category === cat);
          if (catSkills.length === 0) return null;

          return (
            <View key={cat} style={styles.categoryBlock}>
              <Text style={styles.categoryLabel}>{cat}</Text>
              <View style={styles.cloud}>
                {catSkills.map((skill) => (
                  <TouchableOpacity 
                    key={skill.id} 
                    activeOpacity={0.8}
                    style={[
                      styles.pill,
                      skill.verified ? styles.pillVerified : styles.pillUnverified,
                    ]}
                    onPress={() => setActiveSkillId(activeSkillId === skill.id ? null : skill.id)}
                  >
                    {skill.verified && <CheckCircle2 size={12} color="#7c6ef7" style={styles.checkIcon} />}
                    <Text style={[
                      styles.pillText,
                      skill.verified ? styles.textVerified : styles.textUnverified
                    ]}>
                      {skill.name}
                    </Text>
                    {!isPreview && activeSkillId === skill.id && (
                      <TouchableOpacity 
                        style={styles.removeBtn} 
                        onPress={(e) => { e.stopPropagation(); removeSkill(skill.id); }}
                      >
                        <X size={12} color="#8a8a9a" />
                      </TouchableOpacity>
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          );
        })}

        {(!isPreview) && (
          <View style={styles.bottomLinkContainer}>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.assessmentLink}>Take a skill assessment to verify →</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#55555f',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  addText: {
    fontSize: 12,
    color: '#7c6ef7',
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#161618',
    borderRadius: 16,
    padding: 16,
    paddingBottom: 20,
  },
  categoryBlock: {
    marginBottom: 16,
  },
  categoryLabel: {
    fontSize: 11,
    color: '#55555f',
    marginBottom: 8,
  },
  cloud: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  pillVerified: {
    backgroundColor: 'rgba(124,110,247,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(124,110,247,0.2)',
  },
  pillUnverified: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  checkIcon: {
    marginRight: 6,
  },
  pillText: {
    fontSize: 12,
    fontWeight: '500',
  },
  textVerified: {
    color: '#e1e1e1',
  },
  textUnverified: {
    color: '#8a8a9a',
  },
  removeBtn: {
    marginLeft: 6,
    padding: 2,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 8,
  },
  bottomLinkContainer: {
    marginTop: 8,
  },
  assessmentLink: {
    fontSize: 12,
    color: '#7c6ef7',
  },
});
