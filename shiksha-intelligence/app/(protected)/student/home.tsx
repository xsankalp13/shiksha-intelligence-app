import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuthStore } from '@/store/authStore';
import HomeScreen from '@/portals/student/screens/HomeScreen';
import { useRouter } from 'expo-router';

export default function StudentHomeRoute() {
  const insets = useSafeAreaInsets();
  const { user } = useAuthStore();
  const router = useRouter();
  
  // Try to use the authenticated user's name, fallback to Rahul
  const studentName = user?.name ? user.name.split(' ')[0] : 'Rahul';

  return (
    <HomeScreen
      studentName={studentName}
      grade="Grade 10-A"
      rollNo="Roll No. 14"
      safeTopInset={insets.top}
      safeBottomInset={insets.bottom}
      onPlacementPress={() => {
        router.push('/(protected)/training-and-placement');
      }}
      onBellPress={() => {
        console.log('Bell notifications pressed');
      }}
      onDeadlineViewAllPress={() => {
        console.log('Deadline view all pressed');
      }}
      onClassPress={(classId) => {
        console.log(`Class pressed: ${classId}`);
      }}
      onTimetablePress={() => {
        router.push('/(protected)/student/timetable');
      }}
    />
  );
}
