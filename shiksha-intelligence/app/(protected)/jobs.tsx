import JobsScreen from '@/portals/student/training-and-placement/screen/JobsScreen';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function JobsRoute() {
  const insets = useSafeAreaInsets();

  return (
    <JobsScreen safeTopInset={insets.top} safeBottomInset={insets.bottom} />
  );
}
