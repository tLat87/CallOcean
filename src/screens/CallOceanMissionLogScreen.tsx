import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { OceanBackground } from '../components/CallOceanOceanBackground';
import { GradientBackButton } from '../components/CallOceanGradientBackButton';
import { commonStyles, colors } from '../utils/CallOceanStyles';

interface MissionLogScreenProps {
  onBack: () => void;
  onGoToMissions: () => void;
}

export const MissionLogScreen: React.FC<MissionLogScreenProps> = ({ onBack, onGoToMissions }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const missionCategories = [
    {
      id: 'all',
      title: 'All Missions',
      icon: '⭐',
      color: colors.yellow
    },
    {
      id: 'space-exploration',
      title: 'Space Exploration',
      icon: '🚀',
      color: '#ff6b6b'
    },
    {
      id: 'astronomy',
      title: 'Astronomy',
      icon: '🔭',
      color: '#4ecdc4'
    },
    {
      id: 'space-technology',
      title: 'Space Technology',
      icon: '🛰️',
      color: '#45b7d1'
    },
    {
      id: 'space-mysteries',
      title: 'Space Mysteries',
      icon: '🌌',
      color: '#96ceb4'
    }
  ];

  const missions = [
    {
      id: 'mars-mission',
      title: 'Mars Mission Training',
      category: 'space-exploration',
      difficulty: 'Advanced',
      description: 'Prepare for humanity\'s greatest adventure - the journey to Mars. Learn about the challenges of space travel and life support systems.',
      status: 'available',
      progress: 0
    },
    {
      id: 'solar-system',
      title: 'Solar System Wonders',
      category: 'astronomy',
      difficulty: 'Beginner',
      description: 'Explore our cosmic neighborhood and discover the incredible diversity of planets, moons, and celestial bodies.',
      status: 'available',
      progress: 0
    },
    {
      id: 'rockets-satellites',
      title: 'Rockets & Satellites',
      category: 'space-technology',
      difficulty: 'Intermediate',
      description: 'Learn about the incredible engineering behind space technology - from powerful rockets to satellites.',
      status: 'available',
      progress: 0
    },
    {
      id: 'black-holes',
      title: 'Black Holes: Cosmic Vacuum',
      category: 'space-mysteries',
      difficulty: 'Expert',
      description: 'Dive into the mysterious world of black holes - regions where gravity is so strong that nothing can escape.',
      status: 'locked',
      progress: 0
    },
    {
      id: 'alien-life',
      title: 'Search for Alien Life',
      category: 'space-mysteries',
      difficulty: 'Advanced',
      description: 'Explore the possibility of life beyond Earth and discover how scientists hunt for extraterrestrial life.',
      status: 'locked',
      progress: 0
    },
    {
      id: 'dark-matter',
      title: 'Dark Matter Mystery',
      category: 'space-mysteries',
      difficulty: 'Expert',
      description: 'Uncover the greatest mystery in modern physics - dark matter that makes up most of the universe\'s mass.',
      status: 'locked',
      progress: 0
    }
  ];

  const filteredMissions = selectedCategory === 'all' 
    ? missions 
    : missions.filter(mission => mission.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return colors.yellow;
      case 'locked':
        return 'rgba(255, 255, 255, 0.3)';
      case 'completed':
        return '#4ecdc4';
      default:
        return colors.yellow;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return '#4ecdc4';
      case 'Intermediate':
        return colors.yellow;
      case 'Advanced':
        return '#ff6b6b';
      case 'Expert':
        return '#9b59b6';
      default:
        return colors.yellow;
    }
  };

  return (
    <OceanBackground>
      {/* Header */}
      <View style={styles.header}>
        <GradientBackButton onPress={onBack} style={styles.backButton} />
        <Text style={styles.headerTitle}>MISSION LOG</Text>
      </View>

      {/* Category filter */}
      <ScrollView 
        horizontal 
        style={styles.categoryContainer} 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryContent}
      >
        {missionCategories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.id && styles.selectedCategoryButton
            ]}
            onPress={() => setSelectedCategory(category.id)}
          >
            <Text style={styles.categoryIcon}>{category.icon}</Text>
            <Text style={[
              styles.categoryTitle,
              selectedCategory === category.id && styles.selectedCategoryTitle
            ]}>
              {category.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Missions list */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {filteredMissions.map((mission) => (
          <TouchableOpacity
            key={mission.id}
            style={[
              styles.missionCard,
              mission.status === 'locked' && styles.lockedMissionCard
            ]}
            onPress={() => mission.status !== 'locked' && onGoToMissions()}
            disabled={mission.status === 'locked'}
          >
            <View style={styles.missionHeader}>
              <View style={styles.missionInfo}>
                <Text style={[
                  styles.missionTitle,
                  mission.status === 'locked' && styles.lockedText
                ]}>
                  {mission.title}
                </Text>
                <View style={styles.missionMeta}>
                  <View style={[
                    styles.difficultyBadge,
                    { backgroundColor: getDifficultyColor(mission.difficulty) }
                  ]}>
                    <Text style={styles.difficultyText}>{mission.difficulty}</Text>
                  </View>
                  <View style={[
                    styles.statusBadge,
                    { backgroundColor: getStatusColor(mission.status) }
                  ]}>
                    <Text style={styles.statusText}>
                      {mission.status.toUpperCase()}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Text style={[
              styles.missionDescription,
              mission.status === 'locked' && styles.lockedText
            ]}>
              {mission.description}
            </Text>
            {mission.status === 'locked' && (
              <View style={styles.lockOverlay}>
                <Text style={styles.lockText}>🔒 LOCKED</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </OceanBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    color: colors.yellow,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    fontFamily: 'CrimsonText-Regular',
  },
  backButton: {
    marginRight: 15,
  },
  categoryContainer: {
    maxHeight: 80,
    marginBottom: 20,
  },
  categoryContent: {
    paddingHorizontal: 20,
  },
  categoryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    alignItems: 'center',
    minWidth: 100,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  selectedCategoryButton: {
    borderColor: colors.yellow,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  categoryIcon: {
    fontSize: 20,
    marginBottom: 5,
  },
  categoryTitle: {
    fontSize: 12,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'CrimsonText-Regular',
  },
  selectedCategoryTitle: {
    color: colors.yellow,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  missionCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    position: 'relative',
  },
  lockedMissionCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  missionHeader: {
    marginBottom: 10,
  },
  missionInfo: {
    flex: 1,
  },
  missionTitle: {
    fontSize: 20,
    color: colors.yellow,
    fontWeight: 'bold',
    marginBottom: 8,
    fontFamily: 'CrimsonText-Regular',
  },
  missionMeta: {
    flexDirection: 'row',
    gap: 10,
  },
  difficultyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  difficultyText: {
    fontSize: 12,
    color: colors.black,
    fontWeight: 'bold',
    fontFamily: 'CrimsonText-Regular',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  statusText: {
    fontSize: 12,
    color: colors.black,
    fontWeight: 'bold',
    fontFamily: 'CrimsonText-Regular',
  },
  missionDescription: {
    fontSize: 16,
    color: colors.white,
    lineHeight: 22,
    fontFamily: 'CrimsonText-Regular',
  },
  lockedText: {
    color: 'rgba(255, 255, 255, 0.5)',
  },
  lockOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lockText: {
    fontSize: 18,
    color: colors.yellow,
    fontWeight: 'bold',
    fontFamily: 'CrimsonText-Regular',
  },
});
