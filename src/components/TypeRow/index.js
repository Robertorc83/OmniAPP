import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";

const TypeRow = (props) => {

const {type, onPress, isSelected} = props;

const getImage = () => {
if (type.type === 'Taxi(Omni)') {
    return require('../../assets/UberXL.jpeg');
}
return require('../../assets/UberX.jpeg');
}

  return (
    <Pressable
      style={[styles.container]}
    >

      {/*  Image */}
      <Image
        style={styles.image}
        source={getImage()}
      />

      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type}{' '}
          <Ionicons name={'person'} size={16} />
          3
        </Text>
        <Text style={styles.time}>
          8:03PM Llegada
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>est. ${type.price}</Text>
      </View>
    </Pressable>
  )
}

export default TypeRow

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        height: 70,
        width: 80,
        resizeMode: 'contain',
    },
    middleContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    type: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    time: {
        color: '#5d5d5d',
    },
    rightContainer: {
        width: 100,
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    price: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 5,
    },
 
})