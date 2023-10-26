import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, Image, StyleSheet, TouchableOpacity, onPress} from 'react-native';



const Carrinho = () => {
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Pastel de carne e queijo', price: 10, quantity: 2, description: 'Carne moída e queijo', image: require('./pastel.jpg') },
    { id: '2', name: 'Cachorro quente', price: 15, quantity: 1, description: 'pão, salsicha, milho e batata palha', image: require('./cachorro-quente.jpg') },
    { id: '3', name: 'Pastel presunto e queijo', price: 10, quantity: 4, description: 'presunto e queijo', image: require('./pastel.jpg') },
    // Adicione mais produtos aqui
  ]);

  const updateQuantity = (id, newQuantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    const clearedCartItems = cartItems.map(item => ({ ...item, quantity: 0 }));
    setCartItems(clearedCartItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
  };

  const checkout = () => {
    const total = getTotalPrice();
    alert(`Total da Compra: R$ ${total.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
              <Text style={styles.productPrice}>Preço: R$ {item.price.toFixed(2)}</Text>
              <View style={styles.quantityContainer}>
                <Text style={styles.quantityText}>Quantidade: {item.quantity}</Text>
              </View>
              <Text style={styles.totalPrice}>Total: R$ {(item.quantity * item.price).toFixed(2)}</Text>
            </View>
          </View>
        )}
      />
      <Text style={styles.cartTotal}>Total do Carrinho: R$ {getTotalPrice().toFixed(2)}</Text>
 
       <TouchableOpacity style={styles.butfinal} onPress={clearCart}>
        <Text>Limpar Carrinho</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.butfinal} onPress={onPress}>
        <Text>Finalizar Compra</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F58220',
    marginTop: 40,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,

  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  productDescription: {
    fontSize: 14,
    color: '#22547E',
  },
  productPrice: {
    fontSize: 14,
    color: 'black',
  },
  quantityContainer: {
    marginTop: 5,
  },
  quantityText: {
    fontSize: 16,
    color:'white',
  },
  totalPrice: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color:'white',
  },
  cartTotal: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    color:'white',
    margin: 15,
  },
  butfinal:{
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor:'#FFDD00'
  },

});

export default Carrinho;