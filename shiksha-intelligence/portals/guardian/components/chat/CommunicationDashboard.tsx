import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Bell, Search, Calendar, GraduationCap, MessageSquare } from 'lucide-react-native';

const { width } = Dimensions.get('window');

interface ChatThread {
  id: string;
  name: string;
  role: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  online: boolean;
  isCustomAvatar?: boolean;
}

interface CommunicationDashboardProps {
  parentAvatarUrl: string;
  safeTopInset: number;
  safeBottomInset: number;
  threads: ChatThread[];
  onSelectThread: (threadId: string) => void;
  onAvatarPress?: () => void;
}

export default function CommunicationDashboard({
  parentAvatarUrl,
  safeTopInset,
  safeBottomInset,
  threads,
  onSelectThread,
  onAvatarPress,
}: CommunicationDashboardProps) {
  const [activeSegment, setActiveSegment] = useState<'messages' | 'announcements'>('messages');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter threads based on query and rename/align with Mr. Sharma, Ms. Davis, School Administration
  const displayThreads = threads.map(thread => {
    // Make sure threads are mapped to fit Mr. Sharma, Ms. Davis, School Admin exactly
    if (thread.id === '1') {
      return {
        ...thread,
        name: 'Mr. Sharma',
        role: 'Mathematics',
        time: '9:41 AM',
        unreadCount: 2,
        online: true,
        lastMessage: "Rahul's performance in the rec...",
      };
    }
    if (thread.id === '2') {
      return {
        ...thread,
        name: 'Ms. Anjali',
        role: 'Science',
        time: '09:48 AM',
        unreadCount: 0,
        online: true,
        lastMessage: "We've already started gathering some materials!",
      };
    }
    if (thread.id === '3') {
      return {
        ...thread,
        name: 'School Administration',
        role: '',
        time: 'Mon',
        unreadCount: 0,
        online: false,
        lastMessage: 'Fee receipt for Q3 has been generate...',
        isCustomAvatar: true,
      };
    }
    return thread;
  });

  const filteredThreads = displayThreads.filter(
    (t) =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: Math.max(safeTopInset, 12) }]}>
        <View style={styles.headerContent}>
          {/* Parent Avatar */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.avatarContainer}
            onPress={onAvatarPress}
          >
            <Image source={{ uri: parentAvatarUrl }} style={styles.avatarImage} />
          </TouchableOpacity>

          {/* Title */}
          <Text style={styles.headerTitle}>Shiksha Intelligence</Text>

          {/* Notification Bell */}
          <TouchableOpacity activeOpacity={0.7} style={styles.bellButton}>
            <View style={styles.bellWrapper}>
              <Bell size={24} color="#0F172A" strokeWidth={2} />
              <View style={styles.bellBadge} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Scrollable Content */}
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: safeBottomInset + 100 }, // Leave room for bottom tab bar
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Title */}
        <Text style={styles.pageTitle}>Communication</Text>

        {/* Search Bar */}
        <View style={styles.searchSection}>
          <View style={styles.searchContainer}>
            <Search size={20} color="#64748B" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search teachers, subjects, or announc"
              placeholderTextColor="#94A3B8"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* Messages / Announcements Segmented Switcher */}
        <View style={styles.switcherContainer}>
          <View style={styles.switcherBg}>
            <TouchableOpacity
              style={[
                styles.switcherButton,
                activeSegment === 'messages' && styles.switcherButtonActive,
              ]}
              onPress={() => setActiveSegment('messages')}
              activeOpacity={0.9}
            >
              <Text
                style={[
                  styles.switcherText,
                  activeSegment === 'messages' && styles.switcherTextActive,
                ]}
              >
                Messages
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.switcherButton,
                activeSegment === 'announcements' && styles.switcherButtonActive,
              ]}
              onPress={() => setActiveSegment('announcements')}
              activeOpacity={0.9}
            >
              <Text
                style={[
                  styles.switcherText,
                  activeSegment === 'announcements' && styles.switcherTextActive,
                ]}
              >
                Announcements
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {activeSegment === 'messages' ? (
          <>
            {/* School Notices Section */}
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionHeader}>SCHOOL NOTICES</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.viewAllText}>View All</Text>
              </TouchableOpacity>
            </View>

            {/* Upcoming Event Card */}
            <TouchableOpacity
              style={styles.noticeCard}
              activeOpacity={0.9}
              onPress={() => setActiveSegment('announcements')}
            >
              <View style={styles.upcomingBadge}>
                <Calendar size={12} color="#FFFFFF" style={styles.calendarIcon} />
                <Text style={styles.upcomingBadgeText}>Upcoming</Text>
              </View>
              <Text style={styles.noticeTitle}>Annual Sports Day</Text>
              <Text style={styles.noticeDesc} numberOfLines={1}>
                Join us for a day of athletic excellence and fun. All pare...
              </Text>
            </TouchableOpacity>

            {/* Recent Conversations Section */}
            <Text style={styles.sectionHeader}>RECENT CONVERSATIONS</Text>

            {/* Conversation List */}
            <View style={styles.conversationsList}>
              {filteredThreads.map((thread) => {
                const hasStripe = thread.id === '1'; // Mr. Sharma has the teal/cyan vertical stripe
                const isTimeTeal = thread.id === '1'; // Time is green/teal for Mr. Sharma

                return (
                  <TouchableOpacity
                    key={thread.id}
                    style={[
                      styles.threadCard,
                      hasStripe && styles.threadCardWithStripe,
                    ]}
                    onPress={() => onSelectThread(thread.id)}
                    activeOpacity={0.8}
                  >
                    <View style={styles.threadCardContent}>
                      {/* Left Side: Avatar */}
                      <View style={styles.avatarWrapper}>
                        {thread.isCustomAvatar ? (
                          <View style={styles.customAvatarBg}>
                            <GraduationCap size={24} color="#0D9488" />
                          </View>
                        ) : (
                          <Image source={{ uri: thread.avatar }} style={styles.threadAvatar} />
                        )}
                        {thread.online && <View style={styles.onlineStatusDot} />}
                      </View>

                      {/* Middle: Name, Role, Msg */}
                      <View style={styles.threadDetails}>
                        <View style={styles.nameRow}>
                          <Text style={styles.threadName} numberOfLines={1}>
                            {thread.name}
                            {thread.role ? ` - ${thread.role}` : ''}
                          </Text>
                          <Text
                            style={[
                              styles.threadTime,
                              isTimeTeal && styles.threadTimeTeal,
                            ]}
                          >
                            {thread.time}
                          </Text>
                        </View>
                        
                        <View style={styles.msgRow}>
                          <Text style={styles.lastMsgText} numberOfLines={1}>
                            {thread.lastMessage}
                          </Text>
                          {thread.unreadCount > 0 && (
                            <View style={styles.unreadBadge}>
                              <Text style={styles.unreadBadgeText}>
                                {thread.unreadCount}
                              </Text>
                            </View>
                          )}
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}

              {filteredThreads.length === 0 && (
                <View style={styles.emptyContainer}>
                  <Text style={styles.emptyText}>No recent conversations</Text>
                </View>
              )}
            </View>
          </>
        ) : (
          /* Announcements Tab View */
          <View style={styles.announcementsContainer}>
            <Text style={styles.sectionHeader}>LATEST ANNOUNCEMENTS</Text>
            
            <View style={styles.announcementCard}>
              <View style={styles.announcementHeader}>
                <View style={styles.announcementBadge}>
                  <Text style={styles.announcementBadgeText}>Urgent</Text>
                </View>
                <Text style={styles.announcementTime}>Today, 10:30 AM</Text>
              </View>
              <Text style={styles.announcementTitle}>Annual Sports Meet Details</Text>
              <Text style={styles.announcementBody}>
                The Annual Sports Meet is scheduled for this Friday. All students must wear their complete house sports uniforms. Parents are invited to attend from 9:00 AM onwards in the main stadium field.
              </Text>
            </View>

            <View style={styles.announcementCard}>
              <View style={styles.announcementHeader}>
                <View style={[styles.announcementBadge, { backgroundColor: '#EFF6FF' }]}>
                  <Text style={[styles.announcementBadgeText, { color: '#2563EB' }]}>General</Text>
                </View>
                <Text style={styles.announcementTime}>Yesterday</Text>
              </View>
              <Text style={styles.announcementTitle}>Parent Teacher Meeting (PTM)</Text>
              <Text style={styles.announcementBody}>
                The midterm Parent Teacher Meeting (PTM) will be conducted on October 25th in the primary campus. Slot bookings can be made directly under the academics tab starting tomorrow morning.
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#F1F5F9',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerTitle: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 18,
    color: '#0F172A',
  },
  bellButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#F8FAFC',
  },
  bellWrapper: {
    position: 'relative',
  },
  bellBadge: {
    position: 'absolute',
    top: 1,
    right: 2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  pageTitle: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 20,
    color: '#0F172A',
    marginBottom: 16,
    marginTop: 4,
  },
  searchSection: {
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 100,
    paddingHorizontal: 16,
    height: 48,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#0F172A',
    height: '100%',
  },
  switcherContainer: {
    marginBottom: 24,
  },
  switcherBg: {
    flexDirection: 'row',
    backgroundColor: '#E8EFFE',
    borderRadius: 14,
    padding: 4,
    height: 48,
  },
  switcherButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  switcherButtonActive: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  switcherText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#64748B',
  },
  switcherTextActive: {
    fontFamily: 'Inter_700Bold',
    color: '#0F172A',
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionHeader: {
    fontFamily: 'Inter_700Bold',
    fontSize: 12,
    color: '#64748B',
    letterSpacing: 1.2,
    marginBottom: 12,
  },
  viewAllText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 12,
    color: '#0D9488',
  },
  noticeCard: {
    backgroundColor: '#111A2E',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  upcomingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00A3A0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 100,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  calendarIcon: {
    marginRight: 4,
  },
  upcomingBadgeText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 11,
    color: '#FFFFFF',
  },
  noticeTitle: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 22,
    color: '#FFFFFF',
    marginBottom: 6,
  },
  noticeDesc: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#94A3B8',
    lineHeight: 18,
  },
  conversationsList: {
    gap: 12,
    marginBottom: 20,
  },
  threadCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 6,
    elevation: 1,
  },
  threadCardWithStripe: {
    borderLeftWidth: 4,
    borderLeftColor: '#0D9488',
  },
  threadCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarWrapper: {
    position: 'relative',
    marginRight: 14,
  },
  threadAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    resizeMode: 'cover',
  },
  customAvatarBg: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#ECFDF5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  onlineStatusDot: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#10B981',
    borderWidth: 2.5,
    borderColor: '#FFFFFF',
  },
  threadDetails: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 4,
  },
  threadName: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 15,
    color: '#0F172A',
    flex: 1,
    marginRight: 8,
  },
  threadTime: {
    fontFamily: 'Inter_400Regular',
    fontSize: 11,
    color: '#94A3B8',
  },
  threadTimeTeal: {
    color: '#0D9488',
    fontFamily: 'Inter_700Bold',
  },
  msgRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastMsgText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 13,
    color: '#64748B',
    flex: 1,
    marginRight: 8,
  },
  unreadBadge: {
    backgroundColor: '#0D9488',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unreadBadgeText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 10,
    color: '#FFFFFF',
  },
  emptyContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#94A3B8',
  },
  announcementsContainer: {
    gap: 16,
    marginTop: 8,
  },
  announcementCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 6,
    elevation: 1,
  },
  announcementHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  announcementBadge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  announcementBadgeText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 11,
    color: '#D97706',
  },
  announcementTime: {
    fontFamily: 'Inter_400Regular',
    fontSize: 11,
    color: '#94A3B8',
  },
  announcementTitle: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 15,
    color: '#0F172A',
    marginBottom: 6,
  },
  announcementBody: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#64748B',
    lineHeight: 18,
  },
});
