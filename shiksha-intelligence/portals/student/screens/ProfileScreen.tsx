import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  Phone,
  Mail,
  MapPin,
  AlertCircle,
  GraduationCap,
  Calendar,
  Award,
  User,
  LogOut,
} from 'lucide-react-native';

import ProfileHeader from '../components/ProfileHeader';
import ProfileHero from '../components/ProfileHero';
import ProfileTabs from '../components/ProfileTabs';
import ProfileInfoCard from '../components/ProfileInfoCard';
import InfoRow from '../components/InfoRow';

interface ProfileScreenProps {
  studentName: string;
  studentId: string;
  safeTopInset: number;
  safeBottomInset: number;
  onLogout?: () => void;
  onBackPress?: () => void;
  onEditPress?: () => void;
}

export default function ProfileScreen({
  studentName,
  studentId,
  safeTopInset,
  safeBottomInset,
  onLogout,
  onBackPress,
  onEditPress,
}: ProfileScreenProps) {
  const [activeTab, setActiveTab] = useState<'personal' | 'academic'>('personal');

  // Hardcoded data matching the pixel perfect mockup
  const personalData = {
    avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    phone: '+91 98765 43210',
    email: 'rahul.sharma@email.com',
    father: 'Mr. Suresh Sharma',
    mother: 'Mrs. Sunita Sharma',
    address: '123, Green Valley Apartments, New Delhi, 110001',
    emergencyContact: {
      name: 'Mr. Suresh Sharma',
      relation: 'Father',
      phone: '+91 98765 43210',
    },
  };

  const academicData = {
    class: 'Grade 10-A',
    rollNo: '14',
    section: 'A',
    admissionDate: '12 April 2024',
    classTeacher: 'Mr. Davis',
    gpa: '8.6/10.0',
    attendance: '94%',
  };

  const handleEditSection = (sectionName: string) => {
    Alert.alert('Edit Information', `Editing for ${sectionName} will be available soon.`);
  };

  const handleAvatarPress = () => {
    Alert.alert('Update Photo', 'Upload/take new avatar photo feature coming soon.');
  };

  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={{ paddingTop: Math.max(safeTopInset, 12), backgroundColor: '#FFFFFF' }}>
        <ProfileHeader
          title="Student Profile"
          onBackPress={onBackPress}
          onEditPress={onEditPress || (() => handleEditSection('Overall Profile'))}
        />
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.scrollContainer,
          { paddingBottom: safeBottomInset + 100 }, // Prevent overlapping bottom tabs
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Hero Section */}
        <ProfileHero
          avatarUrl={personalData.avatarUrl}
          name={studentName}
          studentId={studentId}
          onAvatarPress={handleAvatarPress}
        />

        {/* Tab Selection */}
        <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Dynamic content based on Tab */}
        <View style={styles.contentContainer}>
          {activeTab === 'personal' ? (
            <>
              {/* Contact Information */}
              <ProfileInfoCard
                title="Contact Information"
                onEditPress={() => handleEditSection('Contact Information')}
              >
                <InfoRow
                  icon={<Phone size={20} color="#0F766E" />}
                  label="PHONE"
                  value={personalData.phone}
                />
                <View style={styles.spacer} />
                <InfoRow
                  icon={<Mail size={20} color="#0F766E" />}
                  label="EMAIL"
                  value={personalData.email}
                />
              </ProfileInfoCard>

              {/* Parent Details */}
              <ProfileInfoCard
                title="Parent Details"
                onEditPress={() => handleEditSection('Parent Details')}
              >
                <View style={styles.row}>
                  <View style={styles.col}>
                    <Text style={styles.label}>FATHER</Text>
                    <Text style={styles.value}>{personalData.father}</Text>
                  </View>
                  <View style={styles.col}>
                    <Text style={styles.label}>MOTHER</Text>
                    <Text style={styles.value}>{personalData.mother}</Text>
                  </View>
                </View>
              </ProfileInfoCard>

              {/* Address */}
              <ProfileInfoCard
                title="Address"
                onEditPress={() => handleEditSection('Address')}
              >
                <InfoRow
                  icon={<MapPin size={20} color="#0F766E" />}
                  value={personalData.address}
                />
              </ProfileInfoCard>

              {/* Emergency Contact */}
              <ProfileInfoCard
                title="Emergency Contact"
                titleIcon={<AlertCircle size={20} color="#EF4444" />}
                onEditPress={() => handleEditSection('Emergency Contact')}
              >
                <View style={styles.emergencyRow}>
                  <Text style={styles.emergencyLabel}>Name</Text>
                  <Text style={styles.emergencyValue}>{personalData.emergencyContact.name}</Text>
                </View>

                <View style={styles.emergencyRow}>
                  <Text style={styles.emergencyLabel}>Relation</Text>
                  <Text style={styles.emergencyValue}>{personalData.emergencyContact.relation}</Text>
                </View>

                {/* Highlighted Emergency Phone row */}
                <View style={styles.emergencyPhoneContainer}>
                  <Text style={styles.emergencyPhoneLabel}>Phone</Text>
                  <Text style={styles.emergencyPhoneValue}>{personalData.emergencyContact.phone}</Text>
                </View>
              </ProfileInfoCard>
            </>
          ) : (
            <>
              {/* Academic Enrollment Details */}
              <ProfileInfoCard
                title="Enrollment Details"
                onEditPress={() => handleEditSection('Enrollment Details')}
              >
                <InfoRow
                  icon={<User size={20} color="#0F766E" />}
                  label="ROLL NO"
                  value={academicData.rollNo}
                />
                <View style={styles.spacer} />
                <InfoRow
                  icon={<Calendar size={20} color="#0F766E" />}
                  label="ADMISSION DATE"
                  value={academicData.admissionDate}
                />
              </ProfileInfoCard>

              {/* Class & Teacher Details */}
              <ProfileInfoCard
                title="Class Details"
                onEditPress={() => handleEditSection('Class Details')}
              >
                <View style={styles.row}>
                  <View style={styles.col}>
                    <Text style={styles.label}>CLASS</Text>
                    <Text style={styles.value}>{academicData.class}</Text>
                  </View>
                  <View style={styles.col}>
                    <Text style={styles.label}>SECTION</Text>
                    <Text style={styles.value}>{academicData.section}</Text>
                  </View>
                </View>
                <View style={styles.spacer} />
                <InfoRow
                  icon={<GraduationCap size={20} color="#0F766E" />}
                  label="CLASS TEACHER"
                  value={academicData.classTeacher}
                />
              </ProfileInfoCard>

              {/* Stats / Performance Details */}
              <ProfileInfoCard
                title="Academic Performance"
                onEditPress={() => handleEditSection('Academic Performance')}
              >
                <InfoRow
                  icon={<Award size={20} color="#0F766E" />}
                  label="CURRENT GPA"
                  value={academicData.gpa}
                />
                <View style={styles.spacer} />
                <InfoRow
                  icon={<Calendar size={20} color="#0F766E" />}
                  label="ATTENDANCE RATE"
                  value={academicData.attendance}
                />
              </ProfileInfoCard>
            </>
          )}

          {/* Sign Out Button */}
          {onLogout && (
            <TouchableOpacity
              onPress={onLogout}
              style={styles.logoutBtn}
              activeOpacity={0.8}
            >
              <LogOut size={18} color="#EF4444" />
              <Text style={styles.logoutText}>Sign Out</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContainer: {
    backgroundColor: '#F8FAFC',
  },
  contentContainer: {
    padding: 16,
    paddingTop: 20,
  },
  spacer: {
    height: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  col: {
    flex: 1,
  },
  label: {
    fontFamily: 'Inter_500Medium',
    fontSize: 11,
    color: '#94A3B8',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  value: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 15,
    color: '#0F172A',
  },
  emergencyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  emergencyLabel: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#64748B',
  },
  emergencyValue: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 15,
    color: '#0F172A',
  },
  emergencyPhoneContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FEE2E2', // Light pink/red banner background
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 14,
  },
  emergencyPhoneLabel: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#B91C1C', // Dark red label
  },
  emergencyPhoneValue: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 15,
    color: '#B91C1C', // Dark red value
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#FEF2F2',
    borderRadius: 100,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderWidth: 1.5,
    borderColor: '#FECACA',
    marginTop: 16,
    marginBottom: 32,
    alignSelf: 'center',
    width: '60%',
    shadowColor: '#EF4444',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
  },
  logoutText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 15,
    color: '#EF4444',
  },
});
