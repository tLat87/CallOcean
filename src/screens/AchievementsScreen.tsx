import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { commonStyles, colors } from '../utils/styles';
import { OceanBackground } from '../components/OceanBackground';
import { GradientBackButton } from '../components/GradientBackButton';
import { Story } from '../types';

interface AchievementsScreenProps {
  savedStories: Story[];
  onBack: () => void;
  onViewStory: (storyId: string) => void;
}

export const AchievementsScreen: React.FC<AchievementsScreenProps> = ({
  savedStories,
  onBack,
  onViewStory,
}) => {
  const achievements = [
    {
      id: 'first-mission',
      title: '🚀 First Mission',
      description: 'Complete your first space mission',
      unlocked: savedStories.length > 0,
      icon: '🚀'
    },
    {
      id: 'mars-explorer',
      title: '🔴 Mars Explorer',
      description: 'Master Mars mission training',
      unlocked: savedStories.some(story => story.id === 'mars-mission'),
      icon: '🔴'
    },
    {
      id: 'astronomy-expert',
      title: '🔭 Astronomy Expert',
      description: 'Complete all astronomy missions',
      unlocked: savedStories.some(story => story.id === 'solar-system'),
      icon: '🔭'
    },
    {
      id: 'space-engineer',
      title: '🛰️ Space Engineer',
      description: 'Master space technology',
      unlocked: savedStories.some(story => story.id === 'rockets-satellites'),
      icon: '🛰️'
    },
    {
      id: 'cosmic-mystery-solver',
      title: '🌌 Cosmic Mystery Solver',
      description: 'Uncover space mysteries',
      unlocked: savedStories.some(story => story.id === 'black-holes'),
      icon: '🌌'
    },
    {
      id: 'space-commander',
      title: '⭐ Space Commander',
      description: 'Complete all missions',
      unlocked: savedStories.length >= 5,
      icon: '⭐'
    }
  ];

  return (
    <OceanBackground>
      {/* Header */}
      <View style={commonStyles.header}>
        <GradientBackButton onPress={onBack} style={styles.backButton} />
        <Text style={commonStyles.headerTitle}>ACHIEVEMENTS</Text>
      </View>

      {/* Achievements list */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {achievements.map((achievement) => (
          <View
            key={achievement.id}
            style={[
              styles.achievementCard,
              achievement.unlocked ? styles.unlockedCard : styles.lockedCard
            ]}
          >
            <View style={styles.achievementHeader}>
              <Text style={[
                styles.achievementIcon,
                !achievement.unlocked && styles.lockedIcon
              ]}>
                {achievement.icon}
              </Text>
              <View style={styles.achievementInfo}>
                <Text style={[
                  styles.achievementTitle,
                  !achievement.unlocked && styles.lockedText
                ]}>
                  {achievement.title}
                </Text>
                <Text style={[
                  styles.achievementDescription,
                  !achievement.unlocked && styles.lockedText
                ]}>
                  {achievement.description}
                </Text>
              </View>
              <View style={[
                styles.statusBadge,
                achievement.unlocked ? styles.unlockedBadge : styles.lockedBadge
              ]}>
                <Text style={styles.statusText}>
                  {achievement.unlocked ? 'UNLOCKED' : 'LOCKED'}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Progress summary */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressTitle}>MISSION PROGRESS</Text>
        <Text style={styles.progressText}>
          {savedStories.length} of {achievements.length} achievements unlocked
        </Text>
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill, 
              { width: `${(savedStories.length / achievements.length) * 100}%` }
            ]} 
          />
        </View>
      </View>
    </OceanBackground>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  achievementCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    borderWidth: 2,
  },
  unlockedCard: {
    borderColor: colors.yellow,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  lockedCard: {
    borderColor: 'rgba(255, 255, 255, 0.3)',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  achievementHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  achievementIcon: {
    fontSize: 40,
    marginRight: 15,
  },
  lockedIcon: {
    opacity: 0.3,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 20,
    color: colors.yellow,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'CrimsonText-Regular',
  },
  achievementDescription: {
    fontSize: 16,
    color: colors.white,
    fontFamily: 'CrimsonText-Regular',
  },
  lockedText: {
    color: 'rgba(255, 255, 255, 0.5)',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  unlockedBadge: {
    backgroundColor: colors.yellow,
  },
  lockedBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.black,
    fontFamily: 'CrimsonText-Regular',
  },
  progressContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    margin: 20,
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.yellow,
  },
  progressTitle: {
    fontSize: 18,
    color: colors.yellow,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'CrimsonText-Regular',
  },
  progressText: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: 'CrimsonText-Regular',
  },
  progressBar: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.yellow,
    borderRadius: 4,
  },
  backButton: {
    marginRight: 15,
  },
});
