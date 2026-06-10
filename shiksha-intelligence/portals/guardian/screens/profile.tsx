import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {
  Settings,
  ChevronRight,
  MapPin,
  Asterisk,
  Bell,
  Shield,
  KeyRound,
  HelpCircle,
  LogOut,
  ArrowLeft,
} from 'lucide-react-native';

interface ProfileScreenProps {
  parentName: string;
  parentEmail: string;
  parentAvatarUrl: string;
  onBackPress: () => void;
  onLogoutPress: () => void;
  safeTopInset: number;
  safeBottomInset: number;
}

export default function ProfileScreen({
  parentName,
  parentEmail,
  parentAvatarUrl,
  onBackPress,
  onLogoutPress,
  safeTopInset,
  safeBottomInset,
}: ProfileScreenProps) {
  return (
    <View style={styles.viewWrapper}>
      {/* Profile Header */}
      <View style={[styles.header, { paddingTop: Math.max(safeTopInset, 12) }]}>
        <View style={styles.headerContent}>
          <View style={styles.profileHeaderLeft}>
            {/* Back Button */}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onBackPress}
              style={styles.backButton}
            >
              <ArrowLeft size={24} color="#0F172A" />
            </TouchableOpacity>

            {/* Avatar and Title */}
            <Image source={{ uri: parentAvatarUrl }} style={styles.profileHeaderAvatar} />
            <Text style={styles.profileHeaderTitle}>Parent Profile</Text>
          </View>

          {/* Settings Cog */}
          <TouchableOpacity activeOpacity={0.7} style={styles.settingsHeaderButton}>
            <Settings size={22} color="#0F172A" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Scrollable Content */}
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: safeBottomInset + 90 }, // Extra space for bottom bar
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Main Info Card */}
        <View style={styles.profileCard}>
          <View style={styles.profileMainAvatarContainer}>
            <View style={styles.profileAvatarOuterRing}>
              <Image source={{ uri: parentAvatarUrl }} style={styles.profileMainAvatar} />
            </View>
          </View>

          {/* Profile Details */}
          <Text style={styles.profileCardName}>{parentName}</Text>
          
          <View style={styles.roleBadgeContainer}>
            <Text style={styles.roleBadgeText}>Primary Guardian</Text>
          </View>

          <Text style={styles.profileCardEmail}>{parentEmail}</Text>
          
          <View style={styles.profileDivider} />

          <View style={styles.profilePhoneRow}>
            <Text style={styles.profilePhoneText}>📞  +1 234 567 890</Text>
          </View>

          <TouchableOpacity activeOpacity={0.8} style={styles.editProfileBtn}>
            <Text style={styles.editProfileBtnText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Your Children section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Your Children</Text>
          
          {/* Child 1 */}
          <TouchableOpacity activeOpacity={0.8} style={styles.childItemRow}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80' }}
              style={styles.childAvatar}
            />
            <View style={styles.childInfoWrapper}>
              <Text style={styles.childNameText}>Aria Sharma</Text>
              <Text style={styles.childDescText}>Grade 6 • Oakcreek Middle</Text>
            </View>
            <ChevronRight size={18} color="#94A3B8" />
          </TouchableOpacity>

          {/* Child 2 */}
          <TouchableOpacity activeOpacity={0.8} style={styles.childItemRow}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80' }}
              style={styles.childAvatar}
            />
            <View style={styles.childInfoWrapper}>
              <Text style={styles.childNameText}>Leo Thompson</Text>
              <Text style={styles.childDescText}>Grade 3 • Oakcreek Elem.</Text>
            </View>
            <ChevronRight size={18} color="#94A3B8" />
          </TouchableOpacity>
        </View>

        {/* Contact Details Card */}
        <View style={styles.sectionContainer}>
          <View style={styles.contactCardContainer}>
            <Text style={styles.contactCardTitle}>Contact Details</Text>

            {/* Home Address */}
            <View style={styles.contactItemRow}>
              <View style={styles.contactIconCircle}>
                <MapPin size={18} color="#475569" />
              </View>
              <View style={styles.contactTextWrapper}>
                <Text style={styles.contactItemLabel}>Home Address</Text>
                <Text style={styles.contactItemValue}>
                  123 Meadow Lane, Apt 4B{"\n"}Springfield, IL 62704
                </Text>
              </View>
            </View>

            <View style={styles.contactItemDivider} />

            {/* Emergency Contact */}
            <View style={styles.contactItemRow}>
              <View style={[styles.contactIconCircle, { backgroundColor: '#FEE2E2' }]}>
                <Asterisk size={18} color="#EF4444" strokeWidth={3} />
              </View>
              <View style={styles.contactTextWrapper}>
                <Text style={[styles.contactItemLabel, { color: '#EF4444' }]}>Emergency Contact</Text>
                <Text style={styles.contactItemValue}>
                  Sarah Thompson (Spouse){"\n"}+1 987 654 321
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Settings Links */}
        <View style={styles.settingsMenuContainer}>
          {/* Notification Preferences */}
          <TouchableOpacity activeOpacity={0.7} style={styles.settingsMenuRow}>
            <View style={styles.settingsMenuLeft}>
              <Bell size={20} color="#334155" />
              <Text style={styles.settingsMenuText}>Notification Preferences</Text>
            </View>
            <ChevronRight size={18} color="#94A3B8" />
          </TouchableOpacity>

          {/* Privacy Settings */}
          <TouchableOpacity activeOpacity={0.7} style={styles.settingsMenuRow}>
            <View style={styles.settingsMenuLeft}>
              <Shield size={20} color="#334155" />
              <Text style={styles.settingsMenuText}>Privacy Settings</Text>
            </View>
            <ChevronRight size={18} color="#94A3B8" />
          </TouchableOpacity>

          {/* Password & Security */}
          <TouchableOpacity activeOpacity={0.7} style={styles.settingsMenuRow}>
            <View style={styles.settingsMenuLeft}>
              <KeyRound size={20} color="#334155" />
              <Text style={styles.settingsMenuText}>Password & Security</Text>
            </View>
            <ChevronRight size={18} color="#94A3B8" />
          </TouchableOpacity>

          {/* Help & Support */}
          <TouchableOpacity activeOpacity={0.7} style={[styles.settingsMenuRow, { borderBottomWidth: 0 }]}>
            <View style={styles.settingsMenuLeft}>
              <HelpCircle size={20} color="#334155" />
              <Text style={styles.settingsMenuText}>Help & Support</Text>
            </View>
            <ChevronRight size={18} color="#94A3B8" />
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity onPress={onLogoutPress} activeOpacity={0.8} style={styles.profileLogoutBtn}>
          <LogOut size={18} color="#EF4444" style={styles.logoutIcon} />
          <Text style={styles.profileLogoutBtnText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewWrapper: {
    flex: 1,
  },
  header: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  backButton: {
    padding: 6,
    marginRight: 12,
  },
  profileHeaderAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    resizeMode: 'cover',
    marginRight: 12,
  },
  profileHeaderTitle: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 20,
    color: '#0F172A',
  },
  settingsHeaderButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F1F5F9',
    marginBottom: 26,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.02,
    shadowRadius: 12,
    elevation: 2,
  },
  profileMainAvatarContainer: {
    marginBottom: 16,
  },
  profileAvatarOuterRing: {
    width: 104,
    height: 104,
    borderRadius: 52,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#F8FAFC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  profileMainAvatar: {
    width: '100%',
    height: '100%',
    borderRadius: 48,
    resizeMode: 'cover',
  },
  profileCardName: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 24,
    color: '#0F172A',
    textAlign: 'center',
  },
  roleBadgeContainer: {
    backgroundColor: '#E6F4F1',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 100,
    marginTop: 8,
  },
  roleBadgeText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    color: '#0F766E',
  },
  profileCardEmail: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#64748B',
    marginTop: 8,
  },
  profileDivider: {
    width: '100%',
    height: 1,
    backgroundColor: '#F1F5F9',
    marginVertical: 18,
  },
  profilePhoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  profilePhoneText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 15,
    color: '#334155',
  },
  editProfileBtn: {
    backgroundColor: '#0F172A',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editProfileBtnText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 15,
    color: '#FFFFFF',
  },
  sectionContainer: {
    marginBottom: 30,
  },
  sectionHeader: {
    fontFamily: 'Inter_700Bold',
    fontSize: 12,
    color: '#64748B',
    letterSpacing: 1.2,
    marginBottom: 16,
  },
  childItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    marginBottom: 12,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.02,
    shadowRadius: 10,
    elevation: 2,
  },
  childAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    resizeMode: 'cover',
  },
  childInfoWrapper: {
    flex: 1,
    marginLeft: 14,
  },
  childNameText: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 16,
    color: '#0F172A',
  },
  childDescText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
  },
  contactCardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.02,
    shadowRadius: 12,
    elevation: 2,
  },
  contactCardTitle: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 18,
    color: '#0F172A',
    marginBottom: 16,
  },
  contactItemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 4,
  },
  contactIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  contactTextWrapper: {
    flex: 1,
    marginLeft: 14,
  },
  contactItemLabel: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 13,
    color: '#64748B',
  },
  contactItemValue: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#1E293B',
    marginTop: 4,
    lineHeight: 20,
  },
  contactItemDivider: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginVertical: 16,
  },
  settingsMenuContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    marginBottom: 20,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.02,
    shadowRadius: 12,
    elevation: 2,
  },
  settingsMenuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  settingsMenuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  settingsMenuText: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 15,
    color: '#1E293B',
  },
  profileLogoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEF2F2',
    borderWidth: 1,
    borderColor: '#FECACA',
    borderRadius: 16,
    paddingVertical: 16,
    marginBottom: 20,
  },
  logoutIcon: {
    marginRight: 8,
  },
  profileLogoutBtnText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#EF4444',
  },
});
