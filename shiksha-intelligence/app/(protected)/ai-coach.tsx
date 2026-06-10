import AiCoachScreen from '@/portals/student/training-and-placement/screen/AiCoachScreen';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function AiCoachRoute() {
  const insets = useSafeAreaInsets();

  return (
    <AiCoachScreen safeTopInset={insets.top} safeBottomInset={insets.bottom} />
  );
}
