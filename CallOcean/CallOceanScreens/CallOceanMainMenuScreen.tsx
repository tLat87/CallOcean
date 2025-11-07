import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { commonStyles, colors } from '../CallOceanUtils/CallOceanStyles';
import { OceanBackground } from '../CallOceanComponents/CallOceanOceanBackground';
import { GradientButton } from '../CallOceanComponents/CallOceanGradientButton';
import { GradientNavButton } from '../CallOceanComponents/CallOceanGradientNavButton';

interface MainMenuScreenProps {
  onStartLearning: () => void;
  onHelp: () => void;
  onSaved: () => void;
  onSettings: () => void;
}

export const MainMenuScreen: React.FC<MainMenuScreenProps> = ({
  onStartLearning,
  onHelp,
  onSaved,
  onSettings,
}) => {
  return (
    <OceanBackground>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>OCEAN ACADEMY</Text>
        <Text style={styles.subtitle}>Discover the Wonders of Marine Life</Text>
      </View>
     
      {/* Main content */}
      <View style={styles.mainContent}>
        <Image source={require('../CallOceanAssets/img/39927c36b4a6ef5b42b8c61baa92ba5661f59d35.png')} style={{width: 300, height: 200, alignSelf: 'center'}} />

        {/* Main button */}
        <View style={styles.buttonContainer}>
          <GradientButton
            title="START LEARNING"
            onPress={onStartLearning}
            style={styles.mainButton}
          />
        </View>
      </View>

      {/* Bottom navigation */}
      <View style={commonStyles.bottomNavigation}>
        <GradientNavButton image={require('../CallOceanAssets/img/questions.png')} onPress={onHelp} />
        <GradientNavButton image={require('../CallOceanAssets/img/star.png')} onPress={onSaved} />
        <GradientNavButton image={require('../CallOceanAssets/img/settings.png')} onPress={onSettings} />
      </View>
    </OceanBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.yellow,
    textAlign: 'center',
    fontFamily: 'CrimsonText-Regular',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 22,
    color: colors.yellow,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '600',
    fontFamily: 'CrimsonText-Regular',
  },
  buttonContainer: {
    alignItems: 'center',
    paddingHorizontal: 40,
    marginTop: 40,
  },
  mainButton: {
    minWidth: 200,
  },
});
