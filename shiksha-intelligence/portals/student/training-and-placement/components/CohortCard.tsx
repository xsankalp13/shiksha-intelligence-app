import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MessageCircle, Trophy } from 'lucide-react-native';

interface PeerActivity {
  id: string;
  avatarUrl?: string;
  name: string;
  action: string;
  time: string;
  emoji: string;
}

interface CohortCardProps {
  cohortName: string;
  memberCount: number;
  currentUserRank: number;
  currentUserPoints: number;
  topPeers: { name: string; avatarUrl?: string; points: number }[];
  challengeTitle: string;
  challengeTimeLeft: string;
  activities: PeerActivity[];
}

export default function CohortCard({
  cohortName, memberCount, currentUserRank, currentUserPoints, topPeers, challengeTitle, challengeTimeLeft, activities
}: CohortCardProps) {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.cohortName}>{cohortName}</Text>
          <Text style={styles.memberCount}>{memberCount} members</Text>
        </View>
        <TouchableOpacity style={styles.chatBtn}>
          <MessageCircle size={16} color="#7c6ef7" />
        </TouchableOpacity>
      </View>

      {/* Leaderboard Strip */}
      <View style={styles.leaderboardStrip}>
        <View style={styles.topThreeRow}>
          {topPeers.map((peer, idx) => (
            <View key={idx} style={styles.peerCol}>
              <View style={styles.peerAvatarWrap}>
                {peer.avatarUrl ? (
                  <Image source={{ uri: peer.avatarUrl }} style={styles.peerAvatar} />
                ) : (
                  <View style={styles.placeholderAvatar} />
                )}
                <View style={styles.rankBadge}>
                  <Text style={styles.rankText}>{idx + 1}</Text>
                </View>
              </View>
              <Text style={styles.peerPoints}>{peer.points} pts</Text>
            </View>
          ))}
        </View>
        <View style={styles.myRankRow}>
          <Text style={styles.myRankText}>You — Rank {currentUserRank} · {currentUserPoints} pts</Text>
        </View>
      </View>

      {/* Weekly Challenge */}
      <View style={styles.challengeRow}>
        <View style={styles.challengeContent}>
          <Trophy size={14} color="#d4a847" />
          <Text style={styles.challengeText}>
            This week: <Text style={styles.challengeBold}>{challengeTitle}</Text> · {challengeTimeLeft}
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.joinText}>Join →</Text>
        </TouchableOpacity>
      </View>

      {/* Activity Feed */}
      <View style={styles.activityFeed}>
        {activities.map((activity) => (
          <View key={activity.id} style={styles.activityItem}>
            {activity.avatarUrl ? (
              <Image source={{ uri: activity.avatarUrl }} style={styles.activityAvatar} />
            ) : (
              <View style={styles.activityAvatarPlaceholder} />
            )}
            <Text style={styles.activityText} numberOfLines={1}>
              <Text style={styles.activityName}>{activity.name}</Text> {activity.action} {activity.emoji}
            </Text>
            <Text style={styles.activityTime}>{activity.time}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    backgroundColor: '#161618',
    borderRadius: 14,
    padding: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cohortName: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  memberCount: {
    color: '#8a8a9a',
    fontSize: 12,
    marginTop: 2,
  },
  chatBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(124,110,247,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leaderboardStrip: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  topThreeRow: {
    flexDirection: 'row',
    gap: 16,
  },
  peerCol: {
    alignItems: 'center',
    gap: 6,
  },
  peerAvatarWrap: {
    position: 'relative',
  },
  peerAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  placeholderAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#333339',
  },
  rankBadge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    backgroundColor: '#333339',
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#161618',
  },
  rankText: {
    color: '#ffffff',
    fontSize: 9,
    fontWeight: '700',
  },
  peerPoints: {
    color: '#8a8a9a',
    fontSize: 10,
  },
  myRankRow: {
    backgroundColor: 'rgba(124,110,247,0.1)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  myRankText: {
    color: '#7c6ef7',
    fontSize: 12,
    fontWeight: '600',
  },
  challengeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(212,168,71,0.1)',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  challengeContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
    paddingRight: 10,
  },
  challengeText: {
    color: '#d4a847',
    fontSize: 12,
  },
  challengeBold: {
    fontWeight: '600',
  },
  joinText: {
    color: '#d4a847',
    fontSize: 12,
    fontWeight: '600',
  },
  activityFeed: {
    gap: 12,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  activityAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  activityAvatarPlaceholder: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#333339',
  },
  activityText: {
    color: '#a0a0ab',
    fontSize: 12,
    flex: 1,
  },
  activityName: {
    color: '#d4d4d8',
    fontWeight: '500',
  },
  activityTime: {
    color: '#55555f',
    fontSize: 11,
  },
});
