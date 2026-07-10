import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Tarjeta2 from '../components/Tarjeta2'

export default function UsuarioScreen() {

    const [data, setData] = useState([])

    useEffect(() => {
        cargarDatos()
        console.log(data);    


    }, [])

    async function cargarDatos() {
        const resp = await fetch('https://jritsqmet.github.io/web-api/series.json')
        const json = await resp.json()

        setData(json.series)
    }
    
    return (
        <View>
            <Text style={styles.titulo}>Lista de Series</Text>

            <FlatList
                data={data}
                renderItem={({ item }) =>
                    <Tarjeta2 datos={item} />
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10
    }
})