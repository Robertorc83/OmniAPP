import { View,TextInput, StyleSheet, Text, TouchableOpacity} from 'react-native'
import React, {useState, useEffect} from 'react'
import {useNavigation} from '@react-navigation/native'

import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';
import awsconfig from '../../aws-exports';
Amplify.configure(awsconfig);

const NOTSIGNIN = 'No estas logeado';
const SIGNEDIN = 'Has ingresado correctamente';
const SIGNEDOUT = 'Has cerrado sesión correctamente';
const WAITINGFOROTP = 'Ingresa código de verificación';
const VERIFYNUMBER = 'Verficando número';

const SignUp = () => {

  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(null);
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [otp, setOtp] = useState('');
  const [number, setNumber] = useState('');

  const password = Math.random().toString(10) + 'Abc#';

  useEffect(() => {
   console.log(number);
   console.log(otp);
  }, [number, otp]);

  const verifyAuth = () => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUser(user);
        setStatus(SIGNEDIN);
        setSession(null);
      })
      .catch((err) => {
        console.error(err);
        setStatus(NOTSIGNIN);
      });
  };
  const signOut = () => {
    if (user) {
      Auth.signOut();
      setUser(null);
      setOtp('');
      setStatus(SIGNEDOUT);
    } else {
      setStatus(NOTSIGNIN);
    }
  };
  const signIn = () => {
    setStatus(VERIFYNUMBER);
    Auth.signIn(number)
      .then((result) => {
        setSession(result);
        setStatus(WAITINGFOROTP);
      })
      .catch((e) => {
        if (e.code === 'UserNotFoundException') {
          signUp();
        } else if (e.code === 'UsernameExistsException') {
          setStatus(WAITINGFOROTP);
          signIn();
        } else {
          console.log(e.code);
          console.error(e);
        }
      });
  };
  const signUp = async () => {
    const result = await Auth.signUp({
      username: number,
      password: password,
      attributes: {
        phone_number: number,
      },
    }).then(() => signIn());
    return result;
  };
  const verifyOtp = () => {
    Auth.sendCustomChallengeAnswer(session, otp)
      .then((user) => {
        setUser(user);
        setStatus(SIGNEDIN);
        setSession(null);
      })
      .catch((err) => {
        setStatus(err.message);
        setOtp('');
        console.log(err);
      });
  };

  const navigation = useNavigation()

  const goToLogin = () => {
    navigation.navigate('Login')
  } 

  const Register = () => {
    signIn();
    setMessage(WAITINGFOROTP);
  }

  const Verify = async () => {
    await verifyOtp();
    if(status==SIGNEDIN){
      navigation.navigate('HomeScreen')
    }
    console.log(status);
  }

  const SignUpForm = () => {
    if(message){
      return(
        <View style={styles.container}>
          <Text style={styles.title} >Ingresa el código de verificación</Text>
          <TextInput
            style={styles.input}
            placeholder='Código de verificación'
            autoCapitalize="none"
            placeholderTextColor='#332C54'
            onChangeText={text => { 
              if(text.length == 6){
                setOtp(text)
              }  
            } } 
          />
          <TouchableOpacity 
              style={styles.button}
              onPress={Verify}
              > 
              <Text style={{color:'#FFF', fontSize:18}}>Verificar</Text>
          </TouchableOpacity>
          <Text style={styles.extra} >Ya tienes una cuenta?</Text>
          <TouchableOpacity style={styles.extra2} onPress={goToLogin}> 
          <Text style={styles.extra3}>Ingresa aquí</Text>
          </TouchableOpacity>
        </View>
       
      )
    }
    return(
       <View style={styles.container}>
        <Text style={styles.title} >Registro</Text>
        <TextInput
          style={styles.input}
          placeholder='Celular'
          autoCapitalize="none"
          placeholderTextColor='#332C54'
          onChangeText={text => { 
            if(text.length == 12){
              setNumber(text)
            }  
          }}
          placeholderText={number}
        />
        <TouchableOpacity 
            style={styles.button}
            onPress={Register}
            > 
            <Text style={{color:'#FFF', fontSize:18}}>Registrarse</Text>
        </TouchableOpacity>
        <Text style={styles.extra} >Ya tienes una cuenta?</Text>
        <TouchableOpacity style={styles.extra2} onPress={goToLogin}> 
          <Text style={styles.extra3}>Ingresa aquí</Text> 
        </TouchableOpacity>
      </View>
    )
  }
  
  return (
    <SignUpForm />
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
    fontSize: 20,
    marginLeft: 5,
    fontWeight: 'bold',
  
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#332C54',
    textAlign: 'center',
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