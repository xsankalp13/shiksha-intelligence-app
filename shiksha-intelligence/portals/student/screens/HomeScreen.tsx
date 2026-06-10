import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import {
  ArrowLeftRight,
  Bell,
  Calendar,
  GraduationCap,
  ClipboardList,
  Wallet,
  AlertTriangle,
  HelpCircle,
  ChevronRight,
} from 'lucide-react-native';
import StudentOverviewCard from '../components/StudentOverviewCard';
import TimetableItem from '../components/TimetableItem';
import DeadlineItem from '../components/DeadlineItem';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface HomeScreenProps {
  studentName?: string;
  grade?: string;
  rollNo?: string;
  safeTopInset: number;
  safeBottomInset: number;
  onPlacementPress?: () => void;
  onBellPress?: () => void;
  onDeadlineViewAllPress?: () => void;
  onClassPress?: (classId: string) => void;
  onTimetablePress?: () => void;
}

export default function HomeScreen({
  studentName = 'Rahul',
  grade = 'Grade 10-A',
  rollNo = 'Roll No. 14',
  safeTopInset,
  safeBottomInset,
  onPlacementPress,
  onBellPress,
  onDeadlineViewAllPress,
  onClassPress,
  onTimetablePress,
}: HomeScreenProps) {
  const { width } = useWindowDimensions();
  
  // Decide responsive layout sizes based on screen width (tablet vs phone)
  const isTablet = width > 768;
  const contentWidth = isTablet ? Math.min(width * 0.85, 960) : '100%';

  // Fallback high quality avatar URL of Rahul
  const studentAvatarUrl = 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

  return (
    <View style={styles.container}>
      {/* Sticky Header */}
      <View style={[styles.header, { paddingTop: Math.max(safeTopInset, 12) }]}>
        <View style={[styles.headerContent, isTablet && { alignSelf: 'center', width: contentWidth }]}>
          {/* Left: Student Profile Avatar */}
          <Image source={{ uri: studentAvatarUrl }} style={styles.avatarImage} />
          
          {/* Middle: Placement & Trainings Pill Button */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.placementButton}
            onPress={onPlacementPress}
          >
            <ArrowLeftRight size={14} color="#64748B" style={styles.placementIcon} />
            <Text style={styles.placementButtonText}>Placement & Trainings</Text>
          </TouchableOpacity>
          
          {/* Right: Bell Icon */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.bellButton}
            onPress={onBellPress}
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          >
            <Bell size={22} color="#475569" strokeWidth={2} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Body */}
      <ScrollView
        contentContainerStyle={[
          styles.scrollContainer,
          isTablet && { alignSelf: 'center', width: contentWidth },
          { paddingBottom: safeBottomInset + 100 }, // Avoid bottom bar overlap
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeGreeting}>Good Morning, {studentName}!</Text>
          <Text style={styles.welcomeSubtext}>
            {grade} <Text style={styles.bullet}>•</Text> {rollNo}
          </Text>
        </View>

        {/* 2x2 Stats/Overview Grid */}
        <View style={styles.gridContainer}>
          <StudentOverviewCard
            icon={<Calendar size={20} color="#0284C7" />}
            iconBgColor="#E0F2FE"
            label="Attendance"
            value="94%"
            badgeText="Good"
            badgeBgColor="#ECFDF5"
            badgeTextColor="#047857"
          />

          <StudentOverviewCard
            icon={<GraduationCap size={20} color="#4F46E5" />}
            iconBgColor="#EEF2FF"
            label="Current GPA"
            value="8.6"
            valueSuffix="/10.0"
          />

          <StudentOverviewCard
            icon={<ClipboardList size={20} color="#EF4444" />}
            iconBgColor="#FEE2E2"
            label="Assignments"
            value="3"
            valueSuffix=" Pending"
          />

          <StudentOverviewCard
            icon={<Wallet size={20} color="#D97706" />}
            iconBgColor="#FEF3C7"
            label="Fee Due"
            value="$0"
            badgeText="Paid"
            badgeBgColor="#ECFDF5"
            badgeTextColor="#047857"
          />
        </View>

        {/* Today's Timetable Section inside a single card */}
        <View style={styles.sectionCard}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onTimetablePress}
            style={styles.timetableHeaderContainer}
          >
            <Text style={styles.sectionTitle}>Today's Timetable</Text>
            <View style={styles.timetableChipsColumn}>
              <View style={styles.pillBadge}>
                <Text style={styles.pillBadgeText}>2 Classes Left</Text>
              </View>
              <View style={styles.viewAllClickable}>
                <Text style={styles.viewAllText}>View All</Text>
                <ChevronRight size={14} color="#0F766E" style={{ marginLeft: 2 }} />
              </View>
            </View>
          </TouchableOpacity>

          <TimetableItem
            time="10:30"
            period="AM"
            subject="Mathematics"
            details="Room 302 • Mr. David Harrison"
            hasLeftIndicator={true}
            cardBgColor="#EFF6FF"
            onPress={onTimetablePress}
          />

          <TimetableItem
            time="11:45"
            period="AM"
            subject="Quantum Physics"
            details="Lab 04 • Dr. Sarah Miller"
            onPress={onTimetablePress}
          />
        </View>

        {/* Upcoming Deadlines Section inside a single card */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Upcoming Deadlines</Text>
            <TouchableOpacity onPress={onDeadlineViewAllPress} activeOpacity={0.7}>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.deadlinesList}>
            {/* Math Project Row */}
            <View style={styles.deadlineRow}>
              <View style={[styles.deadlineIconBox, { backgroundColor: '#FEE2E2' }]}>
                <AlertTriangle size={20} color="#EF4444" />
              </View>
              <View style={styles.deadlineInfo}>
                <Text style={styles.deadlineTitle}>Math Project</Text>
                <Text style={styles.deadlineSub}>Algebraic Equations</Text>
              </View>
              <View style={styles.deadlineDue}>
                <Text style={styles.deadlineDueTextUrgent}>Tomorrow</Text>
                <Text style={styles.deadlineDueSub}>11:59 PM</Text>
              </View>
            </View>

            {/* Horizontal Divider */}
            <View style={styles.divider} />

            {/* Science Quiz Row */}
            <View style={styles.deadlineRow}>
              <View style={[styles.deadlineIconBox, { backgroundColor: '#EEF2FF' }]}>
                <HelpCircle size={20} color="#4F46E5" />
              </View>
              <View style={styles.deadlineInfo}>
                <Text style={styles.deadlineTitle}>Science Quiz</Text>
                <Text style={styles.deadlineSub}>Chapter 4 & 5</Text>
              </View>
              <View style={styles.deadlineDue}>
                <Text style={styles.deadlineDueTextNormal}>25 Oct</Text>
                <Text style={styles.deadlineDueSub}>In Class</Text>
              </View>
            </View>
          </View>
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
  avatarImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E2E8F0',
  },
  placementButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 100,
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: '#FFFFFF',
  },
  placementIcon: {
    marginRight: 6,
  },
  placementButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    color: '#475569',
  },
  bellButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    backgroundColor: '#F8FAFC',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  welcomeSection: {
    marginBottom: 20,
  },
  welcomeGreeting: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 20,
    color: '#0F172A',
  },
  welcomeSubtext: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },
  bullet: {
    color: '#CBD5E1',
    fontWeight: 'bold',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 20,
    marginBottom: 20,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.02,
    shadowRadius: 10,
    elevation: 2,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 20,
    color: '#0F172A',
  },
  pillBadge: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 100,
  },
  pillBadgeText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    color: '#1D4ED8',
  },
  viewAllText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    color: '#0F766E', // styled teal color to emphasize it is clickable
  },
  timetableHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  timetableChipsColumn: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 6,
  },
  viewAllClickable: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#F1F5F9', // light gray capsule background to clearly indicate clickability
    borderRadius: 8,
  },
  deadlinesList: {
    marginTop: 4,
  },
  deadlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deadlineIconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  deadlineInfo: {
    flex: 1,
  },
  deadlineTitle: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 15,
    color: '#0F172A',
  },
  deadlineSub: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#64748B',
    marginTop: 3,
  },
  deadlineDue: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginLeft: 8,
  },
  deadlineDueTextUrgent: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 14,
    color: '#EF4444',
  },
  deadlineDueTextNormal: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 14,
    color: '#0F172A',
  },
  deadlineDueSub: {
    fontFamily: 'Inter_400Regular',
    fontSize: 11,
    color: '#64748B',
    marginTop: 3,
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 14,
  },
});
