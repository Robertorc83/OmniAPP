import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Recomendaciones</Text>
      <Text style={styles.texto}>- Usar mascarilla en todo momento dentro del vehículo </Text>
    </View>
  )
}

export default CovidMessage

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#332C54',
        padding: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    titulo:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    texto:{  
        color: '#d7ddf3',
        fontSize: 15,
        marginBottom: 10,
    }

})