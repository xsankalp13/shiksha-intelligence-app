import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import TrainingHeader from '../components/TrainingHeader';
import ContinuityBanner from '../components/ContinuityBanner';
import TrainingFilterChips from '../components/TrainingFilterChips';
import LiveUpcomingCard, { SessionType } from '../components/LiveUpcomingCard';
import LearningPathStepper, { PathStage } from '../components/LearningPathStepper';
import CourseCatalogCard, { Difficulty } from '../components/CourseCatalogCard';
import CohortCard from '../components/CohortCard';
import CompletedCoursesList from '../components/CompletedCoursesList';
import GamificationLayer from '../components/GamificationLayer';
import CourseDetailBottomSheet from '../components/CourseDetailBottomSheet';
import BottomNav from '../components/BottomNav';
import { Text } from 'react-native';

interface TrainingScreenProps {
  safeTopInset: number;
  safeBottomInset: number;
}

export default function TrainingScreen({ safeTopInset, safeBottomInset }: TrainingScreenProps) {
  const router = useRouter();

  const [activeFilter, setActiveFilter] = useState('All');
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  // Mock Data
  const learningStages: PathStage[] = [
    { id: '1', title: 'Stage 1: Foundation', status: 'completed' },
    {
      id: '2',
      title: 'Stage 2: DSA & Problem Solving',
      status: 'in-progress',
      progress: 42,
      subModules: [
        { title: 'Arrays & Strings', completed: true },
        { title: 'Linked Lists & Trees', completed: true },
        { title: 'Dynamic Programming', completed: false },
      ]
    },
    { id: '3', title: 'Stage 3: System Design', status: 'locked' },
    { id: '4', title: 'Stage 4: Mock Interviews', status: 'locked' },
    { id: '5', title: 'Stage 5: Offer Negotiation', status: 'locked' },
  ];

  const courseCatalog = [
    { id: 'c1', title: 'DSA Bootcamp', instructor: 'Priya Naik', moduleCount: 12, totalDuration: '14h 20m', difficulty: 'Beginner' as Difficulty, progress: 42, iconType: 'terminal' as const },
    { id: 'c2', title: 'System Design Fundamentals', instructor: 'Arjun Reddy', moduleCount: 8, totalDuration: '6h 45m', difficulty: 'Intermediate' as Difficulty, iconType: 'layers' as const },
    { id: 'c3', title: 'Behavioural Interviews', instructor: 'Sarah Lee', moduleCount: 4, totalDuration: '2h 10m', difficulty: 'Beginner' as Difficulty, isCompleted: true, iconType: 'play' as const },
    { id: 'c4', title: 'LLM APIs for Engineers', instructor: 'Samir Jain', moduleCount: 5, totalDuration: '4h', difficulty: 'Advanced' as Difficulty, isNew: true, iconType: 'code' as const },
    { id: 'c5', title: 'OS & Networking', instructor: 'Kiran Desai', moduleCount: 10, totalDuration: '9h', difficulty: 'Intermediate' as Difficulty, iconType: 'layers' as const },
    { id: 'c6', title: 'Resume & Portfolio Craft', instructor: 'Anita Rao', moduleCount: 3, totalDuration: '1h 30m', difficulty: 'Beginner' as Difficulty, iconType: 'document' as const },
  ];

  const cohortActivities = [
    { id: 'a1', name: 'Rahul', action: 'completed System Design', time: '1h ago', emoji: '🎉', avatarUrl: 'https://i.pravatar.cc/100?img=11' },
    { id: 'a2', name: 'Sneha', action: 'started Mock Interviews', time: '3h ago', emoji: '🔥', avatarUrl: 'https://i.pravatar.cc/100?img=5' },
    { id: 'a3', name: 'Vikram', action: 'earned DSA Pro badge', time: '5h ago', emoji: '🏆', avatarUrl: 'https://i.pravatar.cc/100?img=8' },
  ];

  const completedCourses = [
    { id: 'p1', title: 'Frontend Basics', completedDate: 'May 14, 2026' },
    { id: 'p2', title: 'Git & Version Control', completedDate: 'Apr 28, 2026' },
    { id: 'p3', title: 'Behavioural Interviews', completedDate: 'Apr 10, 2026' },
  ];

  // For bottom sheet dummy data
  const selectedCourseModules = [
    { id: 'm1', title: 'Introduction to Distributed Systems', duration: '45m', isLocked: false },
    { id: 'm2', title: 'Load Balancing & Caching', duration: '1h 10m', isLocked: false },
    { id: 'm3', title: 'Database Sharding Strategies', duration: '1h 30m', isLocked: true },
    { id: 'm4', title: 'CAP Theorem in Practice', duration: '50m', isLocked: true },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: safeBottomInset + 100 }}
      >
        <View style={{ paddingTop: Math.max(safeTopInset, 10) }}>
          <TrainingHeader
            streakCount={14}
            onBack={() => router.back()}
            onStreakPress={() => { }}
          />
        </View>

        <ContinuityBanner
          courseTitle="Module 3 of 6"
          progressText="42% complete"
          onResume={() => { }}
        />

        <TrainingFilterChips
          activeFilter={activeFilter}
          onFilterSelect={setActiveFilter}
        />

        {/* Live & Upcoming Section */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionLabel}>Live & Upcoming</Text>
          <TouchableOpacity><Text style={styles.seeAllText}>See all →</Text></TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
          <LiveUpcomingCard
            type="live"
            title="System Design"
            mentorName="Priya Naik"
            mentorCredential="Ex-Google, 6 YOE"
            timeLabel="LIVE"
            topicTag="Sys Design"
            durationTag="90m"
            attendeeCount={34}
            onPress={() => { }}
            avatarUrl="https://i.pravatar.cc/100?img=9"
          />
          <LiveUpcomingCard
            type="upcoming"
            title="Mock Interview — DSA"
            mentorName="AI-graded"
            timeLabel="Starts in 2h 14m"
            topicTag="DSA"
            durationTag="45m"
            attendeeCount={120}
            onPress={() => { }}
          />
          <LiveUpcomingCard
            type="upcoming"
            title="LLM APIs Masterclass"
            mentorName="Samir Jain"
            mentorCredential="AI Lead"
            timeLabel="Starts tomorrow"
            topicTag="AI/ML"
            durationTag="60m"
            attendeeCount={85}
            onPress={() => { }}
            avatarUrl="https://i.pravatar.cc/100?img=12"
          />
          <LiveUpcomingCard
            type="mentor"
            title="AMA with Engineering Manager"
            mentorName="Vikram S"
            mentorCredential="10 YOE"
            timeLabel="Thu, 7 PM"
            topicTag="Career"
            durationTag="45m"
            attendeeCount={56}
            onPress={() => { }}
            avatarUrl="https://i.pravatar.cc/100?img=14"
          />
        </ScrollView>

        {/* My Learning Path */}
        <View style={[styles.sectionHeaderRow, styles.mt24]}>
          <Text style={styles.sectionLabel}>Your path to placement</Text>
          <TouchableOpacity><Text style={styles.seeAllText}>Customize →</Text></TouchableOpacity>
        </View>
        <LearningPathStepper stages={learningStages} />

        {/* Course Catalog */}
        <View style={[styles.sectionHeaderRow, styles.mt24]}>
          <Text style={styles.sectionLabel}>Explore Courses</Text>
        </View>
        <View style={styles.courseList}>
          {courseCatalog.map((course) => (
            <CourseCatalogCard
              key={course.id}
              {...course}
              onPress={() => setBottomSheetVisible(true)}
            />
          ))}
        </View>

        {/* Cohort & Social Layer */}
        <View style={[styles.sectionHeaderRow, styles.mt24]}>
          <Text style={styles.sectionLabel}>Your Cohort</Text>
        </View>
        <CohortCard
          cohortName="Batch 47 — Pune"
          memberCount={128}
          currentUserRank={14}
          currentUserPoints={87}
          topPeers={[
            { name: 'Aman', points: 120, avatarUrl: 'https://i.pravatar.cc/100?img=11' },
            { name: 'Priya', points: 115, avatarUrl: 'https://i.pravatar.cc/100?img=5' },
            { name: 'Karan', points: 105, avatarUrl: 'https://i.pravatar.cc/100?img=8' }
          ]}
          challengeTitle="Complete 2 mock interviews"
          challengeTimeLeft="3 days left"
          activities={cohortActivities}
        />

        {/* Completed Courses */}
        <View style={styles.mt32}>
          <CompletedCoursesList courses={completedCourses} />
        </View>

        {/* Gamification Layer */}
        <View style={styles.mt32}>
          <GamificationLayer
            streakDays={14}
            timeRemaining="6h 22m"
            weekProgress={[true, true, false, true, false, false, false]}
            currentXP={1240}
            nextLevelXP={1500}
            currentLevel={8}
            nextLevel={9}
          />
        </View>
      </ScrollView>

      <CourseDetailBottomSheet
        visible={bottomSheetVisible}
        onClose={() => setBottomSheetVisible(false)}
        title="System Design Fundamentals"
        instructor="Arjun Reddy · Ex-Amazon"
        rating={4.8}
        enrolledCount={1240}
        description="Master the art of designing scalable, reliable, and maintainable large-scale systems. This course covers everything from basic load balancing to advanced database sharding and caching strategies used by top tech companies."
        learningPoints={[
          "Understand CAP theorem and distributed consensus",
          "Design scalable microservices architectures",
          "Master database scaling: sharding, replication",
          "Tackle real-world interview problems (e.g., Design URL Shortener)"
        ]}
        modules={selectedCourseModules}
        prerequisites={["Basic Backend Knowledge", "Databases 101"]}
      />

      <BottomNav safeBottomInset={safeBottomInset} activeTab="training" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e10',
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#55555f',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  seeAllText: {
    color: '#7c6ef7',
    fontSize: 12,
  },
  horizontalScroll: {
    paddingHorizontal: 16,
    gap: 12,
  },
  mt24: {
    marginTop: 24,
  },
  mt32: {
    marginTop: 32,
  },
  courseList: {
    paddingHorizontal: 0,
  },
});
