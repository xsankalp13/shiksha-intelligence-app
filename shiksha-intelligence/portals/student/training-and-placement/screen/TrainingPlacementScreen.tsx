import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Bell,
  Briefcase,
  Send,
  MessageCircle,
  CheckCircle,
  Monitor,
  Cloud,
  PlayCircle,
  BarChart,
  Code,
  Rocket,
  PenTool,
  Clock,
  GraduationCap,
} from 'lucide-react-native';

import HeroCard from '../components/HeroCard';
import StatsCard from '../components/StatsCard';
import JobCard from '../components/JobCard';
import TrainingItem from '../components/TrainingItem';
import ActivityItem from '../components/ActivityItem';
import AiSuggestionItem from '../components/AiSuggestionItem';
import BottomNav from '../components/BottomNav';

interface TrainingPlacementScreenProps {
  safeTopInset: number;
  safeBottomInset: number;
}

import { useRouter } from 'expo-router';

export default function TrainingPlacementScreen({ safeTopInset, safeBottomInset }: TrainingPlacementScreenProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: safeBottomInset + 100 }}
      >
        {/* TOP BAR */}
        <View style={[styles.topbar, { marginTop: Math.max(safeTopInset, 10) }]}>
          <View style={styles.topbarLeft}>
            <TouchableOpacity 
              activeOpacity={0.8} 
              style={styles.switchPortalBtn}
              onPress={() => router.push('/(protected)/student/home')}
            >
              <View style={styles.switchIconWrap}>
                <GraduationCap size={16} color="#7c6ef7" />
              </View>
              <Text style={styles.switchBtnText}>Switch to Student Portal</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity activeOpacity={0.7} style={styles.notifBtn}>
            <Bell size={18} color="#8a8a9a" />
            <View style={styles.notifDot} />
          </TouchableOpacity>
        </View>

        {/* HERO */}
        <HeroCard
          score={87}
          pointsToNextTier={13}
          nextTierName="Elite"
          nextActionText="Complete your DSA mock test"
          nextActionPoints={6}
          aiSuggestion="Your profile views spiked 3× this week. 4 recruiters from top product companies have shortlisted you — now is the time to apply."
        />

        {/* STATS */}
        <Text style={styles.sectionHeader}>Overview</Text>
        <View style={styles.statsRow}>
          <StatsCard icon={<Briefcase size={18} color="#4fa3f7" />} value="124" label="Jobs Matched" />
          <StatsCard icon={<Send size={18} color="#7c6ef7" />} value="18" label="Applied" />
          <StatsCard icon={<MessageCircle size={18} color="#d4a847" />} value="6" label="Interviews" />
          <StatsCard icon={<CheckCircle size={18} color="#3ecf8e" />} value="2" label="Offers" />
        </View>

        {/* JOBS */}
        <Text style={styles.sectionHeader}>Recommended Jobs</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.jobsScroll}>
          <JobCard
            company="Stripe"
            title="Backend Engineer"
            matchPercentage={96}
            type="Full-time"
            salary="₹28–36 LPA"
            logoBgColor="rgba(79,163,247,0.12)"
            logo={<Text style={{ color: '#4fa3f7', fontWeight: 'bold', fontSize: 18 }}>S</Text>}
          />
          <JobCard
            company="Linear"
            title="Product Engineer"
            matchPercentage={91}
            type="Remote"
            salary="₹22–30 LPA"
            logoBgColor="rgba(124,110,247,0.12)"
            logo={<Monitor size={18} color="#7c6ef7" />}
          />
          <JobCard
            company="Notion"
            title="SWE — Platform"
            matchPercentage={88}
            type="Hybrid"
            salary="₹24–32 LPA"
            logoBgColor="rgba(62,207,142,0.1)"
            logo={<Cloud size={18} color="#3ecf8e" />}
          />
        </ScrollView>

        {/* TRAINING */}
        <Text style={styles.sectionHeader}>Upcoming Training</Text>
        <View style={styles.trainingList}>
          <TrainingItem
            title="System Design Masterclass"
            meta="Mentor: Priya Naik · 60 min"
            time="Today, 7 PM"
            iconBgColor="rgba(240,92,92,0.1)"
            icon={<PlayCircle size={20} color="#f05c5c" />}
            isLive={true}
          />
          <TrainingItem
            title="Mock Interview — DSA Round"
            meta="AI-graded · 45 min"
            time="Tomorrow"
            iconBgColor="rgba(212,168,71,0.1)"
            icon={<BarChart size={20} color="#d4a847" />}
          />
          <TrainingItem
            title="LLM APIs for Engineers"
            meta="Self-paced · 3 modules"
            time="Thu, Jun 12"
            iconBgColor="rgba(124,110,247,0.13)"
            icon={<Code size={20} color="#7c6ef7" />}
          />
        </View>

        {/* ACTIVITY */}
        <Text style={styles.sectionHeader}>Activity Feed</Text>
        <View style={styles.activityList}>
          <ActivityItem
            title="Razorpay moved you to Round 2"
            subtitle="Technical interview scheduled"
            time="2h ago"
            dotColor="#3ecf8e"
          />
          <ActivityItem
            title="Score improved to 87%"
            subtitle="After completing OS module"
            time="Yesterday"
            dotColor="#7c6ef7"
          />
          <ActivityItem
            title="Atlassian viewed your profile"
            subtitle="Via LinkedIn Premium sync"
            time="2d ago"
            dotColor="#d4a847"
          />
          <ActivityItem
            title="New badge earned: DSA Pro"
            subtitle="Top 5% in cohort"
            time="3d ago"
            dotColor="#4fa3f7"
            isLast={true}
          />
        </View>

        {/* AI SUGGESTIONS */}
        <Text style={styles.sectionHeader}>AI Coach Suggestions</Text>
        <View style={styles.aiList}>
          <AiSuggestionItem
            title="Sharpen your GitHub presence"
            subtitle="Recruiters viewed 3 open-source repos. Pin 2 projects and add a live demo link to increase callbacks by ~40%."
            icon={<Rocket size={18} color="#7c6ef7" />}
          />
          <AiSuggestionItem
            title="Rewrite your resume headline"
            subtitle="Your current headline is generic. Tailoring it for backend roles gets 2.3× more recruiter opens."
            icon={<PenTool size={18} color="#7c6ef7" />}
          />
          <AiSuggestionItem
            title="Apply this week — window is closing"
            subtitle="6 of your top matches close in 4 days. Strike while your profile momentum is high."
            icon={<Clock size={18} color="#7c6ef7" />}
          />
        </View>

        <View style={styles.spacer} />
      </ScrollView>

      <BottomNav safeBottomInset={safeBottomInset} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e10',
  },
  topbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  topbarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  switchPortalBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(124,110,247,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(124,110,247,0.3)',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  switchIconWrap: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(124,110,247,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchBtnText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#7c6ef7',
  },
  notifBtn: {
    width: 36,
    height: 36,
    backgroundColor: '#1c1c1f',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.07)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notifDot: {
    width: 7,
    height: 7,
    backgroundColor: '#7c6ef7',
    borderRadius: 3.5,
    position: 'absolute',
    top: 7,
    right: 8,
  },
  sectionHeader: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 10,
    fontSize: 12,
    fontWeight: '600',
    color: '#55555f',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 8,
  },
  jobsScroll: {
    paddingHorizontal: 16,
    gap: 10,
  },
  trainingList: {
    paddingHorizontal: 16,
    gap: 10,
  },
  activityList: {
    paddingHorizontal: 16,
  },
  aiList: {
    paddingHorizontal: 16,
    gap: 10,
  },
  spacer: {
    height: 20,
  },
});
