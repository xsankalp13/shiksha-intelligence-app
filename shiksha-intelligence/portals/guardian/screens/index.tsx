import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {
  GraduationCap,
  Megaphone,
  Calendar,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Bell,
  ChevronDown,
} from 'lucide-react-native';
import OverviewCard from '../components/OverviewCard';

const { width } = Dimensions.get('window');

interface StudentData {
  id: string;
  name: string;
  grade: string;
  attendance: string;
  homework: string;
  fees: string;
  exams: string;
}

interface DashboardScreenProps {
  selectedStudent: StudentData;
  onAvatarPress: () => void;
  onAttendancePress: () => void;
  onExamsPress?: () => void;
  onSelectorPress: () => void;
  parentLastName: string;
  parentAvatarUrl: string;
  safeTopInset: number;
  safeBottomInset: number;
}

export default function DashboardScreen({
  selectedStudent,
  onAvatarPress,
  onAttendancePress,
  onExamsPress,
  onSelectorPress,
  parentLastName,
  parentAvatarUrl,
  safeTopInset,
  safeBottomInset,
}: DashboardScreenProps) {
  return (
    <View style={styles.viewWrapper}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: Math.max(safeTopInset, 12) }]}>
        <View style={styles.headerContent}>
          {/* Parent Avatar */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.avatarContainer, { zIndex: 10 }]}
            onPress={onAvatarPress}
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          >
            <Image source={{ uri: parentAvatarUrl }} style={styles.avatarImage} />
          </TouchableOpacity>

          {/* Student Selector Dropdown Button */}
          <View style={styles.dropdownWrapper}>
            <TouchableOpacity
              style={styles.dropdownSelector}
              onPress={onSelectorPress}
              activeOpacity={0.8}
            >
              <Text style={styles.dropdownLabel}>Student</Text>
              <View style={styles.dropdownValueRow}>
                <Text style={styles.dropdownValueText} numberOfLines={1}>
                  {selectedStudent.name}
                </Text>
                <ChevronDown size={16} color="#64748B" style={styles.dropdownIcon} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Notification Bell */}
          <TouchableOpacity 
            activeOpacity={0.7} 
            style={[styles.bellButton, { zIndex: 10 }]}
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          >
            <View style={styles.bellWrapper}>
              <Bell size={24} color="#0F172A" strokeWidth={2} />
              <View style={styles.bellBadge} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable Dashboard Body */}
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: safeBottomInset + 90 }, // Space for tab bar
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Student Info Badge & Welcome Banner */}
        <View style={styles.heroSection}>
          <View style={styles.studentBadge}>
            <GraduationCap size={16} color="#0D9488" style={styles.badgeIcon} />
            <Text style={styles.studentBadgeText}>
              {selectedStudent.name} • {selectedStudent.grade}
            </Text>
          </View>

          <Text style={styles.greetingTitle}>Good Morning,</Text>
          <Text style={styles.greetingName}>Mr. {parentLastName}</Text>
        </View>

        {/* TODAY'S OVERVIEW SECTION */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>TODAY'S OVERVIEW</Text>

          <View style={styles.overviewGrid}>
            {/* Card 1: Attendance -> Navigates to Attendance detail screen */}
            <OverviewCard
              icon={<CheckCircle2 size={20} color="#10B981" />}
              label="Attendance"
              value={selectedStudent.attendance}
              onPress={onAttendancePress}
            />

            {/* Card 2: Homework */}
            <OverviewCard
              icon={<BookOpen size={20} color="#4F46E5" />}
              label="Homework"
              value={selectedStudent.homework}
              normalBgColor="#EEF2FF"
            />

            {/* Card 3: Fees Due */}
            {selectedStudent.fees !== '$0' ? (
              <OverviewCard
                icon={<AlertCircle size={20} color="#EF4444" />}
                label="Fees Due"
                value={selectedStudent.fees}
                isAlert={true}
              />
            ) : (
              <OverviewCard
                icon={<CheckCircle2 size={20} color="#10B981" />}
                label="Fees Due"
                value="Paid"
              />
            )}

            {/* Card 4: Upcoming Exams */}
            <OverviewCard
              icon={<Calendar size={20} color="#1E293B" />}
              label="Upcoming Exams"
              value={selectedStudent.exams}
              normalBgColor="#F1F5F9"
              onPress={onExamsPress}
            />
          </View>
        </View>

        {/* SCHOOL UPDATES SECTION */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>SCHOOL UPDATES</Text>

          {/* Announcement item */}
          <View style={styles.updateItemRow}>
            <View style={[styles.updateIconContainer, { backgroundColor: '#E0E7FF' }]}>
              <Megaphone size={20} color="#4F46E5" />
            </View>
            <View style={styles.updateTextContainer}>
              <Text style={styles.updateTitle}>Announcements</Text>
              <Text style={styles.updateDesc}>
                Annual Sports Meet scheduled for next Friday. Please ensure uniforms are ready.
              </Text>
            </View>
          </View>

          {/* Event item */}
          <View style={styles.updateItemRow}>
            <View style={[styles.updateIconContainer, { backgroundColor: '#FEF3C7' }]}>
              <Calendar size={20} color="#D97706" />
            </View>
            <View style={styles.updateTextContainer}>
              <Text style={styles.updateTitle}>Upcoming Events</Text>
              <Text style={styles.updateDesc}>
                Parent-Teacher Meeting - Oct 25th in the main auditorium.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewWrapper: {
    flex: 1,
  },
  header: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#E2E8F0',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  dropdownWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  dropdownSelector: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdownLabel: {
    fontFamily: 'Inter_500Medium',
    fontSize: 11,
    color: '#94A3B8',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  dropdownValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  dropdownValueText: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 18,
    color: '#0F172A',
    maxWidth: width * 0.45,
  },
  dropdownIcon: {
    marginLeft: 4,
    marginTop: 2,
  },
  bellButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#F8FAFC',
  },
  bellWrapper: {
    position: 'relative',
  },
  bellBadge: {
    position: 'absolute',
    top: 1,
    right: 2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  heroSection: {
    marginBottom: 28,
  },
  studentBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 100,
    alignSelf: 'flex-start',
    marginBottom: 14,
    borderWidth: 0.5,
    borderColor: '#A7F3D0',
  },
  badgeIcon: {
    marginRight: 6,
  },
  studentBadgeText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    color: '#065F46',
  },
  greetingTitle: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 32,
    color: '#0F172A',
    lineHeight: 38,
  },
  greetingName: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 32,
    color: '#475569',
    lineHeight: 38,
    marginTop: 2,
  },
  sectionContainer: {
    marginBottom: 30,
  },
  sectionHeader: {
    fontFamily: 'Inter_700Bold',
    fontSize: 12,
    color: '#64748B',
    letterSpacing: 1.2,
    marginBottom: 16,
  },
  overviewGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  updateItemRow: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    marginBottom: 12,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.02,
    shadowRadius: 10,
    elevation: 2,
  },
  updateIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  updateTextContainer: {
    flex: 1,
  },
  updateTitle: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 15,
    color: '#0F172A',
  },
  updateDesc: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#64748B',
    marginTop: 4,
    lineHeight: 18,
  },
});
