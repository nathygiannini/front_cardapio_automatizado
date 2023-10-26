import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Temp from '../telas/temp/temp';
import HomeScreen from '../telas/home/home';
import Carrinho from '../telas/carrinho/carrinho';

const Stack = createNativeStackNavigator();

function Rotas() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Telas" component={Temp} options={{ title: 'Acesso a telas' }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} /> 
                <Stack.Screen name="Carrinho" component={Carrinho} options={{ title: 'Carrinho' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Rotas;