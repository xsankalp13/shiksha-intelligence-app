import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { GraduationCap } from 'lucide-react-native';

interface StudentData {
  id: string;
  name: string;
  grade: string;
  attendance: string;
  homework: string;
  fees: string;
  exams: string;
}

interface StudentDropdownProps {
  visible: boolean;
  onClose: () => void;
  selectedStudent: StudentData;
  onSelectStudent: (student: StudentData) => void;
  students: StudentData[];
}

export default function StudentDropdown({
  visible,
  onClose,
  selectedStudent,
  onSelectStudent,
  students,
}: StudentDropdownProps) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <View style={styles.content}>
            <Text style={styles.title}>Select Student</Text>
            {students.map((student) => (
              <TouchableOpacity
                key={student.id}
                style={[
                  styles.option,
                  selectedStudent.id === student.id && styles.optionSelected,
                ]}
                onPress={() => onSelectStudent(student)}
              >
                <View style={styles.optionMain}>
                  <GraduationCap
                    size={20}
                    color={selectedStudent.id === student.id ? '#0D9488' : '#64748B'}
                  />
                  <View style={styles.optionTextWrapper}>
                    <Text
                      style={[
                        styles.optionName,
                        selectedStudent.id === student.id && styles.optionNameSelected,
                      ]}
                    >
                      {student.name}
                    </Text>
                    <Text style={styles.optionGrade}>{student.grade}</Text>
                  </View>
                </View>
                {selectedStudent.id === student.id && (
                  <View style={styles.selectedIndicatorCircle} />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.4)',
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
    maxHeight: '60%',
  },
  title: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 20,
    color: '#0F172A',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  optionSelected: {
    backgroundColor: '#F0FDF4',
    marginHorizontal: -24,
    paddingHorizontal: 24,
  },
  optionMain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionTextWrapper: {
    marginLeft: 14,
  },
  optionName: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 16,
    color: '#334155',
  },
  optionNameSelected: {
    color: '#0D9488',
    fontFamily: 'PlusJakartaSans_700Bold',
  },
  optionGrade: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
  },
  selectedIndicatorCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#10B981',
    borderWidth: 3,
    borderColor: '#D1FAE5',
  },
});
