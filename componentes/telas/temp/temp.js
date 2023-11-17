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
        </View>
    );
}

export default Temp;