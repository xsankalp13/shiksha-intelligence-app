import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ProfileScreen from '../../portals/student/training-and-placement/screen/ProfileScreen';

export default function ProfileRoute() {
  const insets = useSafeAreaInsets();
  
  return (
    <ProfileScreen safeTopInset={insets.top} safeBottomInset={insets.bottom} />
  );
}
