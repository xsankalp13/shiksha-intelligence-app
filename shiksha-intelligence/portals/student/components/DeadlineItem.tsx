import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface DeadlineItemProps {
  icon: React.ReactNode;
  iconBgColor: string;
  title: string;
  description: string;
  dueTimeText: string;
  dueSubtext: string;
  isUrgent?: boolean;
  onPress?: () => void;
}

export default function DeadlineItem({
  icon,
  iconBgColor,
  title,
  description,
  dueTimeText,
  dueSubtext,
  isUrgent = false,
  onPress,
}: DeadlineItemProps) {
  const Container = onPress ? TouchableOpacity : View;

  return (
    <Container
      style={styles.card}
      onPress={onPress}
      activeOpacity={onPress ? 0.8 : 1}
    >
      <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
        {icon}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.titleText} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.descText} numberOfLines={1}>
          {description}
        </Text>
      </View>
      <View style={styles.dueContainer}>
        <Text style={[styles.dueText, isUrgent && styles.urgentDueText]}>
          {dueTimeText}
        </Text>
        <Text style={styles.dueSubtext}>
          {dueSubtext}
        </Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 14,
    marginBottom: 10,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.01,
    shadowRadius: 8,
    elevation: 1,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
  },
  titleText: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 15,
    color: '#0F172A',
  },
  descText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#64748B',
    marginTop: 3,
  },
  dueContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginLeft: 8,
  },
  dueText: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 14,
    color: '#0F172A',
  },
  urgentDueText: {
    color: '#EF4444', // Red color for Tomorrow or urgent deadlines
  },
  dueSubtext: {
    fontFamily: 'Inter_400Regular',
    fontSize: 11,
    color: '#64748B',
    marginTop: 3,
  },
});
