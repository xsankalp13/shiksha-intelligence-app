import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { ChevronLeft, SlidersHorizontal, Search, Mic, Sparkles, X, ChevronDown, Briefcase, Monitor, Cloud, Database, Cpu } from 'lucide-react-native';
import { useRouter } from 'expo-router';

import BottomNav from '../components/BottomNav';
import JobsFilterChip from '../components/JobsFilterChip';
import ExpandableJobCard from '../components/ExpandableJobCard';
import JobsBottomSheet from '../components/JobsBottomSheet';

interface JobsScreenProps {
  safeTopInset: number;
  safeBottomInset: number;
}

const mockJobs = [
  {
    id: '1',
    company: 'Stripe',
    role: 'Backend Engineer',
    badge: 'New' as const,
    matchPercent: 96,
    workType: 'Remote',
    location: 'Bangalore',
    experience: '1–3 yrs',
    salary: '₹28–36 LPA',
    logo: <Text style={{ color: '#4fa3f7', fontWeight: 'bold', fontSize: 18 }}>S</Text>,
    logoBgColor: 'rgba(79,163,247,0.12)',
    matchReasons: [
      { id: '1', text: 'Your Node.js score ranks top 12% for this role' },
      { id: '2', text: 'Strong overlap in distributed systems experience' },
      { id: '3', text: 'Company actively hiring from your college' }
    ],
    aboutRole: 'Stripe is looking for a backend engineer to build and scale our core payment infrastructure. You will work on high-throughput, low-latency systems that process billions of dollars in transactions daily.',
    skills: ['Node.js', 'PostgreSQL', 'System Design', 'Redis'],
    recruiterSignal: 'Priya from Stripe viewed your profile',
    isSaved: false,
  },
  {
    id: '2',
    company: 'Linear',
    role: 'Product Engineer',
    matchPercent: 91,
    workType: 'Remote',
    location: 'Remote',
    experience: 'Fresher',
    salary: '₹22–30 LPA',
    logo: <Monitor size={18} color="#7c6ef7" />,
    logoBgColor: 'rgba(124,110,247,0.12)',
    matchReasons: [
      { id: '1', text: 'React & TypeScript skills match 100% of requirements' },
      { id: '2', text: 'Open source contributions align with team culture' }
    ],
    aboutRole: 'Join Linear to build the new standard for software development tools. As a product engineer, you will own features end-to-end and work closely with design.',
    skills: ['React', 'TypeScript', 'GraphQL', 'MobX'],
    isSaved: true,
  },
  {
    id: '3',
    company: 'Vercel',
    role: 'Infra Engineer',
    badge: 'Closing soon' as const,
    matchPercent: 88,
    workType: 'Hybrid',
    location: 'Remote',
    experience: '3–5 yrs',
    salary: '₹30–45 LPA',
    logo: <Cloud size={18} color="#ffffff" />,
    logoBgColor: 'rgba(255,255,255,0.1)',
    matchReasons: [
      { id: '1', text: 'Experience with Kubernetes matches core requirement' },
      { id: '2', text: 'High assessment score in Cloud Architecture' }
    ],
    aboutRole: 'Help build the next generation of serverless infrastructure. You will be responsible for scaling our edge network and compute platforms.',
    skills: ['Go', 'Kubernetes', 'AWS', 'Rust'],
    isSaved: false,
  },
  {
    id: '4',
    company: 'Supabase',
    role: 'Database Engineer',
    matchPercent: 84,
    workType: 'Remote',
    location: 'Remote',
    experience: '1–3 yrs',
    salary: '₹25–35 LPA',
    logo: <Database size={18} color="#3ecf8e" />,
    logoBgColor: 'rgba(62,207,142,0.1)',
    matchReasons: [
      { id: '1', text: 'Strong PostgreSQL knowledge demonstrated in assessments' }
    ],
    aboutRole: 'Work on the open-source Firebase alternative. You will optimize Postgres internals and build tools for managing databases at scale.',
    skills: ['PostgreSQL', 'C', 'Go', 'Performance Tuning'],
    isSaved: true,
  },
  {
    id: '5',
    company: 'Zepto',
    role: 'Backend SDE-1',
    matchPercent: 79,
    workType: 'On-site',
    location: 'Mumbai',
    experience: 'Fresher',
    salary: '₹18–24 LPA',
    logo: <Text style={{ color: '#d4a847', fontWeight: 'bold', fontSize: 18 }}>Z</Text>,
    logoBgColor: 'rgba(212,168,71,0.1)',
    matchReasons: [
      { id: '1', text: 'Python and Django skills match perfectly' }
    ],
    aboutRole: 'Build hyper-local delivery systems. You will handle supply chain optimization and rider routing algorithms.',
    skills: ['Python', 'Django', 'Kafka', 'PostgreSQL'],
    recruiterSignal: 'Hiring manager reviewed your application',
    isSaved: false,
  }
];

const FILTERS = ['All', 'Best Match', 'Remote', 'Product', 'Infra', 'Startup', '₹20L+'];

export default function JobsScreen({ safeTopInset, safeBottomInset }: JobsScreenProps) {
  const router = useRouter();
  
  const [activeTab, setActiveTab] = useState<'all' | 'saved'>('all');
  const [activeFilter, setActiveFilter] = useState('Best Match');
  const [showMatchBanner, setShowMatchBanner] = useState(true);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Filter jobs based on active tab
  const displayJobs = activeTab === 'saved' ? mockJobs.filter(j => j.isSaved) : mockJobs;

  // Render Empty State
  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Briefcase size={40} color="#55555f" />
      <Text style={styles.emptyTitle}>No jobs match these filters</Text>
      <Text style={styles.emptySub}>Try adjusting your filters or broaden your search</Text>
      <TouchableOpacity style={styles.resetBtnEmpty}>
        <Text style={styles.resetBtnEmptyText}>Reset filters</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={[styles.header, { marginTop: Math.max(safeTopInset, 10) }]}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <ChevronLeft size={24} color="#ffffff" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Jobs</Text>

        <TouchableOpacity style={styles.filterBtn} onPress={() => setBottomSheetVisible(true)}>
          <SlidersHorizontal size={20} color="#ffffff" />
          <View style={styles.filterDot} />
        </TouchableOpacity>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: safeBottomInset + 100 }}
        stickyHeaderIndices={[5]}
      >
        {/* 0. TOGGLE */}
        <View style={styles.toggleContainer}>
          <View style={styles.togglePill}>
            <TouchableOpacity 
              style={[styles.toggleBtn, activeTab === 'all' && styles.toggleBtnActive]}
              onPress={() => setActiveTab('all')}
            >
              <Text style={[styles.toggleText, activeTab === 'all' && styles.toggleTextActive]}>All Jobs</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.toggleBtn, activeTab === 'saved' && styles.toggleBtnActive]}
              onPress={() => setActiveTab('saved')}
            >
              <Text style={[styles.toggleText, activeTab === 'saved' && styles.toggleTextActive]}>Saved</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 1. SEARCH BAR */}
        <View style={styles.searchSection}>
          <View style={[styles.searchBar, isSearchFocused && styles.searchBarFocused]}>
            <Search size={18} color="#8a8a9a" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search roles, companies, skills…"
              placeholderTextColor="#55555f"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            <Mic size={18} color="#8a8a9a" />
          </View>
        </View>

        {/* 1. FILTER CHIPS */}
        <View style={styles.filtersSection}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterScroll}>
            {FILTERS.map(f => (
              <JobsFilterChip 
                key={f} 
                label={f} 
                isActive={activeFilter === f} 
                onPress={() => {
                  setActiveFilter(f);
                  if (f === 'Best Match') setShowMatchBanner(true);
                }} 
              />
            ))}
          </ScrollView>
        </View>

        {/* 2. MATCH QUALITY BANNER */}
        <View>
          {activeFilter === 'Best Match' && showMatchBanner && activeTab === 'all' && (
            <View style={styles.bannerContainer}>
              <View style={styles.matchBanner}>
                <View style={styles.bannerLeft}>
                  <Sparkles size={14} color="#7c6ef7" />
                  <Text style={styles.bannerText}>Showing 124 jobs matched to your profile · Updated 2h ago</Text>
                </View>
                <TouchableOpacity onPress={() => setShowMatchBanner(false)}>
                  <X size={16} color="#7c6ef7" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>

        {/* 3. SAVED JOBS BANNER */}
        <View>
          {activeTab === 'saved' && (
            <View style={styles.bannerContainer}>
              <View style={styles.savedBanner}>
                <Text style={styles.savedBannerText}>You have 2 saved jobs · 1 closing in 48h</Text>
              </View>
            </View>
          )}
        </View>

        {/* 4. STICKY SORT BAR */}
        <View style={styles.stickySortWrap}>
          <View style={styles.stickySortBar}>
            <TouchableOpacity style={styles.sortBtn} onPress={() => setBottomSheetVisible(true)}>
              <Text style={styles.sortText}>Sort: Best Match</Text>
              <ChevronDown size={16} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* 5. JOB LISTINGS */}
        <View style={styles.jobsList}>
          {displayJobs.length > 0 ? (
            displayJobs.map((job) => (
              <View key={job.id} style={activeTab === 'saved' && job.badge === 'Closing soon' ? styles.closingSoonAccent : null}>
                <ExpandableJobCard {...job} />
              </View>
            ))
          ) : (
            renderEmptyState()
          )}
        </View>

      </ScrollView>

      <JobsBottomSheet 
        visible={bottomSheetVisible} 
        onClose={() => setBottomSheetVisible(false)} 
        onApply={(f) => console.log('Applied filters:', f)} 
      />

      <BottomNav safeBottomInset={safeBottomInset} activeTab="jobs" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e10',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 8,
  },
  backBtn: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  toggleContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  togglePill: {
    flexDirection: 'row',
    backgroundColor: '#161618',
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.1)',
    padding: 2,
  },
  toggleBtn: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 18,
  },
  toggleBtnActive: {
    backgroundColor: '#242428',
  },
  toggleText: {
    color: '#8a8a9a',
    fontSize: 13,
    fontWeight: '500',
  },
  toggleTextActive: {
    color: '#ffffff',
    fontWeight: '600',
  },
  filterBtn: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#7c6ef7',
    position: 'absolute',
    top: 6,
    right: 4,
  },
  searchSection: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161618',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
  },
  searchBarFocused: {
    borderColor: '#7c6ef7',
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
    color: '#ffffff',
    fontSize: 14,
  },
  filtersSection: {
    marginBottom: 16,
  },
  filterScroll: {
    paddingHorizontal: 16,
  },
  bannerContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  matchBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(124,110,247,0.1)',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(124,110,247,0.3)',
  },
  bannerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  bannerText: {
    color: '#7c6ef7',
    fontSize: 12,
    fontWeight: '500',
  },
  savedBanner: {
    backgroundColor: '#161618',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
  },
  savedBannerText: {
    color: '#8a8a9a',
    fontSize: 12,
    fontWeight: '500',
  },
  stickySortWrap: {
    backgroundColor: '#0e0e10',
    paddingBottom: 8,
  },
  stickySortBar: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  sortBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  sortText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '600',
  },
  jobsList: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  closingSoonAccent: {
    borderLeftWidth: 2,
    borderLeftColor: '#f05c5c',
    borderRadius: 16,
    paddingLeft: 2,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
  },
  emptySub: {
    color: '#8a8a9a',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 24,
  },
  resetBtnEmpty: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'rgba(124,110,247,0.1)',
    borderRadius: 20,
  },
  resetBtnEmptyText: {
    color: '#7c6ef7',
    fontSize: 13,
    fontWeight: '600',
  },
});
