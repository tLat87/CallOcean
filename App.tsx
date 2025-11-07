/**
 * Ocean Academy - Marine Biology Learning App
 * Discover the fascinating world of marine life and oceanography
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { Navigation } from './CallOcean/CallOceanComponents/CallOceanNavigation';
import './CallOcean/CallOceanUtils/CallOceanOnboardingDebug'; // Импорт для отладки онбординга

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1e3a8a" />
      <Navigation />
    </>
  );
}

export default App;
