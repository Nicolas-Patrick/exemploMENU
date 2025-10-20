import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native'

export default function DetailsScreen({navigation}){
    return(
        <View style={estilos.container}>
            <Text>DetailsScreen</Text>
            <Button title="Ir para Home"
             onPress={() => navigation.navigate('Home')} />
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