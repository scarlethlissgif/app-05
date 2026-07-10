import React, { useState } from 'react';
import { StyleSheet, Text,TextInput,View,Switch,TouchableOpacity,Alert,} from 'react-native';

export default function SuscripcionesScreen() {

    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [tieneHijos, setTieneHijos] = useState(false);
    const [cantidadHijos, setCantidadHijos] = useState('');

    function calcularSeguro() {

        let total = 70;

        if (Number(edad) < 20) {
            total = total / 2;
        }

        if (tieneHijos) {
            total = total - (Number(cantidadHijos) * 7);
        }

        if (total < 0) {
            total = 0;
        }

        Alert.alert(
            'Resultado',
            `Nombre: ${nombre}\nValor del seguro: $${total}`
        );
    }

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Suscripción
            </Text>

            <TextInput
                placeholder="Nombre"
                style={styles.input}
                value={nombre}
                onChangeText={setNombre}
            />

            <TextInput
                placeholder="Edad"
                style={styles.input}
                keyboardType="numeric"
                value={edad}
                onChangeText={setEdad}
            />

            <View style={styles.switchContainer}>

                <Text>Tiene hijos</Text>

                <Switch
                    value={tieneHijos}
                    onValueChange={setTieneHijos}
                />

            </View>

            {tieneHijos && (

                <TextInput
                    placeholder="Cantidad de hijos"
                    style={styles.input}
                    keyboardType="numeric"
                    value={cantidadHijos}
                    onChangeText={setCantidadHijos}
                />

            )}

            <TouchableOpacity
                style={styles.boton}
                onPress={calcularSeguro}
            >
                <Text style={styles.txtBoton}>
                    Calcular
                </Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFF8E1',
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#EF6C00',
        marginBottom: 20,
    },

    input: {
        borderWidth: 1,
        borderColor: '#FFA726',
        borderRadius: 10,
        backgroundColor: '#FFF',
        padding: 12,
        marginBottom: 15,
    },

    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },

    boton: {
        backgroundColor: '#43A047',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },

    txtBoton: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

});