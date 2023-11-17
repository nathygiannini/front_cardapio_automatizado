import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

import logo from '../../imagens/logothermas.jpg';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Aqui você pode adicionar a lógica de autenticação
        // Por exemplo, verificar se o usuário e senha são válidos
        if (username === 'usuario' && password === 'senha') {
            // Lógica de login bem-sucedida
            alert('Login bem-sucedido!');
        } else {
            // Lógica de login falhou
            alert('Login falhou. Verifique suas credenciais.');
        }
    };

    return (
        <View style={styles.container}>

            <Image source={logo} style={styles.imagem} />


            <Text style={styles.title}>FAÇA SEU LOGIN:</Text>
            <TextInput
                placeholder="Nome de usuário"
                style={styles.input}
                onChangeText={text => setUsername(text)}
                value={username}
            />
            <TextInput
                placeholder="Senha"
                style={styles.input}
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry
            />

            <TouchableOpacity style={styles.botao} onPress={LoginScreen}>

                <Text style={styles.textoBotao}> Entrar </Text>

            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    imagem: {
        width: 400,
        resizeMode: 'center',
        height: 270,
        backgroundColor: '#22547E'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#22547E',
    },
    title: {
        fontSize: 33,
        marginBottom: 20,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: "PRÓXIMA NOVA"
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        color: 'white'
    },
    textoBotao: {
        textAlign: 'center',
        color: '#22547E',
        fontSize: 18,
        fontWeight: 900

    },
    botao: {

        backgroundColor: '#FFDD00',
        height: 50,
        justifyContent: 'center',
        margin: 15,
        borderRadius: 10,
        width: 300

    },
});

export default LoginScreen;