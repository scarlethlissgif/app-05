import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Tarjeta2(props:any) {

    function mensaje(titulo:string, descripcion:string){
        Alert.alert(titulo, descripcion)
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() =>
                mensaje(
                    props.datos.titulo,
                    props.datos.descripcion
                )
            }
        >

            <Text style={styles.titulo}>
                {props.datos.titulo}
            </Text>

            <View style={{flexDirection:'row'}}>

                <View style={{width:'70%'}}>

                    <Text>Año: {props.datos.anio}</Text>

                    <Text>
                        Temporadas: {props.datos.metadata.temporadas}
                    </Text>

                    <Text>
                        Creador: {props.datos.metadata.creador}
                    </Text>

                </View>

                <Image
                    style={styles.img}
                    source={{uri: props.datos.info.imagen}}
                />

            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:"#f0b4d2",
        margin:5,
        borderRadius:10,
        padding:10
    },

    titulo:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10
    },

    img:{
        width:80,
        height:120,
        resizeMode:'contain'
    }

})