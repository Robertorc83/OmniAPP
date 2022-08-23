import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native'


const StartScreen = () => {

const navigation = useNavigation()

const goToSignup = () => {
    navigation.navigate('SignUp')
  }


  return (
    <View style={styles.container}>
        <Text style={styles.title}>BIENVENIDO</Text>
        <Text style={styles.subtitle}>Empieza a disfrutar de viajes más seguros al alcance de tu mano</Text>
        <Image 
        style={styles.image}
        source={require( '../../assets/securitygirl.jpg')}
        />
        <Icon style={styles.icon} name={'check-circle'} size={30} color="#332C54" /><Text style={styles.text}>Más seguro</Text>
        <Icon style={styles.icon} name={'check-circle'} size={30} color="#332C54" /><Text style={styles.text}>Encuentra transporte rápidamente</Text>
        <Icon style={styles.icon} name={'check-circle'} size={30} color="#332C54" /><Text style={styles.text}>Fácil de usar</Text>
        
        <TouchableOpacity 
            style={styles.button}
            onPress={goToSignup}
            > 
            <Text style={{color:'#FFF'}}>EMPEZAR</Text>
        </TouchableOpacity>
    </View>
  )
}

export default StartScreen

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',

    },
    title: {
        fontSize: 30,
        marginBottom: 10,
        marginTop: 20,
        color: '#332C54',
        fontWeight: 'bold'
    },
    subtitle:{
        fontSize: 18,
        textAlign: 'center',
    },
    image:{
        width: 300,
        height: 300,
    },
    text:{
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 10,
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