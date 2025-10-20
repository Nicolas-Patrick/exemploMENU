import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native'

export default function HomeScreen({navigation}){
    return(
        <View style={estilos.container}>
            <Text>HomeScreen</Text>
            <Button title="Ir para Detalhes"
             onPress={() => navigation.navigate('Details')} />
            <Button title="Ir para Sobre"
             onPress={() => navigation.navigate('About')} />
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})