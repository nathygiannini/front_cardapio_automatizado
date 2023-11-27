import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import logo from '../../imagens/logothermasamarela.jpg';

const sorvete = () => {
  const [quantidade, setQuantidade] = useState(0);

  const adicionar = () => {
    setQuantidade(quantidade + 1);
  }

  const remover = () => {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
    }
  }

  const [sorveteItems, setSorveteItems] = useState([
    { id: 3001, name: 'CASQUINHA', description: 'Unidade', price: 'R$ 8.00',quantity: 0 },
    { id: 3002, name: 'CASCÃO', description: 'Unidade', price: 'R$ 10.00',quantity: 0 },
    { id: 3003, name: 'SUNDAY', description: 'Unidade', price: 'R$ 12.00',quantity: 0 },
    { id: 3004, name: 'MILK-SHAKE', description: 'Pequeno-330 ml', price: 'R$ 20.00',quantity: 0 },
    { id: 3005, name: 'MILK-SHAKE', description: 'Grande-440 ml', price: 'R$ 20.00',quantity: 0 },
    { id: 3006, name: 'COBERTURA', description: 'Adicional', price: 'R$ 2.00',quantity: 0 },
   
  ]);

  const updateQuantity = (id, newQuantity) => {
    const updatedSorveteItems = sorveteItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setSorveteItems(updatedSorveteItems);
  };

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const filteredSorveteItems = sorveteItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderSorveteItem = ({ item }) => (
    <View style={styles.sorveteItem}>
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
        <Text style={styles.textoBarraca}>SORVETE TAYRO</Text>
      </View>

      <SearchBar
        placeholder="Buscar item..."
        onChangeText={handleSearch}
        value={searchQuery}
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.inputContainer}
      />

      <FlatList
        data={filteredSorveteItems}
        renderItem={renderSorveteItem}
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
  buttonTextAdd: {
    backgroundColor: '#F58220',
    borderRadius: 10,
    paddingHorizontal: 70,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', // Centraliza o texto horizontalmente
  },
});

export default sorvete;