import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export type MessageType = 'user' | 'ai' | 'typing';

export interface ChatMessage {
  id: string;
  type: MessageType;
  text?: string;
  time?: string;
  isFirstInSequence?: boolean;
  structuredContent?: React.ReactNode;
}

const TypingIndicator = () => {
  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animateDot = (dot: Animated.Value, delay: number) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(dot, {
            toValue: 1,
            duration: 300,
            delay,
            useNativeDriver: true,
          }),
          Animated.timing(dot, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.delay(400),
        ])
      ).start();
    };

    animateDot(dot1, 0);
    animateDot(dot2, 150);
    animateDot(dot3, 300);
  }, [dot1, dot2, dot3]);

  return (
    <View style={styles.typingContainer}>
      <Animated.View style={[styles.typingDot, { opacity: dot1 }]} />
      <Animated.View style={[styles.typingDot, { opacity: dot2 }]} />
      <Animated.View style={[styles.typingDot, { opacity: dot3 }]} />
    </View>
  );
};

const MessageBubble = ({ message }: { message: ChatMessage }) => {
  if (message.type === 'typing') {
    return (
      <View style={styles.aiMessageWrapper}>
        {message.isFirstInSequence && (
          <LinearGradient colors={['#4b3a9e', '#2c1e6d']} style={styles.smallAvatar} />
        )}
        <View style={styles.aiBubble}>
          <TypingIndicator />
        </View>
      </View>
    );
  }

  if (message.type === 'user') {
    return (
      <View style={styles.userMessageWrapper}>
        <View style={styles.userBubble}>
          <Text style={styles.userText}>{message.text}</Text>
        </View>
        <Text style={styles.userTime}>{message.time}</Text>
      </View>
    );
  }

  return (
    <View style={styles.aiMessageWrapper}>
      {message.isFirstInSequence && (
        <LinearGradient colors={['#4b3a9e', '#2c1e6d']} style={styles.smallAvatar} />
      )}
      <View style={[styles.aiBubble, !message.isFirstInSequence && styles.aiBubbleIndent]}>
        {message.text && <Text style={styles.aiText}>{message.text}</Text>}
        {message.structuredContent && (
          <View style={styles.structuredCard}>
            {message.structuredContent}
          </View>
        )}
      </View>
      <Text style={[styles.aiTime, !message.isFirstInSequence && styles.aiBubbleIndent]}>{message.time}</Text>
    </View>
  );
};

interface ChatInterfaceProps {
  messages: ChatMessage[];
}

export default function ChatInterface({ messages }: ChatInterfaceProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} style={styles.loadMoreBtn}>
        <Text style={styles.loadMoreText}>Load earlier messages</Text>
      </TouchableOpacity>
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
    </View>
  );
}

import { TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  loadMoreBtn: {
    alignSelf: 'center',
    paddingVertical: 16,
  },
  loadMoreText: {
    fontSize: 12,
    color: '#8a8a9a',
    fontWeight: '500',
  },
  userMessageWrapper: {
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  userBubble: {
    backgroundColor: 'rgba(124,110,247,0.15)',
    borderWidth: 0.5,
    borderColor: '#7c6ef7',
    borderRadius: 14,
    borderTopRightRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 10,
    maxWidth: '75%',
  },
  userText: {
    fontSize: 13,
    color: '#ffffff',
    lineHeight: 18,
  },
  userTime: {
    fontSize: 10,
    color: '#8a8a9a',
    marginTop: 4,
  },
  aiMessageWrapper: {
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  smallAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginBottom: 4,
  },
  aiBubble: {
    backgroundColor: '#1c1c1f',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.1)',
    borderRadius: 14,
    borderTopLeftRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 12,
    maxWidth: '85%',
  },
  aiBubbleIndent: {
    marginLeft: 0,
  },
  aiText: {
    fontSize: 13,
    color: '#ffffff',
    lineHeight: 20.8, // 1.6 * 13
  },
  aiTime: {
    fontSize: 10,
    color: '#8a8a9a',
    marginTop: 4,
  },
  typingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    height: 18,
    paddingHorizontal: 4,
  },
  typingDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#7c6ef7',
  },
  structuredCard: {
    marginTop: 12,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.05)',
  },
});
