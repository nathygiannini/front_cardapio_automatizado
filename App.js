import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 
import 'react-native-gesture-handler';
import { CartProvider } from './componentes/context/CartContext';

import Rotas from './componentes/navegacao/rotas';

export default function App() {
  return (
    // <View style={styles.container}>
    <CartProvider>
      <Rotas />
    </CartProvider>      
      // {/* <StatusBar style="auto" /> */}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
    width: '100%'
  },
});
