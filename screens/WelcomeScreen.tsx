import {ImageBackground,StyleSheet,Text,TouchableOpacity,View,} from 'react-native';
import React from 'react';

export default function WelcomeScreen({ navigation }: any) {
  return (
    <ImageBackground
      source={{uri: 'https://4kwallpapers.com/images/walls/thumbs_3t/1101.jpg'}}
      style={styles.fondo}
      resizeMode="cover"
    >
      <View style={styles.container}>

        <Text style={styles.titulo}>
          Bienvenido
        </Text>

        <TouchableOpacity
          style={styles.boton}
          onPress={() => navigation.navigate('TopTabs')}
        >
          <Text style={styles.textoBoton}>
            INGRESAR
          </Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 28, 28, 0.25)',
    padding: 20,
  },

  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FF8C42', // naranja
    marginBottom: 15,
  },



  boton: {
    backgroundColor: '#43A047', // verde
    width: 220,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 6,
  },

  textoBoton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});