import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function Temp({ navigation }) {
    return (
        <View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center'}}>
            <Text>Acesso telas para teste</Text>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                <Text>Home Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Carrinho')}>
                <Text>Carrinho</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                <Text>Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Bebidas')}>
                <Text>Bebidas</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Espetinho')}>
                <Text>Espetinho</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('bebidas2')}>
                <Text>Bebidas sem álcool</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Temp;