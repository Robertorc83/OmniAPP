import { StyleSheet, View, Image } from 'react-native'
import React, {useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';


const InitScreen = () => {
  const navigation = useNavigation();

  useEffect(() =>{
    setTimeout(() =>{
      navigation.navigate('StartScreen')
    }, 2000)
  })

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require( '../../assets/omnigradient.png')}
      />
    </View>
  )
}

export default InitScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'

  },
  logo:{
    width: 300,
    height: 300,
  }
})