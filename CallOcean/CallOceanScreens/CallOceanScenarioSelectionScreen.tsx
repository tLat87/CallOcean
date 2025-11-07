import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';
import { commonStyles, colors } from '../CallOceanUtils/CallOceanStyles';
import { OceanBackground } from '../CallOceanComponents/CallOceanOceanBackground';
import { GradientButton } from '../CallOceanComponents/CallOceanGradientButton';
import { GradientBackButton } from '../CallOceanComponents/CallOceanGradientBackButton';
import { Scenario } from '../CallOceanTypes/CallOceanTypes';

interface ScenarioSelectionScreenProps {
  scenarios: Scenario[];
  onSelectScenario: (scenarioId: string) => void;
  onBack: () => void;
}

export const ScenarioSelectionScreen: React.FC<ScenarioSelectionScreenProps> = ({
  scenarios,
  onSelectScenario,
  onBack,
}) => {
  const [selectedMission, setSelectedMission] = useState<string | null>(null);

  const getMissionIcon = (scenarioId: string) => {
    switch (scenarioId) {
      case 'space-exploration':
        return '🚀';
      case 'astronomy':
        return '🔭';
      case 'space-technology':
        return '🛰️';
      case 'space-mysteries':
        return '🌌';
      default:
        return '⭐';
    }
  };

  const getMissionDescription = (scenarioId: string) => {
    switch (scenarioId) {
      case 'space-exploration':
        return 'Train for interplanetary missions and learn survival skills for space travel';
      case 'astronomy':
        return 'Explore our solar system and discover the wonders of celestial bodies';
      case 'space-technology':
        return 'Master the engineering behind rockets, satellites, and space technology';
      case 'space-mysteries':
        return 'Uncover the greatest mysteries of the universe and cosmic phenomena';
      default:
        return 'Embark on an incredible space adventure';
    }
  };

  return (
    <OceanBackground>
      {/* Header */}
      <View style={commonStyles.header}>
        <GradientBackButton onPress={onBack} style={styles.backButton} />
        <Text style={commonStyles.headerTitle}>LEARNING MODULES</Text>
      </View>

      {/* Mission briefing */}
      <View style={styles.briefingContainer}>
        <Text style={styles.briefingTitle}>LEARNING GUIDE</Text>
        <Text style={styles.briefingText}>
          Choose your learning module. Each module will help you discover the fascinating world of marine life and oceanography.
        </Text>
      </View>

      {/* Missions list */}
      <ScrollView style={styles.missionsContainer} showsVerticalScrollIndicator={false}>
        {scenarios.map((scenario) => (
          <TouchableOpacity
            key={scenario.id}
            style={[
              styles.missionCard,
              selectedMission === scenario.id && styles.selectedMissionCard
            ]}
            onPress={() => {
              setSelectedMission(scenario.id);
              onSelectScenario(scenario.id);
            }}
          >
            <View style={styles.missionHeader}>
              <Text style={styles.missionIcon}>{getMissionIcon(scenario.id)}</Text>
              <Text style={styles.missionTitle}>{scenario.title}</Text>
            </View>
            <Text style={styles.missionDescription}>
              {getMissionDescription(scenario.id)}
            </Text>
            <View style={styles.missionStatus}>
              <Text style={styles.missionStatusText}>READY FOR LAUNCH</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* <Image source={require('../CallOceanAssets/img/846d80425b8da3bbbd1a55e0f69987bc2474a7e7.png')} style={{width: 300, height: 450, position: 'absolute', bottom: 0, alignSelf: 'center'}} /> */}
    </OceanBackground>
  );
};

const styles = StyleSheet.create({
  briefingContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.yellow,
  },
  briefingTitle: {
    fontSize: 20,
    color: colors.yellow,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'CrimsonText-Regular',
  },
  briefingText: {
    fontSize: 18,
    color: colors.white,
    textAlign: 'center',
    lineHeight: 24,
    fontFamily: 'CrimsonText-Regular',
  },
  missionsContainer: {
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
  },
  selectedMissionCard: {
    borderColor: colors.yellow,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  missionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  missionIcon: {
    fontSize: 30,
    marginRight: 15,
  },
  missionTitle: {
    fontSize: 22,
    color: colors.yellow,
    fontWeight: 'bold',
    flex: 1,
    fontFamily: 'CrimsonText-Regular',
  },
  missionDescription: {
    fontSize: 18,
    color: colors.white,
    lineHeight: 24,
    marginBottom: 15,
    fontFamily: 'CrimsonText-Regular',
  },
  missionStatus: {
    alignSelf: 'flex-end',
  },
  missionStatusText: {
    fontSize: 16,
    color: colors.yellow,
    fontWeight: 'bold',
    fontFamily: 'CrimsonText-Regular',
  },
  backButton: {
    marginRight: 15,
  },
});

