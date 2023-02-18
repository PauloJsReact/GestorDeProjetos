import React from 'react';
import { View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import CadastroScreen from './src/screens/CadastroScreen'
import MeusProjetosScreen from './src/screens/MeusProjetosScreen'

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <CadastroScreen />
    </View>
  );
}
