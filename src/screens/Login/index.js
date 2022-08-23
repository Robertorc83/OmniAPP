import { View,TextInput, StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

const SignUp = () => {

  const navigation = useNavigation()

  const goToSignup = () => {
    navigation.navigate('SignUp')
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title} >Accede a tu cuenta</Text>
        <TextInput
          style={styles.input}
          placeholder='Celular'
          autoCapitalize="none"
          placeholderTextColor='#332C54' 
        />
        <TextInput
          style={styles.input}
          placeholder='Código de verificación'
          autoCapitalize="none"
          placeholderTextColor='#332C54'
        />
        <TouchableOpacity 
            style={styles.button}
            > 
            <Text style={{color:'#FFF'}}>Ingresar</Text>
        </TouchableOpacity>
        <Text style={styles.extra} >Aún no tienes una cuenta?</Text>
        <TouchableOpacity style={styles.extra2} onPress={goToSignup}> 
        <Text style={styles.extra3}>Registrate aquí</Text>
        </TouchableOpacity>
      </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
input: {
    width: 350,
    height: 55,
    backgroundColor: 'white',
    margin: 10,
    padding: 8,
    color: '#332C54',
    borderRadius: 5,
    fontSize: 18,
    fontWeight: '500',
    borderColor: '#332C54',
    borderWidth: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  extra:{
    marginTop: 30,
    fontSize: 18,
    
  },
  extra2:{
    marginTop: 10,
  },
  extra3:{
    color:'#332C54',
    fontSize: 18,
    marginLeft: 5,
    fontWeight: 'bold',
  
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#332C54'
  },
  button:{
        marginTop: 20,
        width:200,
        height:50,
        borderColor:'#332C54',
        borderRadius:10,
        justifyContent: 'center', 
        alignItems:'center',
        backgroundColor:'#332C54',
  }
})