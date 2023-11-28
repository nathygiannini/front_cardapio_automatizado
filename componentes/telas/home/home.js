import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import logo from '../../imagens/logothermas.jpg'

import imgAlcoolicas from '../../imagens/alcool.webp';
import imgEspetinho from '../../imagens/espetinhos.jpg';
import imgNalcool from '../../imagens/refrigerantes.jpg';
import imgSalgados from '../../imagens/salgados.webp';
import imgSorvetes from '../../imagens/sorvete.webp';
import CadastroScreen from '../../cadastro/cadastro';


const CardapioScreen = ({ navigation }) => {
  const navigateToCardapio = (tipoCardapio) => {
    // Adicione a navegação para as telas de cardápio específicas
    // Por exemplo, navigation.navigate('CardapioSalgados') para o cardápio de salgados
    switch (tipoCardapio) {
      case 'Espetos de Ouro':
        navigation.navigate('Espetinho');
      case 'Preço Geral Alcoolicas':
        navigation.navigate('Bebidas');        
      //case 'Preço Geral Alcoolicas':
      //  return imgAlcoolicas;
      //  case 'Preço Geral Não Alcoolicos':
      //   return imgNalcool;
      //   case 'Tayro':
     //    return imgSorvetes;
      // Adicione mais casos conforme necessário para outros tipos de cardápios
    //  default:
     //   return null;
    }
    console.log(`Acessando cardápio de ${tipoCardapio}`);
  };

  const renderImagem = (tipoCardapio) => {
    switch (tipoCardapio) {
      case 'Preço Geral Salgados':
        return imgSalgados;
      case 'Espetos de Ouro':
        return imgEspetinho;
      case 'Preço Geral Alcoolicas':
        return imgAlcoolicas;
        case 'Preço Geral Não Alcoolicos':
         return imgNalcool;
         case 'Tayro':
         return imgSorvetes;
      // Adicione mais casos conforme necessário para outros tipos de cardápios
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.botaoo} onPress={() => navigation.navigate('CadastroScreen')}>
          <Text style={styles.textoBotaoo}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoo} onPress={CadastroScreen}>
          <Text style={styles.textoBotaoo}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      
        <Image source = {logo}  style= {styles.imagem} />
    
      <Text style={styles.titulo}>Escolha um cardápio:</Text>

      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Menu')}>
          
          <Image source={{ uri: renderImagem('Preço Geral Salgados') }} style={styles.imagemBotao} />
          <Text style={styles.textoBotao}>Preço Geral Salgados</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          //onPress={() => navigateToCardapio('Espetos de Ouro')}>
            onPress={() => navigation.navigate('Espetinho')}>
          <Image source={{ uri: renderImagem('Espetos de Ouro') }} style={styles.imagemBotao} />
          <Text style={styles.textoBotao}>Espetos de Ouro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          //onPress={() => navigateToCardapio('Espetos de Ouro')}>
            onPress={() => navigation.navigate('bebidas2')}>
          <Image source={{ uri: renderImagem('Preço Geral Não Alcoolicos') }} style={styles.imagemBotao} />
          <Text style={styles.textoBotao}>Bebidas não alcoolicas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Bebidas')}>
          <Image source={{ uri: renderImagem('Preço Geral Alcoolicas') }} style={styles.imagemBotao} />
          <Text style={styles.textoBotao}>Bebidas álcoolicas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('sorvete')}>
          <Image source={{ uri: renderImagem('Tayro') }} style={styles.imagemBotao} />
          <Text style={styles.textoBotao}>Tayro</Text>
        </TouchableOpacity>
      </View>
     
      {/* Adicione mais botões conforme necessário para outros tipos de cardápios */}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor:'#22547E',
      },
      rowContainer: {
        flexDirection: 'row',
      },
  titulo: {
    margin:9,
    textAlign:'center',
    height: 90,
    fontWeight: 'bold',
    fontSize: 35,
    color: '#FFFFFF'
   
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', // Ajuste conforme necessário
  },
  botao: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1, // Faz com que cada botão ocupe a mesma largura
    margin: 5, // Espaçamento entre os botões
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10, // Ajuste conforme necessário
  },
  imagemBotao: {
    width: 100,
    height: 100,
    borderRadius: 50, // Metade da largura e altura para torná-lo circular
    marginBottom: 10,
  },
  imagem: {
    width: 200, // Ajuste conforme necessário
    height: 135, // Ajuste conforme necessário
    resizeMode: 'center',
    backgroundColor: '#22547E',
  },
  
     botaoo:{

        backgroundColor: '#FFDD00',
        height:50,
        justifyContent:'center',
        margin:15,
        borderRadius:10,
        width: 300
        
        },
        textoBotaoo:{
            textAlign:'center',
            color:'#22547E',
            fontSize:18,
            fontWeight:900
            
            },
     
});

export default CardapioScreen;
