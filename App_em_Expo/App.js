import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import LoginScreen from './src/screens/LoginScreen';
import CadastroScreen from './src/screens/CadastroScreen'
import MeusProjetosScreen from './src/screens/MeusProjetosScreen'


const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={LoginScreen}  />
      <Stack.Screen name='Cadastro' component={CadastroScreen} />
      <Stack.Screen name='Projetos' component={MeusProjetosScreen} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}
