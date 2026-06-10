import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Edit2, Trash2, Briefcase, ArrowUpRight } from 'lucide-react-native';

export default function ExperienceSection({ isPreview = false }: { isPreview?: boolean }) {
  const experiences = [
    {
      id: 1,
      company: 'Razorpay',
      role: 'Backend Engineering Intern',
      dateRange: 'Jan 2023 - Jun 2023',
      duration: '6 mo',
      description: 'Worked on the core payments infrastructure team. Reduced latency by 14% on the main transaction gateway.',
      tags: ['Node.js', 'Go', 'Redis'],
      needsImpact: false,
    },
    {
      id: 2,
      company: 'Tech Startup',
      role: 'Full Stack Developer',
      dateRange: 'May 2022 - Aug 2022',
      duration: '4 mo',
      description: 'Built the MVP of a social networking application for students. Integrated auth and feed logic.',
      tags: ['React', 'Firebase'],
      needsImpact: true,
    }
  ];

  return (
    <View style={[styles.container, isPreview && experiences.length === 0 && { display: 'none' }]}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {!isPreview && (
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.addText}>+ Add</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.list}>
        {experiences.map((exp) => (
          <View key={exp.id} style={styles.card}>
            <View style={styles.cardTop}>
              <View style={styles.logoContainer}>
                <Text style={styles.logoText}>{exp.company.charAt(0)}</Text>
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.companyName}>{exp.company}</Text>
                <Text style={styles.roleText}>{exp.role}</Text>
                <Text style={styles.dateText}>{exp.dateRange} <Text style={styles.durationText}>({exp.duration})</Text></Text>
              </View>
            </View>

            <Text style={styles.description} numberOfLines={2}>{exp.description}</Text>
            
            <View style={styles.tagsRow}>
              {exp.tags.map((tag, idx) => (
                <View key={idx} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>

            {!isPreview && exp.needsImpact && (
              <TouchableOpacity activeOpacity={0.7} style={styles.aiFlag}>
                <Text style={styles.aiFlagText}>Add impact metrics</Text>
                <ArrowUpRight size={12} color="#e8a030" />
              </TouchableOpacity>
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

        {/* Fresher state example if list is empty */}
        {!isPreview && experiences.length === 0 && (
          <View style={styles.emptyCard}>
            <View style={styles.emptyIconWrap}>
              <Briefcase size={24} color="#8a8a9a" />
            </View>
            <Text style={styles.emptyTitle}>No experience yet</Text>
            <Text style={styles.emptySub}>Add internship, project, or part-time work</Text>
            <TouchableOpacity style={styles.addBtn}>
              <Text style={styles.addBtnText}>+ Add experience</Text>
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
  logoText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#e1e1e1',
  },
  cardInfo: {
    flex: 1,
  },
  companyName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#e1e1e1',
    marginBottom: 2,
  },
  roleText: {
    fontSize: 13,
    color: '#8a8a9a',
    marginBottom: 2,
  },
  dateText: {
    fontSize: 12,
    color: '#8a8a9a',
  },
  durationText: {
    color: '#55555f',
  },
  description: {
    fontSize: 12,
    color: '#8a8a9a',
    lineHeight: 18,
    marginBottom: 12,
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
  aiFlag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(232,160,48,0.1)',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    gap: 4,
    marginTop: 4,
  },
  aiFlagText: {
    fontSize: 11,
    color: '#e8a030',
    fontWeight: '500',
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
  emptyCard: {
    backgroundColor: '#161618',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  emptyIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  emptyTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#e1e1e1',
    marginBottom: 4,
  },
  emptySub: {
    fontSize: 12,
    color: '#8a8a9a',
    marginBottom: 16,
  },
  addBtn: {
    backgroundColor: '#7c6ef7',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addBtnText: {
    fontSize: 13,
    color: '#fff',
    fontWeight: '500',
  },
});
