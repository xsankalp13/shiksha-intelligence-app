import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Edit2, Trash2, GraduationCap } from 'lucide-react-native';

export default function EducationSection({ isPreview = false }: { isPreview?: boolean }) {
  const educations = [
    {
      id: 1,
      institution: 'College of Engineering, Pune',
      degree: 'B.Tech',
      branch: 'Computer Engineering',
      dateRange: '2020 - 2024',
      cgpa: '8.4',
      coursework: ['Data Structures', 'OS', 'DBMS', 'Networks'],
    },
    {
      id: 2,
      institution: 'Delhi Public School',
      degree: 'Higher Secondary',
      branch: 'Science (PCM)',
      dateRange: '2018 - 2020',
      cgpa: '92%',
      coursework: [],
    }
  ];

  return (
    <View style={[styles.container, isPreview && educations.length === 0 && { display: 'none' }]}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Education</Text>
        {!isPreview && (
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.addText}>+ Add</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.list}>
        {educations.map((edu) => (
          <View key={edu.id} style={styles.card}>
            <View style={styles.cardTop}>
              <View style={styles.logoContainer}>
                <GraduationCap size={16} color="#e1e1e1" />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.institutionName}>{edu.institution}</Text>
                <Text style={styles.degreeText}>{edu.degree} in {edu.branch}</Text>
                <View style={styles.dateRow}>
                  <Text style={styles.dateText}>{edu.dateRange}</Text>
                  {edu.cgpa && (
                    <View style={styles.cgpaBadge}>
                      <Text style={styles.cgpaText}>CGPA {edu.cgpa}</Text>
                    </View>
                  )}
                </View>
              </View>
            </View>

            {edu.coursework.length > 0 && (
              <View style={styles.tagsRow}>
                {edu.coursework.map((course, idx) => (
                  <View key={idx} style={styles.tag}>
                    <Text style={styles.tagText}>{course}</Text>
                  </View>
                ))}
              </View>
            )}

            {!isPreview && (
              <View style={styles.actionRow}>
                <TouchableOpacity style={styles.iconBtn}>
                  <Edit2 size={12} color="#8a8a9a" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBtn}>
                  <Trash2 size={12} color="#8a8a9a" />
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
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
  list: {
    gap: 12,
  },
  card: {
    backgroundColor: '#161618',
    borderRadius: 16,
    padding: 16,
    position: 'relative',
  },
  cardTop: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  logoContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardInfo: {
    flex: 1,
  },
  institutionName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#e1e1e1',
    marginBottom: 2,
  },
  degreeText: {
    fontSize: 13,
    color: '#8a8a9a',
    marginBottom: 4,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dateText: {
    fontSize: 12,
    color: '#8a8a9a',
  },
  cgpaBadge: {
    backgroundColor: 'rgba(62,207,142,0.1)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  cgpaText: {
    fontSize: 10,
    color: '#3ecf8e',
    fontWeight: '500',
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 10,
  },
  tag: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 11,
    color: '#8a8a9a',
  },
  actionRow: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    flexDirection: 'row',
    gap: 12,
  },
  iconBtn: {
    padding: 4,
  },
});
