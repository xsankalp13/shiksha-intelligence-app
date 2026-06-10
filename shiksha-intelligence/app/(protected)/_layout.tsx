import { Stack } from 'expo-router';

/** Shared Stack navigator for all (protected) portals. */
export default function ProtectedLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        contentStyle: { backgroundColor: '#F8FAFC' },
      }}
    >
      <Stack.Screen name="training-and-placement" options={{ animation: 'none' }} />
      <Stack.Screen name="jobs" options={{ animation: 'none' }} />
      <Stack.Screen name="training" options={{ animation: 'none' }} />
      <Stack.Screen name="profile" options={{ animation: 'none' }} />
    </Stack>
  );
}
