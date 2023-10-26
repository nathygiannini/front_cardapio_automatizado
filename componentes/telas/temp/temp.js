import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function Temp({ navigation }) {
    return (
        <View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center'}}>
            <Text>Acesso telas para teste</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Home Screen</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Temp;