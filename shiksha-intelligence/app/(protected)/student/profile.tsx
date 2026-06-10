import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuthStore } from '@/store/authStore';
import ProfileScreen from '@/portals/student/screens/ProfileScreen';
import { useRouter } from 'expo-router';

export default function StudentProfileRoute() {
  const insets = useSafeAreaInsets();
  const { user, logout } = useAuthStore();
  const router = useRouter();

  // If no user is logged in, return null (handled by outer router guards)
  if (!user) return null;

  return (
    <ProfileScreen
      studentName={user.name || 'Rahul Sharma'}
      studentId={user.username || 'SI-2024-0014'}
      safeTopInset={insets.top}
      safeBottomInset={insets.bottom}
      onLogout={logout}
      onBackPress={() => {
        // Go back to the student home
        router.push('/(protected)/student/home');
      }}
      onEditPress={() => {
        console.log('Edit Profile Pressed');
      }}
    />
  );
}
