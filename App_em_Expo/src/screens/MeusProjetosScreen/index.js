import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from '../../Styles';
import links from '../../links';
import Projetos from '../../data'

function MeusProjetosScreen() {



  return (
    <View style={styles.container}>
      <Text style={styles.Titulo}>Meus projetos</Text>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Novo projeto</Text>
      </TouchableOpacity>

      <ScrollView>
        {Projetos.map((projeto) => (
          <Projeto key={projeto.id} projeto={projeto} />
        ))}
      </ScrollView>

    </View>
  );
}

function Projeto(props) {
  const { projeto } = props;
  
  return (
    <View style={styles.projetoEstilo}>
      <Image source={{ uri: links.projetoExemplo }}
        style={{ width: 60, height: 60 }}
      />
      <Text style={styles.projText}>{projeto.nome}</Text>
      <View style={styles.projBtn}>
      <TouchableOpacity>
        <AntDesign style={styles.projBtnTex} name="menu-fold" size={24} color="black" />
      </TouchableOpacity>
      </View>
    </View>
  );
}

export default MeusProjetosScreen;
