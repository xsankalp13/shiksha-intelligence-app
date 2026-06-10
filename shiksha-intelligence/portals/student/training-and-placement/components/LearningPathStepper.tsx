import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Check, Lock } from 'lucide-react-native';

export type StageStatus = 'completed' | 'in-progress' | 'locked';

interface SubModule {
  title: string;
  completed: boolean;
}

export interface PathStage {
  id: string;
  title: string;
  status: StageStatus;
  progress?: number; // for in-progress
  subModules?: SubModule[];
}

interface LearningPathStepperProps {
  stages: PathStage[];
}

export default function LearningPathStepper({ stages }: LearningPathStepperProps) {
  return (
    <View style={styles.container}>
      {stages.map((stage, index) => {
        const isLast = index === stages.length - 1;
        const lineStyle = 
          stage.status === 'completed' ? styles.lineCompleted : 
          stage.status === 'in-progress' ? styles.lineActive : styles.lineLocked;

        return (
          <View key={stage.id} style={styles.stageRow}>
            {/* Left Column: Icon & Line */}
            <View style={styles.leftCol}>
              <View style={[
                styles.node,
                stage.status === 'completed' && styles.nodeCompleted,
                stage.status === 'in-progress' && styles.nodeActive,
                stage.status === 'locked' && styles.nodeLocked,
              ]}>
                {stage.status === 'completed' && <Check size={12} color="#0e0e10" />}
                {stage.status === 'in-progress' && <View style={styles.nodeActiveInner} />}
              </View>
              {!isLast && <View style={[styles.connectorLine, lineStyle]} />}
            </View>

            {/* Right Column: Content */}
            <TouchableOpacity 
              style={styles.contentCol} 
              activeOpacity={0.7}
              disabled={stage.status !== 'in-progress'}
            >
              <View style={styles.headerRow}>
                <Text style={[
                  styles.stageTitle,
                  stage.status === 'locked' && styles.stageTitleLocked
                ]}>
                  {stage.title}
                </Text>
                
                {stage.status === 'completed' && (
                  <View style={styles.badgeCompleted}>
                    <Text style={styles.badgeTextCompleted}>Completed</Text>
                  </View>
                )}
                {stage.status === 'locked' && (
                  <Lock size={14} color="#55555f" />
                )}
              </View>

              {/* Progress bar for active state */}
              {stage.status === 'in-progress' && stage.progress !== undefined && (
                <View style={styles.progressContainer}>
                  <View style={styles.progressTrack}>
                    <View style={[styles.progressFill, { width: `${stage.progress}%` }]} />
                  </View>
                  <Text style={styles.progressText}>{stage.progress}%</Text>
                </View>
              )}

              {/* Submodules for active state */}
              {stage.status === 'in-progress' && stage.subModules && (
                <View style={styles.subModulesList}>
                  {stage.subModules.map((sub, idx) => (
                    <View key={idx} style={styles.subModuleRow}>
                      <View style={[styles.subCheck, sub.completed && styles.subCheckDone]}>
                        {sub.completed && <Check size={10} color="#3ecf8e" />}
                      </View>
                      <Text style={[styles.subTitle, sub.completed && styles.subTitleDone]}>
                        {sub.title}
                      </Text>
                    </View>
                  ))}
                </View>
              )}
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  stageRow: {
    flexDirection: 'row',
  },
  leftCol: {
    width: 32,
    alignItems: 'center',
  },
  node: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  nodeCompleted: {
    backgroundColor: '#3ecf8e',
  },
  nodeActive: {
    borderWidth: 2,
    borderColor: '#7c6ef7',
    backgroundColor: '#0e0e10',
  },
  nodeActiveInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#7c6ef7',
  },
  nodeLocked: {
    borderWidth: 2,
    borderColor: '#333339',
    backgroundColor: '#0e0e10',
  },
  connectorLine: {
    width: 2,
    flex: 1,
    marginTop: -4,
    marginBottom: -4,
  },
  lineCompleted: {
    backgroundColor: '#3ecf8e',
  },
  lineActive: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#7c6ef7',
    backgroundColor: 'transparent',
    width: 1,
  },
  lineLocked: {
    borderStyle: 'dotted',
    borderWidth: 1,
    borderColor: '#333339',
    backgroundColor: 'transparent',
    width: 1,
  },
  contentCol: {
    flex: 1,
    paddingBottom: 30,
    paddingLeft: 8,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  stageTitle: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  stageTitleLocked: {
    color: '#8a8a9a',
  },
  badgeCompleted: {
    backgroundColor: 'rgba(62,207,142,0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeTextCompleted: {
    color: '#3ecf8e',
    fontSize: 10,
    fontWeight: '600',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 4,
    marginBottom: 16,
  },
  progressTrack: {
    flex: 1,
    height: 6,
    backgroundColor: '#1c1c1f',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#7c6ef7',
    borderRadius: 3,
  },
  progressText: {
    color: '#7c6ef7',
    fontSize: 12,
    fontWeight: '600',
    width: 32,
  },
  subModulesList: {
    backgroundColor: '#161618',
    borderRadius: 12,
    padding: 12,
    gap: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  subModuleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  subCheck: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#55555f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subCheckDone: {
    borderColor: '#3ecf8e',
    backgroundColor: 'rgba(62,207,142,0.1)',
  },
  subTitle: {
    color: '#a0a0ab',
    fontSize: 13,
  },
  subTitleDone: {
    color: '#ffffff',
  },
});
