import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { OceanBackground } from '../components/CallOceanOceanBackground';
import { GradientBackButton } from '../components/CallOceanGradientBackButton';
import { commonStyles, colors } from '../utils/CallOceanStyles';

interface StoriesHelpScreenProps {
  onBack: () => void;
  onGoToStories: () => void;
}

export const StoriesHelpScreen: React.FC<StoriesHelpScreenProps> = ({ onBack, onGoToStories }) => {
  const helpTopics = [
    {
      id: 'marine-biology',
      title: '🐠 Marine Biology',
      description: 'Learn about the fascinating world of marine life, from tiny plankton to massive whales. Discover how marine ecosystems work and the incredible adaptations of ocean creatures.',
    },
    {
      id: 'oceanography',
      title: '🌊 Oceanography',
      description: 'Explore the science of the ocean - currents, tides, waves, and how the ocean affects our climate. Understand the physical and chemical properties of seawater.',
    },
    {
      id: 'marine-conservation',
      title: '🛡️ Marine Conservation',
      description: 'Discover the threats facing our oceans and what we can do to protect marine life. Learn about plastic pollution, overfishing, and climate change impacts.',
    },
    {
      id: 'marine-life',
      title: '🐋 Marine Life Stories',
      description: 'Read fascinating stories about different marine animals and their behaviors. From whale migrations to deep-sea mysteries, explore the wonders of ocean life.',
    },
    {
      id: 'coral-reefs',
      title: '🪸 Coral Reefs',
      description: 'Dive into the vibrant world of coral reefs - the rainforests of the sea. Learn about their importance, threats they face, and conservation efforts.',
    },
    {
      id: 'deep-sea',
      title: '🦑 Deep Sea Exploration',
      description: 'Journey to the mysterious depths of the ocean where strange creatures live in complete darkness. Discover bioluminescence and extreme adaptations.',
    },
  ];

  return (
    <OceanBackground>
      {/* Header */}
      <View style={styles.header}>
        <GradientBackButton onPress={onBack} style={styles.backButton} />
        <Text style={styles.headerTitle}>LEARNING GUIDE</Text>
      </View>

      {/* Help content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {helpTopics.map((topic) => (
          <TouchableOpacity 
            key={topic.id} 
            style={styles.helpCard}
            onPress={onGoToStories}
          >
            <Text style={styles.helpTitle}>{topic.title}</Text>
            <Text style={styles.helpText}>{topic.description}</Text>
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
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  helpCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: colors.yellow,
  },
  helpTitle: {
    fontSize: 22,
    color: colors.yellow,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'CrimsonText-Regular',
  },
  helpText: {
    fontSize: 22,
    color: colors.white,
    lineHeight: 28,
    fontFamily: 'CrimsonText-Regular',
  },
});