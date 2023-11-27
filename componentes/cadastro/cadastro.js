import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

import logo from '../../componentes/imagens/logothermaslaranja.jpg';


const CadastroScreen = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [celular, setCelular] = useState('');

  const handleCadastro = () => {
    // Aqui você pode implementar a lógica para enviar os dados para o servidor ou realizar qualquer ação necessária.
    console.log('Nome:', nome);
    console.log('CPF:', cpf);
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Celular:', celular);
    // Adicione a lógica de envio para o servidor aqui
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.imagem} />

      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        onChangeText={(text) => setCPF(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={(text) => setSenha(text)}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Celular"
        onChangeText={(text) => setCelular(text)}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#22547E',
    },
    imagem: {
        width: 400,
        resizeMode: 'center',
        height: 270,
        backgroundColor: '#22547E'
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color:'#FFDD00'
    },
    input: {
      height: 40,
      width: '80%',
      borderColor: '#333',
      borderWidth: 1,
      marginVertical: 10,
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#D3D3D3',
    },
    button: {
      backgroundColor: '#FFDD00',
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
    },
    buttonText: {
      color: 'black',
      fontSize: 16,
      fontWeight: '500',
    },
  });
export default CadastroScreen;
