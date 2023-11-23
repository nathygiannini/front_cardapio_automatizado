import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
} from 'react-native';

import logo from '../../imagens/logothermas.jpg';
import imgTemp from '../../imagens/temp.png';

const HomeScreen = () => {
    return (
        <View style={styles.container}>            
            <ImageBackground
                style={{
                    ...styles.topContainer,
                    width: '300%',
                    height: '160%', // ou outra porcentagem ou valor fixo desejado
                    backgroundColor: '#22547E',
                }}
                // Resto do código
            />

            <Image
                source={logo}
                style={styles.imagem}
            />

            <TouchableOpacity
                style={{ ...styles.botao, width: 150 }}
                onPress={() => {
                    // Botao login
                }}>
                <Text style={styles.texto}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ ...styles.botao, width: 150 }}
                onPress={() => {
                    // Botao login
                }}>
                <Text style={styles.texto}>Cadastro</Text>
            </TouchableOpacity>

            <View style={{ alignItems: 'center' }}>
                <Image
                    source={imgTemp}
                    //style={styles.imgdabarraca}
                />
                <Text style={styles.textobarracas}>SALGADOS</Text>
                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => {
                        // Navegar para a tela de restaurantes ou outras ações
                    }}>
                    <Text style={styles.botao}>Acessar cardápio</Text>
                </TouchableOpacity>


                <Image
                    source={imgTemp}
                    style={styles.imgdabarraca}
                />
                <Text style={styles.textobarracas}>ESPETINHO DE OURO</Text>
                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => {
                        // Navegar para a tela de restaurantes ou outras ações
                    }}>
                    <Text style={styles.texto}>Acessar cardápio</Text>
                </TouchableOpacity>

                <Image
                    source={imgTemp}
                    style={styles.imgdabarraca}
                />
                <Text style={styles.textobarracas}>NÃO ALCOOLICOS</Text>
                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => {
                        // Navegar para a tela de restaurantes ou outras ações
                    }}>
                    <Text style={styles.texto}>Acessar cardápio</Text>
                </TouchableOpacity>

                <Image
                    source={imgTemp}
                    style={styles.imgdabarraca}
                />
                <Text style={styles.textobarracas}>ALCOOLICOS</Text>
                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => {
                        // Navegar para a tela de restaurantes ou outras ações
                    }}>
                    <Text style={styles.texto}>Acessar cardápio</Text>
                </TouchableOpacity>
            </View>

          
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22547E',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topContainer: {
        backgroundColor: '#22547E',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 50,
        width: '100%', // Ocupa toda a largura
        height: 'auto', // Altura automática conforme o conteúdo
    },    
    botao: {
        backgroundColor: '#FFDD00', // opcoes de barracas
        paddingVertical: 8,
        paddingHorizontal: 5,
        borderRadius: 20,
        color: '#22547E',
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        marginTop: 10, // Ajuste a margem superior conforme necessário
    },
    texto: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        color: '#000000',
    },
    imgdabarraca: {
        width: 280,
        height: 300,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 50,
    },
    textobarracas: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        color: '#FFDD00',
    }, 
    imagem: {
        width: 400,
        //resizeMode: 'cover',
        height: 300,
        backgroundColor: '#22547E'
    },
});

export default HomeScreen;