import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Tarjeta1(props: any) {

    function mensaje(nombre: string, indice: string) {
        Alert.alert(nombre, indice)
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() =>
                mensaje(
                    props.datos.version.name,
                    props.datos.game_index.toString()
                )
            }
        >

            <Text>{props.datos.version.name}</Text>

            <View>
                <Text>Índice: {props.datos.game_index}</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f0b4d2",
        margin: 5,
        borderRadius: 10,
        padding: 10
    }
})