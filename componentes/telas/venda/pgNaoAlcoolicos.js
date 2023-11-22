import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import logo from '../../imagens/logothermas.jpg';

const bebidas = () => {
  const [quantidade, setQuantidade] = useState(0);

  const adicionar = () => {
    setQuantidade(quantidade + 1);
  }

  const remover = () => {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
    }
  }

  const [bebidasItems, setbebidasItems] = useState([
    { id: 1, name: 'COCA-COLA', description: ' LATA 350ML', price: 'R$ 7.00',quantity: 0 },
    { id: 4, name: 'BRAHMA ZERO', description: ' LATA 350 ML', price: 'R$ 8.00',quantity: 0  },
    { id: 10, name: 'ÁGUA SEM GÁS', description: ' GARRAFA 510 ML', price: 'R$ 4.00',quantity: 0  },
    { id: 11, name: 'ÁGUA COM GÁS', description: ' GARRAFA 510 ML', price: 'R$4.00 ',quantity: 0  },
    { id: 12, name: 'ÁGUA TÔNICA', description: ' LATA 350ML', price: 'R$ 7.00',quantity: 0  },
    { id: 26, name: 'CHÁ MATE', description: ' GARRAFA', price: 'R$ 6.00',quantity: 0  },
    { id: 297, name: 'Polenta Frita', description: 'Porção', price: 'R$ 19.00',quantity: 0  },
    { id: 436, name: 'Risólis', description: 'Presunto e Queijo', price: 'R$9.80' ,quantity: 0 },
    { id: 437, name: 'Fogaça', description: 'Calabresa', price: 'R$ 9.80',quantity: 0  },
    { id: 469, name: 'Batata Frita', description: 'Porção', price: 'R$ 25.00' ,quantity: 0 },
    { id: 508, name: 'Bolo', description: 'Pedaço', price: 'R$ 1.50',quantity: 0  },
    { id: 551, name: 'Raquete de Frango', description: 'Porção', price: 'R$ 35.00',quantity: 0  },
    { id: 552, name: 'Kibe', description: 'Porção', price: 'R$ 30.00',quantity: 0  },
    { id: 557, name: 'Tempurá de Frango', description: 'Porção', price: 'R$ 30.00',quantity: 0  },
    { id: 561, name: 'Tirinha de Frango', description: 'Porção', price: 'R$ 30.00' ,quantity: 0 },
  ]);

  const updateQuantity = (id, newQuantity) => {
    const updatedBebidasItems = bebidasItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setBebidasItems(updatedBebidasItems);
  };

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const filteredBebidasItems = bebidasItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderBebidasItem = ({ item }) => (
    <View style={styles.bebidasItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity + 1)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <Text style={styles.quantityText}>{item.quantity}</Text>

        <TouchableOpacity onPress={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.imagem} />
        <Text style={styles.textoBarraca}>ESPETINHO DE OURO</Text>
      </View>

      <SearchBar
        placeholder="Buscar item..."
        onChangeText={handleSearch}
        value={searchQuery}
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.inputContainer}
      />

      <FlatList
        data={filteredBebidasItems}
        renderItem={renderBebidasItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <View>
      <TouchableOpacity onPress={adicionar}>
          <Text style={styles.buttonTextAdd}>CONTINUAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}; 

const styles = StyleSheet.create({
  // ... (seus estilos existentes)
  textoBarraca: {
    margin:20,
  textAlign:'center',
  height: 90,
  fontWeight: 'bold',
  fontSize: 40,
  color: '#F58220'
 
  },
  imagem: {
 width: 100,
  resizeMode:'center',
  height:100,
  backgroundColor:'#FFDD00'
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'#FFDD00',
   justifyContent: 'center'
  },
  searchContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  inputContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  menuItem: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },

  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#F58220', // Cor laranja para destacar o preço
  },  
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
     
  },

  buttonText: {
   flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F58220',
    borderRadius: 10,
    paddingHorizontal: 10,
    
  },

  quantityText: {
    paddingHorizontal: 10,
    fontSize: 20,
    borderRadius: 5,
     
  },
  buttonTextAdd:{
     flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F58220',
    borderRadius: 10,
    paddingHorizontal: 70,
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default bebidas;