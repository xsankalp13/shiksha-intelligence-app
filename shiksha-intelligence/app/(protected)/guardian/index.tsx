import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuthStore } from '@/store/authStore';

// Modular components and screens imports
import StudentDropdown from '../../../portals/guardian/components/StudentDropdown';
import BottomTabBar from '../../../portals/guardian/components/BottomTabBar';
import DashboardScreen from '../../../portals/guardian/screens/index';
import ProfileScreen from '../../../portals/guardian/screens/profile';
import AttendanceScreen from '../../../portals/guardian/screens/attendance';
import AcademicsScreen from '../../../portals/guardian/screens/academics';
import ChatScreen from '../../../portals/guardian/screens/chat';

interface StudentData {
  id: string;
  name: string;
  grade: string;
  attendance: string;
  homework: string;
  fees: string;
  exams: string;
}

const STUDENTS: StudentData[] = [
  {
    id: '1',
    name: 'Arjun Sharma',
    grade: 'Grade 4-B',
    attendance: '95%',
    homework: '3 Pending',
    fees: '$120',
    exams: '2 Weeks',
  },
  {
    id: '2',
    name: 'Kavya Sharma',
    grade: 'Grade 6-A',
    attendance: '98%',
    homework: '1 Pending',
    fees: '$0',
    exams: '1 Week',
  },
  {
    id: '3',
    name: 'Rohan Sharma',
    grade: 'Grade 1-C',
    attendance: '92%',
    homework: '5 Pending',
    fees: '$250',
    exams: '3 Weeks',
  },
];

export default function GuardianDashboardOrchestrator() {
  const insets = useSafeAreaInsets();
  const { user, logout } = useAuthStore();
  
  // Navigation states
  const [currentScreen, setCurrentScreen] = useState<'home' | 'profile' | 'attendance' | 'academics' | 'chat'>('home');
  const [selectedStudent, setSelectedStudent] = useState<StudentData>(STUDENTS[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'Home' | 'Schools' | 'Chat' | 'Settings'>('Home');
  const [isChatThreadActive, setIsChatThreadActive] = useState(false);

  // Hardcoded parent info matching the screenshot
  const parentAvatarUrl = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';
  const parentName = user?.name ? user.name : 'Alex Thompson';
  const parentEmail = user?.email ? user.email : 'alex.t@example.com';
  const parentLastName = parentName.split(' ').pop() || 'Thompson';

  const handleSelectStudent = (student: StudentData) => {
    setSelectedStudent(student);
    setDropdownOpen(false);
  };

  const handleTabPress = (tab: 'Home' | 'Schools' | 'Chat' | 'Settings') => {
    setActiveTab(tab);
    setIsChatThreadActive(false);
    if (tab === 'Home') {
      setCurrentScreen('home');
    } else if (tab === 'Schools') {
      setCurrentScreen('academics');
    } else if (tab === 'Chat') {
      setCurrentScreen('chat');
    } else if (tab === 'Settings') {
      setCurrentScreen('profile');
    }
  };

  return (
    <View style={styles.container}>
      {/* Screen Router */}
      {currentScreen === 'home' && (
        <DashboardScreen
          selectedStudent={selectedStudent}
          onAvatarPress={() => {
            setCurrentScreen('profile');
            setActiveTab('Settings');
          }}
          onAttendancePress={() => setCurrentScreen('attendance')}
          onExamsPress={() => {
            setCurrentScreen('academics');
            setActiveTab('Schools');
          }}
          onSelectorPress={() => setDropdownOpen(true)}
          parentLastName={parentLastName}
          parentAvatarUrl={parentAvatarUrl}
          safeTopInset={insets.top}
          safeBottomInset={insets.bottom}
        />
      )}

      {currentScreen === 'academics' && (
        <AcademicsScreen
          selectedStudent={selectedStudent}
          onAvatarPress={() => {
            setCurrentScreen('profile');
            setActiveTab('Settings');
          }}
          onSelectorPress={() => setDropdownOpen(true)}
          parentAvatarUrl={parentAvatarUrl}
          safeTopInset={insets.top}
          safeBottomInset={insets.bottom}
        />
      )}

      {currentScreen === 'chat' && (
        <ChatScreen
          safeTopInset={insets.top}
          safeBottomInset={insets.bottom}
          parentAvatarUrl={parentAvatarUrl}
          onAvatarPress={() => {
            setCurrentScreen('profile');
            setActiveTab('Settings');
          }}
          onThreadActiveStateChange={setIsChatThreadActive}
        />
      )}

      {currentScreen === 'profile' && (
        <ProfileScreen
          parentName={parentName}
          parentEmail={parentEmail}
          parentAvatarUrl={parentAvatarUrl}
          onBackPress={() => {
            setCurrentScreen('home');
            setActiveTab('Home');
          }}
          onLogoutPress={logout}
          safeTopInset={insets.top}
          safeBottomInset={insets.bottom}
        />
      )}

      {currentScreen === 'attendance' && (
        <AttendanceScreen
          selectedStudent={selectedStudent}
          onBackPress={() => setCurrentScreen('home')}
          safeTopInset={insets.top}
          safeBottomInset={insets.bottom}
        />
      )}

      {/* Global Student Selection Dropdown Dialog */}
      <StudentDropdown
        visible={dropdownOpen}
        onClose={() => setDropdownOpen(false)}
        selectedStudent={selectedStudent}
        onSelectStudent={handleSelectStudent}
        students={STUDENTS}
      />

      {/* Reusable Bottom Navigation Footer */}
      {!(currentScreen === 'chat' && isChatThreadActive) && (
        <BottomTabBar
          activeTab={activeTab}
          onTabPress={handleTabPress}
          safeBottomInset={insets.bottom}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
});
