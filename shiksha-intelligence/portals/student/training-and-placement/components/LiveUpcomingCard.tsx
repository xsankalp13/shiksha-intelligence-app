import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Users } from 'lucide-react-native';

export type SessionType = 'live' | 'upcoming' | 'mentor';

interface LiveUpcomingCardProps {
  type: SessionType;
  title: string;
  mentorName: string;
  mentorCredential?: string;
  avatarUrl?: string;
  timeLabel: string;
  topicTag: string;
  durationTag: string;
  attendeeCount: number;
  onPress: () => void;
}

export default function LiveUpcomingCard({
  type, title, mentorName, mentorCredential, avatarUrl, timeLabel, topicTag, durationTag, attendeeCount, onPress
}: LiveUpcomingCardProps) {
  
  const getHeaderColor = () => {
    switch (type) {
      case 'live': return '#f05c5c';
      case 'upcoming': return '#7c6ef7';
      case 'mentor': return '#d4a847';
      default: return '#7c6ef7';
    }
  };

  const getActionText = () => {
    if (type === 'live') return 'Join now';
    return 'Remind me';
  };

  const headerColor = getHeaderColor();

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      <View style={[styles.headerStrip, { backgroundColor: headerColor }]}>
        {type === 'live' ? (
          <View style={styles.liveBadge}>
            <View style={styles.liveDot} />
            <Text style={styles.headerText}>LIVE</Text>
          </View>
        ) : (
          <Text style={styles.headerText}>{timeLabel}</Text>
        )}
      </View>
      
      <View style={styles.avatarWrap}>
        {avatarUrl ? (
           <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        ) : (
           <View style={styles.placeholderAvatar} />
        )}
      </View>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.mentorInfo}>{mentorName} {mentorCredential ? `· ${mentorCredential}` : ''}</Text>
        
        <View style={styles.tagRow}>
          <View style={styles.tag}><Text style={styles.tagText}>{topicTag}</Text></View>
          <View style={styles.tag}><Text style={styles.tagText}>{durationTag}</Text></View>
        </View>

        <View style={styles.bottomRow}>
          <View style={styles.attendeeWrap}>
            <Users size={12} color="#8a8a9a" />
            <Text style={styles.attendeeText}>{attendeeCount} joined</Text>
          </View>
          <View style={[
            styles.actionBtn, 
            type === 'live' ? styles.actionBtnLive : styles.actionBtnUpcoming
          ]}>
            <Text style={[
              styles.actionBtnText, 
              type === 'live' ? styles.actionBtnTextLive : styles.actionBtnTextUpcoming
            ]}>{getActionText()}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 200,
    backgroundColor: '#161618',
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  headerStrip: {
    height: 24,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  liveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ffffff',
  },
  headerText: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  avatarWrap: {
    position: 'absolute',
    top: 10,
    left: 12,
    zIndex: 2,
    padding: 2,
    backgroundColor: '#161618',
    borderRadius: 16,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  placeholderAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#333339',
  },
  content: {
    padding: 12,
    paddingTop: 20, // space for avatar overlap
    gap: 12,
  },
  title: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    height: 40, // fix height for 2 lines
  },
  mentorInfo: {
    color: '#8a8a9a',
    fontSize: 11,
  },
  tagRow: {
    flexDirection: 'row',
    gap: 6,
  },
  tag: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  tagText: {
    color: '#a0a0ab',
    fontSize: 10,
    fontWeight: '500',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(255,255,255,0.05)',
  },
  attendeeWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  attendeeText: {
    color: '#8a8a9a',
    fontSize: 11,
  },
  actionBtn: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },
  actionBtnLive: {
    backgroundColor: 'rgba(240,92,92,0.15)',
  },
  actionBtnUpcoming: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(124,110,247,0.3)',
  },
  actionBtnText: {
    fontSize: 11,
    fontWeight: '600',
  },
  actionBtnTextLive: {
    color: '#f05c5c',
  },
  actionBtnTextUpcoming: {
    color: '#7c6ef7',
  },
});
