import TrainingPlacementScreen from '@/portals/student/training-and-placement/screen/TrainingPlacementScreen';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TrainingAndPlacementRoute() {
  const insets = useSafeAreaInsets();

  return (
    <TrainingPlacementScreen safeTopInset={insets.top} safeBottomInset={insets.bottom} />
  );
}
