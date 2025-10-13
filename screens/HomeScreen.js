import {View, Text, StyleSheet, Button} from 'react-native'

export default function HomeScreen({navigation}) {
    return (
        <View>
            <Text>Tela Inicial</Text>
            <Button title='Ir para detalhes' onPress={() => navigation.navigate('Details')}></Button>
            <Button title='Ir para Sobre' onPress={() => navigation.navigate('About')}></Button>
            <Button title='Ir para Produtos' onPress={() => navigation.navigate('Product')}></Button>
        </View>
    )
}