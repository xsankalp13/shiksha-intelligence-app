import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SecureStore from "expo-secure-store";
import { router } from "expo-router";
import { LogOut, BookOpen, Calendar, Shield, Award, DollarSign } from "lucide-react-native";

export default function HomeScreen() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      try {
        const userStr = await SecureStore.getItemAsync("user");
        if (userStr) {
          setUser(JSON.parse(userStr));
        }
      } catch (error) {
        console.error("Failed to load user details", error);
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, []);

  async function handleLogout() {
    try {
      await SecureStore.deleteItemAsync("accessToken");
      await SecureStore.deleteItemAsync("refreshToken");
      await SecureStore.deleteItemAsync("user");
      router.replace("/(auth)/welcome");
    } catch (error) {
      console.error("Failed to logout securely", error);
    }
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F8FAFC" }}>
        <ActivityIndicator size="large" color="#0F172A" />
      </View>
    );
  }

  const displayName = user?.name || user?.fullName || user?.username || "Portal Staff";
  const userRole = user?.role || user?.roleName || "Academic Administrator";
  const userEmail = user?.email || "portal.user@shiksha.ai";

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View className="flex-1">
        {/* HEADER BAR */}
        <View className="flex-row justify-between items-center px-5 py-4 border-b border-neutral-100 bg-white">
          <View>
            <Text className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
              Shiksha Portal
            </Text>
            <Text className="text-2xl font-bold text-neutral-900 mt-0.5">
              Dashboard
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleLogout}
            style={styles.logoutBtn}
            className="flex-row items-center bg-red-50 px-3.5 py-2 rounded-full border border-red-100"
          >
            <LogOut size={16} color="#EF4444" />
            <Text className="text-red-500 font-semibold text-xs ml-1.5">Sign Out</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* USER GREETING CARD */}
          <View className="bg-neutral-900 rounded-3xl p-6 mb-6 shadow-sm">
            <View className="flex-row justify-between items-start">
              <View className="flex-1">
                <Text className="text-neutral-400 text-sm font-medium">Hello there 👋</Text>
                <Text className="text-white text-2xl font-bold mt-1 tracking-tight">
                  {displayName}
                </Text>
                <View className="bg-white/10 self-start px-3 py-1 rounded-full mt-3 border border-white/10">
                  <Text className="text-white font-medium text-xs tracking-wider uppercase">
                    🎓 {userRole}
                  </Text>
                </View>
              </View>
              <View className="bg-white/10 w-12 h-12 rounded-full items-center justify-center border border-white/20">
                <Text className="text-2xl">👤</Text>
              </View>
            </View>

            <View className="h-[1px] bg-white/10 my-4" />

            <View className="flex-row justify-between">
              <View>
                <Text className="text-neutral-400 text-xs uppercase tracking-wider">Email Profile</Text>
                <Text className="text-white font-semibold text-sm mt-0.5">{userEmail}</Text>
              </View>
              <View className="items-end">
                <Text className="text-neutral-400 text-xs uppercase tracking-wider">Academic Year</Text>
                <Text className="text-white font-semibold text-sm mt-0.5">2026 - 2027</Text>
              </View>
            </View>
          </View>

          {/* DYNAMIC SYSTEM CARDS SECTION */}
          <Text className="text-neutral-900 text-lg font-bold mb-4 px-1">
            Enterprise School ERP Modules
          </Text>

          <View className="flex-row flex-wrap justify-between">
            {/* Card 1 */}
            <View style={styles.moduleCard} className="bg-white p-5 rounded-2xl border border-neutral-100 mb-4">
              <View className="bg-blue-50 w-10 h-10 rounded-xl items-center justify-center mb-3">
                <BookOpen size={20} color="#3B82F6" />
              </View>
              <Text className="text-neutral-900 font-bold text-sm">Academic Ops</Text>
              <Text className="text-neutral-400 text-xs mt-1 leading-snug">
                Building rosters, rooms & curriculum mapping.
              </Text>
            </View>

            {/* Card 2 */}
            <View style={styles.moduleCard} className="bg-white p-5 rounded-2xl border border-neutral-100 mb-4">
              <View className="bg-emerald-50 w-10 h-10 rounded-xl items-center justify-center mb-3">
                <Calendar size={20} color="#10B981" />
              </View>
              <Text className="text-neutral-900 font-bold text-sm">Attendance</Text>
              <Text className="text-neutral-400 text-xs mt-1 leading-snug">
                Dual rosters, grace configurations & leave approvals.
              </Text>
            </View>

            {/* Card 3 */}
            <View style={styles.moduleCard} className="bg-white p-5 rounded-2xl border border-neutral-100 mb-4">
              <View className="bg-purple-50 w-10 h-10 rounded-xl items-center justify-center mb-3">
                <Award size={20} color="#8B5CF6" />
              </View>
              <Text className="text-neutral-900 font-bold text-sm">Exam Portal</Text>
              <Text className="text-neutral-400 text-xs mt-1 leading-snug">
                Snake seating plan & digital evaluation sheets.
              </Text>
            </View>

            {/* Card 4 */}
            <View style={styles.moduleCard} className="bg-white p-5 rounded-2xl border border-neutral-100 mb-4">
              <View className="bg-amber-50 w-10 h-10 rounded-xl items-center justify-center mb-3">
                <DollarSign size={20} color="#F59E0B" />
              </View>
              <Text className="text-neutral-900 font-bold text-sm">Finance & ERP</Text>
              <Text className="text-neutral-400 text-xs mt-1 leading-snug">
                Invoices, tuition mapping & Razorpay gateways.
              </Text>
            </View>
          </View>

          {/* DYNAMIC SYSTEM INSIGHT */}
          <View className="bg-neutral-50 rounded-2xl p-5 mt-2 border border-neutral-100 flex-row items-center">
            <View className="bg-neutral-200/50 p-2.5 rounded-full mr-3.5">
              <Shield size={20} color="#475569" />
            </View>
            <View className="flex-1">
              <Text className="text-neutral-900 font-bold text-xs uppercase tracking-widest">
                Tenant Active Sec.
              </Text>
              <Text className="text-neutral-500 text-xs mt-0.5 leading-relaxed">
                Federated single database partitioned securely under tenant schema isolates.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 40,
  },
  logoutBtn: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 1,
    elevation: 0.5,
  },
  moduleCard: {
    width: "48%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
    elevation: 1,
  },
});