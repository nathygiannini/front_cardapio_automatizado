import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import logo from '../../imagens/logothermasamarela.jpg';

const espetinho = ({ navigation }) => {
  const [quantidade, setQuantidade] = useState(0);

  const adicionar = () => {
    setQuantidade(quantidade + 1);
  }

  const remover = () => {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
    }
  }

  const [espetinhoItems, setEspetinhoItems] = useState([
    { id: 2001, name: 'ESPETINHO DE CARNE', description: 'Unidade', price: 'R$ 12,00',quantity: 0 },
    { id: 2002, name: 'ESPETINHO DE FRANGO', description: 'Unidade', price: 'R$11,00',quantity: 0  },
    { id: 2003, name: ' ESPETINHO DE LINGUIÇA', description: 'Unidade', price: 'R$ 11,00',quantity: 0  },
    { id: 2004, name: 'ESPETINHO DE CORAÇÃO', description: ' Unidade', price: 'R$11,00',quantity: 0  },
    { id:2005, name: 'ESPETINHO DE KAFTA', description: ' Unidade', price: 'R$ 11,00',quantity: 0  },
    { id: 2006 , name: 'SALGADO TROUXINHA DE FRANGO', description: ' Unidade', price: 'R$ 10,80',quantity: 0  },
    { id: 3007, name: 'SALGADO ENROLADO DE PRESUNTO E QUEIJO', description: 'Unidade', price: 'R$ 10,80',quantity: 0 },
    { id: 3008, name: 'SALGADO ESFIRRA DE CARNE', description: 'Unidade', price: 'R$ 10,80',quantity: 0 },
    { id: 3009, name: 'ESPETINHO DE QUEIJO', description: 'Unidade', price: 'R$ 12,00',quantity: 0 },
    { id: 3010, name: 'PÃO DE ALHO', description: 'Unidade', price: 'R$ 8,50',quantity: 0 },
    { id: 3011, name: 'SALGADO HAMBURGUINHO', description: 'Unidade', price: 'R$ 10,80',quantity: 0 },
    { id: 30012, name: 'SALGADO CACHORRO-QUENTE ASSADO', description: 'Unidade', price: 'R$10,80',quantity: 0 },
  ]);

  const updateQuantity = (id, newQuantity) => {
    const updatedEspetinhoItems = espetinhoItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setEspetinhoItems(updatedEspetinhoItems);
  };

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const filteredEspetinhoItems = espetinhoItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderEspetinhoItem = ({ item }) => (
    <View style={styles.espetinhoItem}>
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
        data={filteredEspetinhoItems}
        renderItem={renderEspetinhoItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <View>
      <TouchableOpacity 
          onPress={() => navigation.navigate('Carrinho')}>
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

export default espetinho;

