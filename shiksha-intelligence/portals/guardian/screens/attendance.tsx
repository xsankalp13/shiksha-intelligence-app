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
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Calendar,
  CheckCircle2,
  XCircle,
  Clock,
  AlertTriangle,
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

interface AttendanceScreenProps {
  selectedStudent: StudentData;
  onBackPress: () => void;
  safeTopInset: number;
  safeBottomInset: number;
}

// Generate days for a mock monthly calendar (e.g., October 2026)
// Starting day of week: Thursday (so 3 blank days before Oct 1st)
const CALENDAR_DAYS = [
  { day: null, status: 'none' },
  { day: null, status: 'none' },
  { day: null, status: 'none' },
  { day: 1, status: 'present' },
  { day: 2, status: 'present' },
  { day: 3, status: 'holiday' }, // Sat
  { day: 4, status: 'holiday' }, // Sun
  { day: 5, status: 'present' },
  { day: 6, status: 'present' },
  { day: 7, status: 'present' },
  { day: 8, status: 'present' },
  { day: 9, status: 'absent', reason: 'Fever' },
  { day: 10, status: 'holiday' },
  { day: 11, status: 'holiday' },
  { day: 12, status: 'present' },
  { day: 13, status: 'present' },
  { day: 14, status: 'present' },
  { day: 15, status: 'present' },
  { day: 16, status: 'present' },
  { day: 17, status: 'holiday' },
  { day: 18, status: 'holiday' },
  { day: 19, status: 'present' },
  { day: 20, status: 'present' },
  { day: 21, status: 'late', reason: 'Traffic delay' },
  { day: 22, status: 'present' },
  { day: 23, status: 'present' },
  { day: 24, status: 'holiday' },
  { day: 25, status: 'holiday' },
  { day: 26, status: 'present' },
  { day: 27, status: 'present' },
  { day: 28, status: 'present' },
  { day: 29, status: 'present' },
  { day: 30, status: 'present' },
  { day: 31, status: 'holiday' },
];

const ABSENCE_HISTORY = [
  {
    id: '1',
    date: 'Oct 9, 2026',
    type: 'Sick Leave',
    reason: 'High fever and cold',
    status: 'Approved',
    approvedBy: 'Principal Roy',
  },
  {
    id: '2',
    date: 'Sep 14, 2026',
    type: 'Casual Leave',
    reason: 'Family wedding event',
    status: 'Approved',
    approvedBy: 'Class Teacher Sharma',
  },
  {
    id: '3',
    date: 'Aug 21, 2026',
    type: 'Unexcused',
    reason: 'Missed early school bus',
    status: 'Pending Review',
    approvedBy: '',
  },
];

export default function AttendanceScreen({
  selectedStudent,
  onBackPress,
  safeTopInset,
  safeBottomInset,
}: AttendanceScreenProps) {
  const [currentMonth, setCurrentMonth] = useState('October 2026');

  // Compute mock counts based on CALENDAR_DAYS
  const presentCount = CALENDAR_DAYS.filter(d => d.status === 'present').length;
  const absentCount = CALENDAR_DAYS.filter(d => d.status === 'absent').length;
  const lateCount = CALENDAR_DAYS.filter(d => d.status === 'late').length;

  return (
    <View style={styles.viewWrapper}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: Math.max(safeTopInset, 12) }]}>
        <View style={styles.headerContent}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onBackPress}
            style={styles.backButton}
          >
            <ArrowLeft size={24} color="#0F172A" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Attendance History</Text>
          <View style={{ width: 40 }} /> {/* Spacer */}
        </View>
      </View>

      {/* Content */}
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: safeBottomInset + 90 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Student Mini Card */}
        <View style={styles.studentCard}>
          <View style={styles.studentBadge}>
            <Calendar size={16} color="#0F766E" style={styles.badgeIcon} />
            <Text style={styles.studentBadgeText}>Active Status</Text>
          </View>
          <Text style={styles.studentNameText}>{selectedStudent.name}</Text>
          <Text style={styles.studentGradeText}>{selectedStudent.grade}</Text>
        </View>

        {/* Stats Summary Grid */}
        <View style={styles.statsGrid}>
          {/* Rate */}
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Attendance Rate</Text>
            <Text style={[styles.statValue, { color: '#0F766E' }]}>{selectedStudent.attendance}</Text>
          </View>

          {/* Present */}
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Days Present</Text>
            <Text style={[styles.statValue, { color: '#10B981' }]}>{presentCount} Days</Text>
          </View>

          {/* Absent */}
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Days Absent</Text>
            <Text style={[styles.statValue, { color: '#EF4444' }]}>{absentCount} Day</Text>
          </View>

          {/* Late */}
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Days Late</Text>
            <Text style={[styles.statValue, { color: '#F59E0B' }]}>{lateCount} Day</Text>
          </View>
        </View>

        {/* Calendar Card */}
        <View style={styles.calendarContainer}>
          {/* Calendar Header */}
          <View style={styles.calendarHeaderRow}>
            <Text style={styles.calendarMonthText}>{currentMonth}</Text>
            <View style={styles.calendarNavBtns}>
              <TouchableOpacity style={styles.calNavBtn}>
                <ChevronLeft size={18} color="#475569" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.calNavBtn}>
                <ChevronRight size={18} color="#475569" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Weekday Labels */}
          <View style={styles.weekLabelsRow}>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <Text key={day} style={styles.weekLabelText}>
                {day}
              </Text>
            ))}
          </View>

          {/* Calendar Grid */}
          <View style={styles.calendarGrid}>
            {CALENDAR_DAYS.map((item, idx) => {
              const isToday = item.day === 8; // Highlight mock current day
              
              let dayStyle: any = styles.dayCell;
              let textStyle: any = styles.dayText;

              if (item.status === 'present') {
                dayStyle = [styles.dayCell, styles.dayPresent];
                textStyle = [styles.dayText, styles.dayTextPresent];
              } else if (item.status === 'absent') {
                dayStyle = [styles.dayCell, styles.dayAbsent];
                textStyle = [styles.dayText, styles.dayTextAbsent];
              } else if (item.status === 'late') {
                dayStyle = [styles.dayCell, styles.dayLate];
                textStyle = [styles.dayText, styles.dayTextLate];
              } else if (item.status === 'holiday') {
                dayStyle = [styles.dayCell, styles.dayHoliday];
                textStyle = [styles.dayText, styles.dayTextHoliday];
              }

              return (
                <View
                  key={idx}
                  style={[
                    dayStyle,
                    isToday && styles.dayTodayBorder,
                    item.day === null && styles.dayEmpty,
                  ]}
                >
                  <Text style={[textStyle, isToday && styles.dayTextToday]}>
                    {item.day || ''}
                  </Text>
                </View>
              );
            })}
          </View>

          {/* Calendar Legend */}
          <View style={styles.legendRow}>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#10B981' }]} />
              <Text style={styles.legendText}>Present</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#EF4444' }]} />
              <Text style={styles.legendText}>Absent</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#F59E0B' }]} />
              <Text style={styles.legendText}>Late</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#E2E8F0' }]} />
              <Text style={styles.legendText}>Holiday</Text>
            </View>
          </View>
        </View>

        {/* Absence History List */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>ABSENCE HISTORY</Text>

          {ABSENCE_HISTORY.map((record) => (
            <View key={record.id} style={styles.historyCard}>
              <View style={styles.historyCardHeader}>
                <View style={styles.historyCardHeaderLeft}>
                  {record.status === 'Approved' ? (
                    <CheckCircle2 size={18} color="#10B981" />
                  ) : (
                    <Clock size={18} color="#F59E0B" />
                  )}
                  <Text style={styles.historyDateText}>{record.date}</Text>
                </View>
                <View
                  style={[
                    styles.historyStatusBadge,
                    {
                      backgroundColor: record.status === 'Approved' ? '#D1FAE5' : '#FEF3C7',
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.historyStatusText,
                      {
                        color: record.status === 'Approved' ? '#065F46' : '#D97706',
                      },
                    ]}
                  >
                    {record.status}
                  </Text>
                </View>
              </View>

              <View style={styles.historyBody}>
                <Text style={styles.historyTypeText}>{record.type}</Text>
                <Text style={styles.historyReasonText}>Reason: {record.reason}</Text>
                
                {record.approvedBy ? (
                  <Text style={styles.historyApprovedText}>Approved By: {record.approvedBy}</Text>
                ) : null}
              </View>
            </View>
          ))}
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
  backButton: {
    padding: 6,
  },
  headerTitle: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 20,
    color: '#0F172A',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  studentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F1F5F9',
    marginBottom: 20,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.02,
    shadowRadius: 12,
    elevation: 2,
  },
  studentBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6F4F1',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
    marginBottom: 10,
  },
  badgeIcon: {
    marginRight: 6,
  },
  studentBadgeText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    color: '#0F766E',
  },
  studentNameText: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 22,
    color: '#0F172A',
  },
  studentGradeText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  statLabel: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    color: '#64748B',
  },
  statValue: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 20,
    marginTop: 6,
  },
  calendarContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    marginBottom: 24,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.02,
    shadowRadius: 12,
    elevation: 2,
  },
  calendarHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  calendarMonthText: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 18,
    color: '#0F172A',
  },
  calendarNavBtns: {
    flexDirection: 'row',
    gap: 8,
  },
  calNavBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F8FAFC',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  weekLabelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  weekLabelText: {
    width: (width - 100) / 7,
    textAlign: 'center',
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    color: '#94A3B8',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 6,
  },
  dayCell: {
    width: (width - 100) / 7,
    height: (width - 100) / 7,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  dayEmpty: {
    backgroundColor: 'transparent',
  },
  dayPresent: {
    backgroundColor: '#D1FAE5',
  },
  dayAbsent: {
    backgroundColor: '#FEE2E2',
  },
  dayLate: {
    backgroundColor: '#FEF3C7',
  },
  dayHoliday: {
    backgroundColor: '#F1F5F9',
  },
  dayText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 13,
    color: '#334155',
  },
  dayTextPresent: {
    color: '#065F46',
    fontFamily: 'Inter_600SemiBold',
  },
  dayTextAbsent: {
    color: '#991B1B',
    fontFamily: 'Inter_600SemiBold',
  },
  dayTextLate: {
    color: '#D97706',
    fontFamily: 'Inter_600SemiBold',
  },
  dayTextHoliday: {
    color: '#64748B',
  },
  dayTodayBorder: {
    borderWidth: 2,
    borderColor: '#0F172A',
  },
  dayTextToday: {
    fontFamily: 'Inter_700Bold',
  },
  legendRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
    borderTopWidth: 1,
    borderTopColor: '#F8FAFC',
    paddingTop: 14,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  legendText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 11,
    color: '#64748B',
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
  historyCard: {
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
  historyCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F8FAFC',
    paddingBottom: 10,
    marginBottom: 10,
  },
  historyCardHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  historyDateText: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 14,
    color: '#1E293B',
  },
  historyStatusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  historyStatusText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
  },
  historyBody: {
    gap: 4,
  },
  historyTypeText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 13,
    color: '#475569',
  },
  historyReasonText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#64748B',
  },
  historyApprovedText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 11,
    color: '#94A3B8',
    marginTop: 2,
  },
});
