import React, { useState } from 'react';
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
  TrendingUp,
  Calculator,
  BookOpen,
  FlaskConical,
  User,
  Download,
  Bell,
  Calendar,
  Award,
  LineChart,
  ChevronDown,
} from 'lucide-react-native';

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

interface AcademicsScreenProps {
  selectedStudent: StudentData;
  onAvatarPress: () => void;
  onSelectorPress: () => void;
  parentAvatarUrl: string;
  safeTopInset: number;
  safeBottomInset: number;
}

// Student-specific academic data to make the screen dynamic
const ACADEMIC_DATA_MAP: Record<
  string,
  {
    grade: string;
    overallPercentage: string;
    trend: string;
    subjects: {
      name: string;
      score: number;
      icon: any;
      iconColor: string;
      iconBg: string;
    }[];
    remarks: {
      text: string;
      teacher: string;
    };
    exams: {
      subject: string;
      date: string;
      time: string;
      status: string;
    }[];
    reportCards: {
      term: string;
      gpa: string;
      status: string;
    }[];
    performance: {
      label: string;
      value: string;
      desc: string;
    }[];
  }
> = {
  '1': {
    grade: 'A-',
    overallPercentage: '88% Overall Grade',
    trend: '+2.5% from last term',
    subjects: [
      {
        name: 'Mathematics',
        score: 92,
        icon: Calculator,
        iconColor: '#3B82F6',
        iconBg: '#EFF6FF',
      },
      {
        name: 'English',
        score: 85,
        icon: BookOpen,
        iconColor: '#3B82F6',
        iconBg: '#EFF6FF',
      },
      {
        name: 'Science',
        score: 89,
        icon: FlaskConical,
        iconColor: '#3B82F6',
        iconBg: '#EFF6FF',
      },
    ],
    remarks: {
      text: 'Arjun is showing great progress in Mathematics but needs more focus on English literature.',
      teacher: 'Mr. Sharma (Class Teacher)',
    },
    exams: [
      { subject: 'Mathematics', date: 'Oct 15, 2026', time: '09:00 AM', status: 'Confirmed' },
      { subject: 'English', date: 'Oct 17, 2026', time: '09:00 AM', status: 'Confirmed' },
      { subject: 'Science', date: 'Oct 19, 2026', time: '09:00 AM', status: 'Confirmed' },
    ],
    reportCards: [
      { term: 'Term 1 (Annual)', gpa: 'A (91.2%)', status: 'Released' },
      { term: 'Term 2 (Mid-Term)', gpa: 'A- (88.0%)', status: 'Released' },
    ],
    performance: [
      { label: 'Class Rank', value: '4th / 32', desc: 'Top 15% of the class' },
      { label: 'Homework Ratio', value: '94%', desc: 'Excellent submission rate' },
      { label: 'Participation', value: 'Active', desc: 'Contributes positively to discussions' },
    ],
  },
  '2': {
    grade: 'A+',
    overallPercentage: '96% Overall Grade',
    trend: '+1.2% from last term',
    subjects: [
      {
        name: 'Mathematics',
        score: 98,
        icon: Calculator,
        iconColor: '#10B981',
        iconBg: '#ECFDF5',
      },
      {
        name: 'English',
        score: 95,
        icon: BookOpen,
        iconColor: '#10B981',
        iconBg: '#ECFDF5',
      },
      {
        name: 'Science',
        score: 97,
        icon: FlaskConical,
        iconColor: '#10B981',
        iconBg: '#ECFDF5',
      },
    ],
    remarks: {
      text: 'Kavya is an exceptional student. Her dedication to all subjects is commendable and she sets a great example.',
      teacher: 'Mrs. Patil (Class Teacher)',
    },
    exams: [
      { subject: 'Mathematics', date: 'Oct 15, 2026', time: '11:00 AM', status: 'Confirmed' },
      { subject: 'English', date: 'Oct 17, 2026', time: '11:00 AM', status: 'Confirmed' },
      { subject: 'Science', date: 'Oct 19, 2026', time: '11:00 AM', status: 'Confirmed' },
    ],
    reportCards: [
      { term: 'Term 1 (Annual)', gpa: 'A+ (95.5%)', status: 'Released' },
      { term: 'Term 2 (Mid-Term)', gpa: 'A+ (96.0%)', status: 'Released' },
    ],
    performance: [
      { label: 'Class Rank', value: '1st / 28', desc: 'Highest in class' },
      { label: 'Homework Ratio', value: '100%', desc: 'Perfect submission rate' },
      { label: 'Participation', value: 'Excellent', desc: 'Very proactive student leader' },
    ],
  },
  '3': {
    grade: 'B',
    overallPercentage: '82% Overall Grade',
    trend: '+4.0% from last term',
    subjects: [
      {
        name: 'Mathematics',
        score: 78,
        icon: Calculator,
        iconColor: '#F59E0B',
        iconBg: '#FEF3C7',
      },
      {
        name: 'English',
        score: 84,
        icon: BookOpen,
        iconColor: '#F59E0B',
        iconBg: '#FEF3C7',
      },
      {
        name: 'Science',
        score: 80,
        icon: FlaskConical,
        iconColor: '#F59E0B',
        iconBg: '#FEF3C7',
      },
    ],
    remarks: {
      text: 'Rohan is highly active and creative but needs to submit his homework assignments on time to improve grades.',
      teacher: 'Ms. Davis (Class Teacher)',
    },
    exams: [
      { subject: 'Mathematics', date: 'Oct 15, 2026', time: '09:00 AM', status: 'Confirmed' },
      { subject: 'English', date: 'Oct 17, 2026', time: '09:00 AM', status: 'Confirmed' },
      { subject: 'Science', date: 'Oct 19, 2026', time: '09:00 AM', status: 'Confirmed' },
    ],
    reportCards: [
      { term: 'Term 1 (Annual)', gpa: 'B- (78.0%)', status: 'Released' },
      { term: 'Term 2 (Mid-Term)', gpa: 'B (82.0%)', status: 'Released' },
    ],
    performance: [
      { label: 'Class Rank', value: '12th / 30', desc: 'Upper-middle tier' },
      { label: 'Homework Ratio', value: '81%', desc: 'Needs constant follow-ups' },
      { label: 'Participation', value: 'Enthusiastic', desc: 'Great focus on creative tasks' },
    ],
  },
};

// Student Avatar mapping
const STUDENT_AVATARS: Record<string, string> = {
  '1': 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=150&h=150&q=80', // Arjun
  '2': 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80', // Kavya
  '3': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80', // Rohan
};

type SubTab = 'Subjects' | 'Exams' | 'Report Card' | 'Performance';

export default function AcademicsScreen({
  selectedStudent,
  onAvatarPress,
  onSelectorPress,
  parentAvatarUrl,
  safeTopInset,
  safeBottomInset,
}: AcademicsScreenProps) {
  const [activeSubTab, setActiveSubTab] = useState<SubTab>('Subjects');

  // Fetch the data corresponding to the selected student, fallback to Arjun (id: '1')
  const studentData = ACADEMIC_DATA_MAP[selectedStudent.id] || ACADEMIC_DATA_MAP['1'];
  const studentAvatarUrl = STUDENT_AVATARS[selectedStudent.id] || STUDENT_AVATARS['1'];

  const subTabs: SubTab[] = ['Subjects', 'Exams', 'Report Card', 'Performance'];

  return (
    <View style={styles.viewWrapper}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: Math.max(safeTopInset, 12) }]}>
        <View style={styles.headerContent}>
          {/* Student Selector Dropdown Pill */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.headerDropdownSelector}
            onPress={onSelectorPress}
          >
            <Image source={{ uri: studentAvatarUrl }} style={styles.headerStudentAvatar} />
            <View style={styles.headerSelectorTextContainer}>
              <Text style={styles.headerSelectorLabel}>Academics</Text>
              <View style={styles.headerSelectorNameRow}>
                <Text style={styles.headerSelectorName} numberOfLines={1}>
                  {selectedStudent.name}
                </Text>
                <ChevronDown size={14} color="#64748B" style={styles.headerSelectorIcon} />
              </View>
            </View>
          </TouchableOpacity>

          {/* Notification Bell */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.bellButton}
          >
            <View style={styles.bellWrapper}>
              <Bell size={24} color="#0F172A" strokeWidth={2} />
              <View style={styles.bellBadge} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable Contents */}
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: safeBottomInset + 100 }, // space for bottom tab bar
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Overall Grade Card with Circular Pattern Graphic */}
        <View style={styles.gradeCard}>
          <View style={styles.gradeCardLeft}>
            <Text style={styles.gradeCardLetter}>{studentData.grade}</Text>
            <Text style={styles.gradeCardPercent}>{studentData.overallPercentage}</Text>
            <View style={styles.trendRow}>
              <TrendingUp size={16} color="#0D9488" style={styles.trendIcon} />
              <Text style={styles.trendText}>{studentData.trend}</Text>
            </View>
          </View>

          {/* Decorative circular shape matching screenshot */}
          <View style={styles.gradeCardRightGraphic}>
            <View style={styles.graphicInnerRing}>
              <Text style={styles.graphicText}>--</Text>
            </View>
          </View>
        </View>

        {/* Sub Navigation Tabs */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tabsScrollView}
          contentContainerStyle={styles.tabsContainer}
        >
          {subTabs.map((tab) => {
            const isActive = activeSubTab === tab;
            return (
              <TouchableOpacity
                key={tab}
                style={[styles.tabButton, isActive && styles.tabButtonActive]}
                onPress={() => setActiveSubTab(tab)}
                activeOpacity={0.8}
              >
                <Text style={[styles.tabButtonText, isActive && styles.tabButtonTextActive]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* TAB CONTENTS CONTAINER */}
        <View style={styles.tabContentContainer}>
          {/* SUBJECTS TAB */}
          {activeSubTab === 'Subjects' && (
            <View style={styles.subjectsContainer}>
              {studentData.subjects.map((sub, index) => {
                const IconComponent = sub.icon;
                return (
                  <View key={index} style={styles.subjectCard}>
                    {/* Icon Column */}
                    <View style={[styles.subjectIconWrapper, { backgroundColor: sub.iconBg }]}>
                      <IconComponent size={20} color={sub.iconColor} />
                    </View>

                    {/* Middle Info Column (Subject & Progress) */}
                    <View style={styles.subjectMiddleColumn}>
                      <Text style={styles.subjectName}>{sub.name}</Text>
                      <View style={styles.progressBarBg}>
                        <View
                          style={[
                            styles.progressBarActive,
                            {
                              width: `${sub.score}%`,
                              backgroundColor: '#14B8A6', // cyan/teal active progress bar
                            },
                          ]}
                        />
                      </View>
                    </View>

                    {/* Right Column (Marks Score) */}
                    <View style={styles.subjectScoreColumn}>
                      <Text style={styles.subjectScoreText}>
                        <Text style={styles.subjectScoreBold}>{sub.score}</Text>
                        <Text style={styles.subjectScoreMax}>/100</Text>
                      </Text>
                    </View>
                  </View>
                );
              })}

              {/* Teacher Remarks Card */}
              <View style={styles.remarksCard}>
                <Text style={styles.remarksTitle}>Teacher Remarks</Text>
                <View style={styles.remarksRow}>
                  {/* Avatar Column */}
                  <View style={styles.remarksIconWrapper}>
                    <User size={20} color="#4F46E5" />
                  </View>

                  {/* Speech Bubble Column */}
                  <View style={styles.remarksSpeechBubble}>
                    <Text style={styles.remarksQuoteText}>
                      "{studentData.remarks.text}"
                    </Text>
                    <Text style={styles.remarksTeacherLabel}>
                      - {studentData.remarks.teacher}
                    </Text>
                  </View>
                </View>
              </View>

              {/* Download Full Report Button */}
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.downloadButton}
              >
                <Download size={18} color="#FFFFFF" style={styles.downloadIcon} />
                <Text style={styles.downloadButtonText}>Download Full Report</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* EXAMS TAB */}
          {activeSubTab === 'Exams' && (
            <View style={styles.examsContainer}>
              {studentData.exams.map((exam, index) => (
                <View key={index} style={styles.examItemRow}>
                  <View style={styles.examIconContainer}>
                    <Calendar size={20} color="#4F46E5" />
                  </View>
                  <View style={styles.examDetailsWrapper}>
                    <Text style={styles.examSubjectName}>{exam.subject} Midterm</Text>
                    <Text style={styles.examDateTimeText}>
                      {exam.date} • {exam.time}
                    </Text>
                  </View>
                  <View style={styles.examStatusBadge}>
                    <Text style={styles.examStatusText}>{exam.status}</Text>
                  </View>
                </View>
              ))}

              <View style={styles.examWarningCard}>
                <Text style={styles.examWarningTitle}>Important Notice</Text>
                <Text style={styles.examWarningDesc}>
                  Please ensure your child arrives at school by 8:30 AM during exams. ID cards are mandatory in the examination hall.
                </Text>
              </View>
            </View>
          )}

          {/* REPORT CARD TAB */}
          {activeSubTab === 'Report Card' && (
            <View style={styles.reportCardContainer}>
              {studentData.reportCards.map((rc, index) => (
                <View key={index} style={styles.rcItemRow}>
                  <View style={styles.rcIconContainer}>
                    <Award size={20} color="#10B981" />
                  </View>
                  <View style={styles.rcDetailsWrapper}>
                    <Text style={styles.rcTermName}>{rc.term}</Text>
                    <Text style={styles.rcGpaText}>Result: {rc.gpa}</Text>
                  </View>
                  <TouchableOpacity activeOpacity={0.7} style={styles.rcDownloadBtn}>
                    <Download size={18} color="#0D9488" />
                  </TouchableOpacity>
                </View>
              ))}

              <View style={styles.rcNotesCard}>
                <Text style={styles.rcNotesTitle}>Report Cards Access</Text>
                <Text style={styles.rcNotesDesc}>
                  Final report cards require clearance of all pending tuition fees. If you face issues downloading, contact the finance desk.
                </Text>
              </View>
            </View>
          )}

          {/* PERFORMANCE TAB */}
          {activeSubTab === 'Performance' && (
            <View style={styles.performanceContainer}>
              {studentData.performance.map((perf, index) => (
                <View key={index} style={styles.perfItemCard}>
                  <View style={styles.perfItemHeader}>
                    <View style={styles.perfIconContainer}>
                      <LineChart size={18} color="#0D9488" />
                    </View>
                    <Text style={styles.perfLabelText}>{perf.label}</Text>
                  </View>
                  <Text style={styles.perfValueText}>{perf.value}</Text>
                  <Text style={styles.perfDescText}>{perf.desc}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewWrapper: {
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
  headerDropdownSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 14,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    maxWidth: '75%',
  },
  headerStudentAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
  },
  headerSelectorTextContainer: {
    marginLeft: 10,
    marginRight: 4,
  },
  headerSelectorLabel: {
    fontFamily: 'Inter_500Medium',
    fontSize: 10,
    color: '#64748B',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  headerSelectorNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  headerSelectorName: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 15,
    color: '#0F172A',
    maxWidth: width * 0.4,
  },
  headerSelectorIcon: {
    marginLeft: 6,
    marginTop: 1,
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
  gradeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    marginBottom: 24,
    position: 'relative',
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.02,
    shadowRadius: 12,
    elevation: 2,
  },
  gradeCardLeft: {
    flex: 1,
    zIndex: 2,
  },
  gradeCardLetter: {
    fontFamily: 'PlusJakartaSans_800ExtraBold',
    fontSize: 42,
    color: '#0F172A',
    lineHeight: 48,
  },
  gradeCardPercent: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 16,
    color: '#475569',
    marginTop: 4,
  },
  trendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
  trendIcon: {
    marginRight: 6,
  },
  trendText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 13,
    color: '#0D9488',
  },
  gradeCardRightGraphic: {
    position: 'absolute',
    right: -30,
    top: -20,
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#ECFDF5', // Light green background matching screenshot
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  graphicInnerRing: {
    width: 66,
    height: 66,
    borderRadius: 33,
    borderWidth: 1.5,
    borderColor: '#A7F3D0',
    borderStyle: 'dashed',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginTop: 10,
  },
  graphicText: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 18,
    color: '#0D9488',
  },
  tabsScrollView: {
    marginBottom: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    gap: 8,
    paddingRight: 20,
  },
  tabButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 100,
    backgroundColor: '#EEF2FF', // Default light greyish blue
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabButtonActive: {
    backgroundColor: '#0F172A', // Dark navy selected background
  },
  tabButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 13,
    color: '#4F46E5', // Accent blue
  },
  tabButtonTextActive: {
    color: '#FFFFFF', // White text when selected
  },
  tabContentContainer: {
    flex: 1,
  },
  subjectsContainer: {
    gap: 12,
  },
  subjectCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.02,
    shadowRadius: 10,
    elevation: 2,
  },
  subjectIconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subjectMiddleColumn: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'center',
  },
  subjectName: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 15,
    color: '#0F172A',
  },
  progressBarBg: {
    height: 6,
    backgroundColor: '#E2E8F0',
    borderRadius: 100,
    marginTop: 8,
    width: '90%',
  },
  progressBarActive: {
    height: '100%',
    borderRadius: 100,
  },
  subjectScoreColumn: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    minWidth: 60,
  },
  subjectScoreText: {
    fontFamily: 'Inter_500Medium',
  },
  subjectScoreBold: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 18,
    color: '#0F172A',
  },
  subjectScoreMax: {
    fontSize: 13,
    color: '#94A3B8',
  },
  remarksCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    marginTop: 8,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.02,
    shadowRadius: 12,
    elevation: 2,
  },
  remarksTitle: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 16,
    color: '#0F172A',
    marginBottom: 16,
  },
  remarksRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  remarksIconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  remarksSpeechBubble: {
    flex: 1,
    marginLeft: 12,
    backgroundColor: '#EEF2FF', // Speech bubble color
    borderRadius: 16,
    padding: 16,
  },
  remarksQuoteText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#334155',
    lineHeight: 20,
    fontStyle: 'italic',
  },
  remarksTeacherLabel: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    color: '#64748B',
    marginTop: 8,
  },
  downloadButton: {
    backgroundColor: '#14B8A6', // Mint teal button color
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    paddingVertical: 16,
    marginTop: 20,
    shadowColor: '#14B8A6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  downloadIcon: {
    marginRight: 8,
  },
  downloadButtonText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 15,
    color: '#FFFFFF',
  },
  examsContainer: {
    gap: 12,
  },
  examItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  examIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  examDetailsWrapper: {
    flex: 1,
    marginLeft: 14,
  },
  examSubjectName: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 15,
    color: '#0F172A',
  },
  examDateTimeText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#64748B',
    marginTop: 4,
  },
  examStatusBadge: {
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  examStatusText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    color: '#0D9488',
  },
  examWarningCard: {
    backgroundColor: '#FFFBEB',
    borderWidth: 1,
    borderColor: '#FDE68A',
    borderRadius: 20,
    padding: 16,
    marginTop: 8,
  },
  examWarningTitle: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 15,
    color: '#B45309',
    marginBottom: 6,
  },
  examWarningDesc: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#B45309',
    lineHeight: 18,
  },
  reportCardContainer: {
    gap: 12,
  },
  rcItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  rcIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#E6F4F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rcDetailsWrapper: {
    flex: 1,
    marginLeft: 14,
  },
  rcTermName: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 15,
    color: '#0F172A',
  },
  rcGpaText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#64748B',
    marginTop: 4,
  },
  rcDownloadBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E6F4F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rcNotesCard: {
    backgroundColor: '#F0FDF4',
    borderWidth: 1,
    borderColor: '#BBF7D0',
    borderRadius: 20,
    padding: 16,
    marginTop: 8,
  },
  rcNotesTitle: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 15,
    color: '#15803D',
    marginBottom: 6,
  },
  rcNotesDesc: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#15803D',
    lineHeight: 18,
  },
  performanceContainer: {
    gap: 12,
  },
  perfItemCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  perfItemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  perfIconContainer: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: '#E6F4F1',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  perfLabelText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 13,
    color: '#64748B',
  },
  perfValueText: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 22,
    color: '#0F172A',
  },
  perfDescText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#64748B',
    marginTop: 4,
  },
});
