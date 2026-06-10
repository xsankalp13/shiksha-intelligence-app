import TrainingScreen from '@/portals/student/training-and-placement/screen/TrainingScreen';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TrainingRoute() {
  const insets = useSafeAreaInsets();

  return (
    <TrainingScreen safeTopInset={insets.top} safeBottomInset={insets.bottom} />
  );
}
