import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Tarjeta1 from '../components/Tarjeta1'

export default function PokemonScreen() {

    const [data, setData] = useState([])

    useEffect(() => {
        cargarDatos()
    }, [])

    async function cargarDatos() {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        const json = await resp.json()

        setData(json.game_indices)
    }

    return (
        <View>
            <Text>PokemonScreen</Text>

            <FlatList
                data={data}
                renderItem={({ item }) =>
                    <Tarjeta1 datos={item} />
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({})