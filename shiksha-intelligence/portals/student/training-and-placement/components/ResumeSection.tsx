import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FileText, Sparkles, Trash2 } from 'lucide-react-native';

export default function ResumeSection({ isPreview = false }: { isPreview?: boolean }) {
  const resumes = [
    {
      id: 1,
      filename: 'JaneDoe_Backend_Resume.pdf',
      version: 'v3 · Updated 3 days ago',
      status: 'Active',
    },
    {
      id: 2,
      filename: 'JaneDoe_FullStack_Resume.pdf',
      version: 'v2 · Updated 2 weeks ago',
      status: 'Archived',
    }
  ];

  return (
    <View style={[styles.container, isPreview && resumes.length === 0 && { display: 'none' }]}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Resume</Text>
        {!isPreview && (
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.addText}>+ Add version</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.list}>
        {resumes.map((resume) => (
          <View key={resume.id} style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.docIconWrap}>
                <FileText size={20} color="#8a8a9a" />
              </View>
              <View style={styles.docInfo}>
                <Text style={styles.filename} numberOfLines={1}>{resume.filename}</Text>
                <Text style={styles.version}>{resume.version}</Text>
              </View>
              <View style={[
                styles.statusBadge, 
                resume.status === 'Active' ? styles.statusActive : styles.statusArchived
              ]}>
                <Text style={[
                  styles.statusText,
                  resume.status === 'Active' ? styles.statusTextActive : styles.statusTextArchived
                ]}>
                  {resume.status}
                </Text>
              </View>
            </View>

            {(!isPreview || resume.status === 'Active') && (
              <View style={styles.cardActions}>
                <View style={styles.actionsLeft}>
                  {isPreview ? (
                    <TouchableOpacity style={styles.actionBtn}>
                      <Text style={styles.actionBtnText}>Download</Text>
                    </TouchableOpacity>
                  ) : (
                    <>
                      <TouchableOpacity style={styles.actionBtn}>
                        <Text style={styles.actionBtnText}>Preview</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.actionBtn}>
                        <Text style={styles.actionBtnText}>Download</Text>
                      </TouchableOpacity>
                      {resume.status !== 'Active' && (
                        <TouchableOpacity style={styles.actionBtn}>
                          <Text style={styles.actionBtnViolet}>Set active</Text>
                        </TouchableOpacity>
                      )}
                    </>
                  )}
                </View>
                {!isPreview && (
                  <TouchableOpacity style={styles.trashBtn}>
                    <Trash2 size={14} color="#8a8a9a" />
                  </TouchableOpacity>
                )}
              </View>
            )}
          </View>
        ))}

        {!isPreview && (
          <View style={styles.aiCard}>
          <View style={styles.aiCardLeft}>
            <View style={styles.aiIconWrap}>
              <Sparkles size={16} color="#d4a847" />
            </View>
            <View>
              <Text style={styles.aiTitle}>Generate AI Resume</Text>
              <Text style={styles.aiSub}>Tailored to your top job matches</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.7} style={styles.generateBtn}>
            <Text style={styles.generateBtnText}>Generate →</Text>
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
    gap: 10,
  },
  card: {
    backgroundColor: '#161618',
    borderRadius: 16,
    padding: 16,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  docIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  docInfo: {
    flex: 1,
  },
  filename: {
    fontSize: 14,
    fontWeight: '500',
    color: '#e1e1e1',
    marginBottom: 2,
  },
  version: {
    fontSize: 12,
    color: '#8a8a9a',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusActive: {
    backgroundColor: 'rgba(62,207,142,0.1)',
  },
  statusArchived: {
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  statusText: {
    fontSize: 11,
    fontWeight: '500',
  },
  statusTextActive: {
    color: '#3ecf8e',
  },
  statusTextArchived: {
    color: '#8a8a9a',
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.06)',
    paddingTop: 12,
  },
  actionsLeft: {
    flexDirection: 'row',
    gap: 16,
  },
  actionBtn: {
  },
  actionBtnText: {
    fontSize: 12,
    color: '#8a8a9a',
  },
  actionBtnViolet: {
    fontSize: 12,
    color: '#7c6ef7',
    fontWeight: '500',
  },
  trashBtn: {
    padding: 4,
  },
  aiCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(212,168,71,0.05)',
    borderWidth: 1,
    borderColor: '#d4a847',
    borderRadius: 16,
    padding: 16,
  },
  aiCardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  aiIconWrap: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(212,168,71,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aiTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#d4a847',
    marginBottom: 2,
  },
  aiSub: {
    fontSize: 11,
    color: 'rgba(212,168,71,0.8)',
  },
  generateBtn: {
    paddingVertical: 6,
    paddingLeft: 12,
  },
  generateBtnText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#d4a847',
  },
});
