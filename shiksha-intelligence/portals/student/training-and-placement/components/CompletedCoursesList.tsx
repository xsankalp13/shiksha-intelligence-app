import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { ChevronDown, ChevronUp, Check } from 'lucide-react-native';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

interface CompletedCourse {
  id: string;
  title: string;
  completedDate: string;
}

interface CompletedCoursesListProps {
  courses: CompletedCourse[];
}

export default function CompletedCoursesList({ courses }: CompletedCoursesListProps) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} activeOpacity={0.7} onPress={toggleExpand}>
        <Text style={styles.headerText}>Completed ({courses.length} courses)</Text>
        {expanded ? <ChevronUp size={16} color="#8a8a9a" /> : <ChevronDown size={16} color="#8a8a9a" />}
      </TouchableOpacity>

      {expanded && (
        <View style={styles.listContainer}>
          {courses.map((course, index) => (
            <View 
              key={course.id} 
              style={[
                styles.courseRow,
                index === courses.length - 1 && styles.lastRow
              ]}
            >
              <View style={styles.leftCol}>
                <View style={styles.checkWrap}>
                  <Check size={12} color="#3ecf8e" />
                </View>
                <Text style={styles.courseTitle}>{course.title}</Text>
              </View>
              <Text style={styles.dateText}>{course.completedDate}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    backgroundColor: '#161618',
    borderRadius: 14,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.05)',
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: 'rgba(255,255,255,0.02)',
  },
  headerText: {
    color: '#8a8a9a',
    fontSize: 14,
    fontWeight: '500',
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  courseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  leftCol: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
    paddingRight: 12,
  },
  checkWrap: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(62,207,142,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  courseTitle: {
    color: '#d4d4d8',
    fontSize: 13,
  },
  dateText: {
    color: '#55555f',
    fontSize: 12,
  },
});
