import { Redirect, Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuthStore } from '@/store/authStore';
import { canAccess } from '@/utils/roleGuard';
import { Home, GraduationCap, Wallet, User } from 'lucide-react-native';

export default function StudentLayout() {
  const { user } = useAuthStore();
  const insets = useSafeAreaInsets();

  if (!user || !canAccess(user.roles, ['STUDENT'])) {
    return <Redirect href="/home" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor:   '#0F172A', // Dark text color for active label matching screenshot
        tabBarInactiveTintColor: '#64748B',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor:  '#F1F5F9',
          borderTopWidth:  1,
          height:          68 + Math.max(insets.bottom - 10, 6),
          paddingBottom:   Math.max(insets.bottom - 6, 8),
          paddingTop:      10,
        },
        tabBarLabelStyle: {
          fontFamily: 'Inter_500Medium',
          fontSize:   11,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconWrapper, focused && styles.iconWrapperActive]}>
              <Home size={22} color={focused ? '#0F172A' : '#64748B'} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="timetable"
        options={{
          title: 'Academic',
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconWrapper, focused && styles.iconWrapperActive]}>
              <GraduationCap size={22} color={focused ? '#0F172A' : '#64748B'} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="assignments"
        options={{
          title: 'Fees',
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconWrapper, focused && styles.iconWrapperActive]}>
              <Wallet size={22} color={focused ? '#0F172A' : '#64748B'} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconWrapper, focused && styles.iconWrapperActive]}>
              <User size={22} color={focused ? '#0F172A' : '#64748B'} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    width: 64,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  iconWrapperActive: {
    backgroundColor: '#51F5DE', // Mint-teal active background pill/circle matching screenshot
  },
});
