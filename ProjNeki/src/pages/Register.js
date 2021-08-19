import React from 'react';
import {View, TextInput, TouchableOpacity, Alert, Text} from 'react-native';
import styles from './styles';

export default function Register({navigation}) {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" style={styles.input}></TextInput>
      <TextInput placeholder="Confirmar Email" style={styles.input}></TextInput>
      <TextInput placeholder="Nome de Usuário" style={styles.input}></TextInput>
      <TextInput placeholder="Senha" style={styles.input}></TextInput>
      <TextInput placeholder="Confirmar Senha" style={styles.input}></TextInput>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Alert.alert('Cadastro realizado com sucesso!');
          navigation.navigate('Login');
        }}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}