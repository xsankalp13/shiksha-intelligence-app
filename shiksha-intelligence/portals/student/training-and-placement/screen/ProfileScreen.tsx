import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import { Eye, Share, ArrowLeft } from 'lucide-react-native';

import ProfileHeroCard from '../components/ProfileHeroCard';
import AiProfileScoreCard from '../components/AiProfileScoreCard';
import ProfileQuickActions from '../components/ProfileQuickActions';
import BasicInfoSection from '../components/BasicInfoSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import SkillsSection from '../components/SkillsSection';
import ResumeSection from '../components/ResumeSection';
import CredentialsSection from '../components/CredentialsSection';
import PlacementStatsSection from '../components/PlacementStatsSection';
import InterviewHistorySection from '../components/InterviewHistorySection';
import ProfileSettingsSection from '../components/ProfileSettingsSection';
import BottomNav from '../components/BottomNav';

interface ProfileScreenProps {
  safeTopInset: number;
  safeBottomInset: number;
}

export default function ProfileScreen({ safeTopInset, safeBottomInset }: ProfileScreenProps) {
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const renderContent = (preview: boolean) => (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: preview ? safeBottomInset + 20 : safeBottomInset + 100 }}
    >
      <ProfileHeroCard isPreview={preview} />
      
      {!preview && <AiProfileScoreCard />}
      {!preview && <ProfileQuickActions />}
      
      <BasicInfoSection isPreview={preview} />
      <ExperienceSection isPreview={preview} />
      <EducationSection isPreview={preview} />
      <SkillsSection isPreview={preview} />
      <ResumeSection isPreview={preview} />
      <CredentialsSection isPreview={preview} />
      <PlacementStatsSection />
      <InterviewHistorySection isPreview={preview} />
      
      {!preview && <ProfileSettingsSection />}
      
      <View style={styles.spacer} />
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={[styles.header, { marginTop: Math.max(safeTopInset, 10) }]}>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity 
            activeOpacity={0.7} 
            style={styles.iconBtn}
            onPress={() => setIsPreviewMode(true)}
          >
            <Eye size={20} color="#7c6ef7" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.iconBtn}>
            <Share size={20} color="#e1e1e1" />
          </TouchableOpacity>
        </View>
      </View>

      {/* CONTENT */}
      {renderContent(false)}

      {/* BOTTOM NAV */}
      <BottomNav safeBottomInset={safeBottomInset} activeTab="profile" />

      {/* RECRUITER PREVIEW OVERLAY */}
      <Modal
        visible={isPreviewMode}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setIsPreviewMode(false)}
      >
        <View style={styles.previewContainer}>
          <SafeAreaView style={{ flex: 1 }}>
            {/* Watermark Strip */}
            <View style={styles.watermarkStrip}>
              <Text style={styles.watermarkText}>This is how recruiters see your profile</Text>
            </View>

            {/* Preview Header */}
            <View style={styles.previewHeader}>
              <TouchableOpacity 
                activeOpacity={0.7} 
                style={styles.previewHeaderLeft}
                onPress={() => setIsPreviewMode(false)}
              >
                <ArrowLeft size={18} color="#e1e1e1" />
                <Text style={styles.previewExitText}>Exit preview</Text>
              </TouchableOpacity>
              <Text style={styles.previewTitle}>Recruiter view</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.previewShareText}>Share →</Text>
              </TouchableOpacity>
            </View>

            {renderContent(true)}
          </SafeAreaView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e10',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#e1e1e1',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 16,
  },
  iconBtn: {
    padding: 4,
  },
  spacer: {
    height: 40,
  },
  previewContainer: {
    flex: 1,
    backgroundColor: '#0e0e10',
  },
  watermarkStrip: {
    backgroundColor: 'rgba(212,168,71,0.1)',
    paddingVertical: 6,
    alignItems: 'center',
  },
  watermarkText: {
    fontSize: 12,
    color: '#d4a847',
    fontWeight: '500',
  },
  previewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.06)',
    marginBottom: 16,
  },
  previewHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    width: 100, // Fixed width for center alignment
  },
  previewExitText: {
    fontSize: 14,
    color: '#e1e1e1',
  },
  previewTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#e1e1e1',
  },
  previewShareText: {
    fontSize: 14,
    color: '#7c6ef7',
    width: 100, // Fixed width for center alignment
    textAlign: 'right',
  },
});
