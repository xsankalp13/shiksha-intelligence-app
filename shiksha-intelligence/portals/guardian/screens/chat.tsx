import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import {
  Search,
  ArrowLeft,
  Send,
  CheckCheck,
  MoreVertical,
  MessageSquare,
  Plus,
  Smile,
  FileText,
  GraduationCap,
} from 'lucide-react-native';
import CommunicationDashboard from '../components/chat/CommunicationDashboard';
import { images } from '@/constants/images';

const { width } = Dimensions.get('window');

interface Message {
  id: string;
  sender: 'parent' | 'other';
  text?: string;
  timestamp: string;
  type?: 'text' | 'pdf' | 'image';
  fileName?: string;
  fileSize?: string;
  imageUrl?: string;
}

interface ChatThread {
  id: string;
  name: string;
  role: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  online: boolean;
  messages: Message[];
}

const INITIAL_THREADS: ChatThread[] = [
  {
    id: '1',
    name: 'Mr. Sharma',
    role: 'Mathematics',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastMessage: "Rahul's performance in the rec...",
    time: '9:41 AM',
    unreadCount: 2,
    online: true,
    messages: [
      { id: '1-1', sender: 'parent', text: 'Hello Mr. Sharma, is Rahul doing okay in mathematics?', timestamp: '9:15 AM', type: 'text' },
      { id: '1-2', sender: 'other', text: 'Good morning! Yes, Rahul is doing very well. He participated actively in today\'s quiz.', timestamp: '9:20 AM', type: 'text' },
      { id: '1-3', sender: 'parent', text: 'That\'s great to hear. I noticed he had some pending homework. I will make sure he completes it tonight.', timestamp: '10:05 AM', type: 'text' },
      { id: '1-4', sender: 'other', text: "Rahul's performance in the rec...", timestamp: '10:24 AM', type: 'text' },
    ],
  },
  {
    id: '2',
    name: 'Ms. Anjali',
    role: 'Science',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastMessage: "We've already started gathering some materials!",
    time: '09:48 AM',
    unreadCount: 0,
    online: true,
    messages: [
      {
        id: '2-1',
        sender: 'other',
        text: 'Hello! I wanted to share the science project guidelines we discussed.',
        timestamp: '09:41 AM',
        type: 'text'
      },
      {
        id: '2-2',
        sender: 'other',
        timestamp: '09:42 AM',
        type: 'pdf',
        fileName: 'Assignment_Guidelines.pdf',
        fileSize: '1.2 MB'
      },
      {
        id: '2-3',
        sender: 'parent',
        text: 'Thank you, Ms. Anjali. We will review this tonight.',
        timestamp: '09:45 AM',
        type: 'text'
      },
      {
        id: '2-4',
        sender: 'parent',
        timestamp: '09:48 AM',
        type: 'image',
        imageUrl: 'scienceProject'
      },
      {
        id: '2-5',
        sender: 'parent',
        text: "We've already started gathering some materials!",
        timestamp: '09:48 AM',
        type: 'text'
      }
    ],
  },
  {
    id: '3',
    name: 'School Administration',
    role: '',
    avatar: '',
    lastMessage: 'Fee receipt for Q3 has been generate...',
    time: 'Mon',
    unreadCount: 0,
    online: false,
    messages: [
      { id: '3-1', sender: 'other', text: 'Fee receipt for Q3 has been generated. You can check it under the finance desk or Academics report card.', timestamp: 'Mon', type: 'text' },
    ],
  },
];

interface ChatScreenProps {
  safeTopInset: number;
  safeBottomInset: number;
  parentAvatarUrl: string;
  onAvatarPress: () => void;
  onThreadActiveStateChange?: (active: boolean) => void;
}

export default function ChatScreen({
  safeTopInset,
  safeBottomInset,
  parentAvatarUrl,
  onAvatarPress,
  onThreadActiveStateChange,
}: ChatScreenProps) {
  const [threads, setThreads] = useState<ChatThread[]>(INITIAL_THREADS);
  const [selectedThreadId, setSelectedThreadId] = useState<string | null>(null);
  const [inputText, setInputText] = useState('');

  const activeThread = threads.find((t) => t.id === selectedThreadId);

  const handleSelectThread = (threadId: string) => {
    setSelectedThreadId(threadId);
    if (onThreadActiveStateChange) {
      onThreadActiveStateChange(true);
    }
    // Mark as read
    setThreads((prevThreads) =>
      prevThreads.map((t) => (t.id === threadId ? { ...t, unreadCount: 0 } : t))
    );
  };

  const handleSendMessage = () => {
    if (!inputText.trim() || !selectedThreadId) return;

    const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMessage: Message = {
      id: `${selectedThreadId}-${Date.now()}`,
      sender: 'parent',
      text: inputText.trim(),
      timestamp: timeString,
      type: 'text',
    };

    setThreads((prevThreads) =>
      prevThreads.map((t) => {
        if (t.id === selectedThreadId) {
          return {
            ...t,
            lastMessage: newMessage.text || '',
            time: 'Just Now',
            messages: [...t.messages, newMessage],
          };
        }
        return t;
      })
    );

    setInputText('');
  };

  return (
    <View style={styles.viewWrapper}>
      {activeThread ? (
        // Chat Thread View
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.keyboardContainer}
        >
          {/* Header */}
          <View style={[styles.header, { paddingTop: Math.max(safeTopInset, 12) }]}>
            <View style={styles.headerContent}>
              <TouchableOpacity
                onPress={() => {
                  setSelectedThreadId(null);
                  if (onThreadActiveStateChange) {
                    onThreadActiveStateChange(false);
                  }
                }}
                style={styles.backButton}
                activeOpacity={0.7}
              >
                <ArrowLeft size={24} color="#0F172A" />
              </TouchableOpacity>

              {activeThread.avatar ? (
                <View style={styles.headerAvatarContainer}>
                  <Image source={{ uri: activeThread.avatar }} style={styles.threadAvatar} />
                  {activeThread.online && <View style={styles.headerOnlineIndicator} />}
                </View>
              ) : (
                <View style={styles.headerAvatarContainer}>
                  <View style={styles.headerCustomAvatarBg}>
                    <GraduationCap size={20} color="#0D9488" />
                  </View>
                  {activeThread.online && <View style={styles.headerOnlineIndicator} />}
                </View>
              )}
              
              <View style={styles.headerTitleContainer}>
                <Text style={styles.threadName} numberOfLines={1}>
                  {activeThread.name} {activeThread.role ? `- ${activeThread.role}` : ''}
                </Text>
                <Text style={styles.threadStatus}>
                  {activeThread.online ? 'Online' : 'Offline'}
                </Text>
              </View>

              <TouchableOpacity style={styles.headerMenuButton} activeOpacity={0.7}>
                <MoreVertical size={20} color="#64748B" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Messages ScrollView */}
          <ScrollView
            style={styles.messageScroll}
            contentContainerStyle={styles.messageListContainer}
            ref={(ref) => {
              // Auto scroll to bottom
              setTimeout(() => ref?.scrollToEnd({ animated: false }), 50);
            }}
          >
            <View style={styles.encryptionBadge}>
              <Text style={styles.encryptionText}>🔒 End-to-end encrypted. Tap for info.</Text>
            </View>

            {/* Today Pill */}
            <View style={styles.dateDivider}>
              <View style={styles.dateDividerPill}>
                <Text style={styles.dateDividerText}>Today</Text>
              </View>
            </View>

            {activeThread.messages.map((msg) => {
              const isMe = msg.sender === 'parent';
              return (
                <View
                  key={msg.id}
                  style={[
                    styles.messageBubbleWrapper,
                    isMe ? styles.myBubbleWrapper : styles.theirBubbleWrapper,
                  ]}
                >
                  {msg.type === 'pdf' ? (
                    <View
                      style={[
                        styles.messageBubble,
                        isMe ? styles.myBubble : styles.theirBubble,
                        styles.pdfBubble,
                      ]}
                    >
                      <View style={styles.pdfContentRow}>
                        <View style={styles.pdfIconContainer}>
                          <FileText size={20} color="#EF4444" />
                        </View>
                        <View style={styles.pdfMetaContainer}>
                          <Text style={styles.pdfFileName} numberOfLines={1}>
                            {msg.fileName}
                          </Text>
                          <Text style={styles.pdfFileSize}>
                            {msg.fileSize} • PDF
                          </Text>
                        </View>
                      </View>
                      <View style={styles.messageFooter}>
                        <Text style={[styles.messageTime, isMe ? styles.myMessageTime : styles.theirMessageTime]}>
                          {msg.timestamp}
                        </Text>
                      </View>
                    </View>
                  ) : msg.type === 'image' ? (
                    <View style={styles.imageBubbleContainer}>
                      <Image
                        source={msg.imageUrl === 'scienceProject' ? images.scienceProject : { uri: msg.imageUrl }}
                        style={styles.bubbleImage}
                      />
                      <View style={styles.imageOverlayFooter}>
                        <Text style={styles.imageOverlayTime}>
                          {msg.timestamp}
                        </Text>
                        {isMe && <CheckCheck size={12} color="#FFFFFF" style={styles.checkIcon} />}
                      </View>
                    </View>
                  ) : (
                    <View
                      style={[
                        styles.messageBubble,
                        isMe ? styles.myBubble : styles.theirBubble,
                      ]}
                    >
                      <Text style={[styles.messageText, isMe ? styles.myMessageText : styles.theirMessageText]}>
                        {msg.text}
                      </Text>
                      <View style={styles.messageFooter}>
                        <Text style={[styles.messageTime, isMe ? styles.myMessageTime : styles.theirMessageTime]}>
                          {msg.timestamp}
                        </Text>
                        {isMe && <CheckCheck size={12} color="#38BDF8" style={styles.checkIcon} />}
                      </View>
                    </View>
                  )}
                </View>
              );
            })}

            {/* Typing Indicator for Ms. Anjali */}
            {activeThread.id === '2' && (
              <View style={[styles.messageBubbleWrapper, styles.theirBubbleWrapper]}>
                <View style={[styles.messageBubble, styles.theirBubble, styles.typingBubble]}>
                  <View style={styles.typingDotsContainer}>
                    <View style={styles.typingDot} />
                    <View style={styles.typingDot} />
                    <View style={styles.typingDot} />
                  </View>
                </View>
              </View>
            )}
          </ScrollView>

          {/* Message Input Footer */}
          <View style={[styles.inputFooter, { paddingBottom: Math.max(safeBottomInset, 16) }]}>
            <View style={styles.inputContainer}>
              <TouchableOpacity style={styles.inputActionButton} activeOpacity={0.7}>
                <Plus size={22} color="#64748B" />
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.inputActionButton} activeOpacity={0.7}>
                <Smile size={22} color="#64748B" />
              </TouchableOpacity>
              
              <TextInput
                style={styles.textInput}
                placeholder="Type a message..."
                placeholderTextColor="#94A3B8"
                value={inputText}
                onChangeText={setInputText}
                multiline
              />

              <TouchableOpacity
                style={[
                  styles.sendButton,
                  !inputText.trim() && styles.sendButtonDisabled,
                ]}
                onPress={handleSendMessage}
                disabled={!inputText.trim()}
                activeOpacity={0.8}
              >
                <Send size={16} color="#FFFFFF" style={styles.sendIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      ) : (
        <CommunicationDashboard
          parentAvatarUrl={parentAvatarUrl}
          safeTopInset={safeTopInset}
          safeBottomInset={safeBottomInset}
          threads={threads}
          onSelectThread={handleSelectThread}
          onAvatarPress={onAvatarPress}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  viewWrapper: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  keyboardContainer: {
    flex: 1,
  },
  container: {
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
  },
  headerContentList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 6,
    marginRight: 4,
  },
  headerAvatarContainer: {
    position: 'relative',
    marginRight: 10,
  },
  threadAvatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    resizeMode: 'cover',
  },
  headerCustomAvatarBg: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#E6F4F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerOnlineIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#10B981',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  headerTitleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  threadName: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 15,
    color: '#0F172A',
  },
  threadStatus: {
    fontFamily: 'Inter_500Medium',
    fontSize: 11,
    color: '#10B981',
    marginTop: 1,
  },
  headerMenuButton: {
    padding: 6,
  },
  dateDivider: {
    alignItems: 'center',
    marginVertical: 16,
  },
  dateDividerPill: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  dateDividerText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    color: '#3B82F6',
  },
  listHeaderTitle: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 22,
    color: '#0F172A',
    paddingVertical: 4,
  },
  composeButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#F8FAFC',
  },
  searchSection: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 16,
    paddingHorizontal: 14,
    height: 46,
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
  scrollContentList: {
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  threadItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    marginBottom: 12,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.02,
    shadowRadius: 10,
    elevation: 2,
  },
  threadAvatarWrapper: {
    position: 'relative',
  },
  threadListAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
  },
  threadOnlineIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#10B981',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  threadDetails: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'center',
  },
  threadMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  threadListName: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 15,
    color: '#0F172A',
  },
  threadListTime: {
    fontFamily: 'Inter_400Regular',
    fontSize: 11,
    color: '#94A3B8',
  },
  threadListRole: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    color: '#0D9488',
    marginTop: 2,
  },
  threadListMsg: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#64748B',
    marginTop: 4,
  },
  unreadBadge: {
    backgroundColor: '#0D9488',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  unreadBadgeText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 10,
    color: '#FFFFFF',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#94A3B8',
  },
  messageScroll: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  messageListContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
  },
  encryptionBadge: {
    alignSelf: 'center',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginBottom: 20,
  },
  encryptionText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 11,
    color: '#B45309',
  },
  messageBubbleWrapper: {
    flexDirection: 'row',
    marginBottom: 16,
    width: '100%',
  },
  myBubbleWrapper: {
    justifyContent: 'flex-end',
  },
  theirBubbleWrapper: {
    justifyContent: 'flex-start',
  },
  messageBubble: {
    maxWidth: width * 0.75,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 18,
  },
  myBubble: {
    backgroundColor: '#0F172A',
    borderBottomRightRadius: 4,
  },
  theirBubble: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  pdfBubble: {
    width: 240,
    padding: 12,
  },
  pdfContentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  pdfIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#FEE2E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pdfMetaContainer: {
    flex: 1,
    marginLeft: 10,
  },
  pdfFileName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 13,
    color: '#1E293B',
  },
  pdfFileSize: {
    fontFamily: 'Inter_400Regular',
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
  },
  imageBubbleContainer: {
    width: 220,
    height: 220,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  bubbleImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageOverlayFooter: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  imageOverlayTime: {
    fontFamily: 'Inter_400Regular',
    fontSize: 10,
    color: '#FFFFFF',
  },
  typingBubble: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    width: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  typingDotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  typingDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#94A3B8',
    marginHorizontal: 1.5,
  },
  messageText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 20,
  },
  myMessageText: {
    color: '#FFFFFF',
  },
  theirMessageText: {
    color: '#1E293B',
  },
  messageFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 4,
  },
  messageTime: {
    fontFamily: 'Inter_400Regular',
    fontSize: 10,
  },
  myMessageTime: {
    color: '#94A3B8',
  },
  theirMessageTime: {
    color: '#94A3B8',
  },
  checkIcon: {
    marginLeft: 4,
  },
  inputFooter: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 24,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  inputActionButton: {
    padding: 6,
    marginRight: 2,
  },
  textInput: {
    flex: 1,
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#0F172A',
    maxHeight: 100,
    minHeight: 36,
    paddingHorizontal: 8,
    paddingTop: Platform.OS === 'ios' ? 8 : 4,
    paddingBottom: Platform.OS === 'ios' ? 8 : 4,
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#0D9488',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: '#94A3B8',
  },
  sendIcon: {
    marginLeft: 2,
  },
});
