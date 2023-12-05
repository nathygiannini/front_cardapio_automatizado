import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import logo from '../../imagens/logothermas.jpg'
import confirm from '../../imagens/confirmacaoo.png'

const PedidoRealizadoScreen = () => {
  return (
    <View style={styles.container}>
    <Image source={logo} style={styles.imagem} />
    
      <Text style={styles.confirmationText}>Pedido Realizado!</Text>
      <Text style={styles.descriptionText}>
        Agradecemos por escolher nossos serviços. Seu pedido será processado em breve.
      </Text>
       <Image source={confirm} style={styles.imagemm} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
     backgroundColor: '#22547E',
  },
  confirmationText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
   color: '#FFDD00'
  },
  descriptionText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFDD00', // cor padrão
  },
   imagem: {
        width: 400,
        resizeMode: 'center',
        height: 270,
        backgroundColor: '#22547E'
    }, 
    imagemm: {
        width: 200,
        resizeMode: 'center',
        height: 150,
        backgroundColor: '#22547E'
    },
     
});

export default PedidoRealizadoScreen;
