import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';

import styles from '../../Styles';
import links from '../../links';

export default function LoginScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // implementar lógica de login aqui
  };

  const navigateToMyProj = ()=>{
    navigation.navigate('Projetos');
  }

  const navigateToNewUser = () =>{
    navigation.navigate('Cadastro');
  }

  return (
    <View style={styles.container}>


      <Image
        source={{ uri: links.logo}}
        style={styles.logo}
      />


      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={navigateToMyProj}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={{margin:15}}>
      <Text style={styles.buttonText}>Não tem uma conta? <TouchableOpacity onPress={navigateToNewUser}>Cadastre-se</TouchableOpacity></Text>
      </View>
    </View>
  );
}
