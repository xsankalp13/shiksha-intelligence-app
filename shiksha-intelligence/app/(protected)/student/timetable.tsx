import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TimetableScreen from '@/portals/student/screens/TimetableScreen';

export default function StudentTimetableRoute() {
  const insets = useSafeAreaInsets();

  return (
    <TimetableScreen
      safeTopInset={insets.top}
      safeBottomInset={insets.bottom}
      onBellPress={() => {
        console.log('Bell notifications pressed on Timetable');
      }}
    />
  );
}
