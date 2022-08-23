import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import typesData from '../../assets/data/types';
import TypeRow from '../TypeRow';

const VehicleTypes = () => {
  return (
    <View>
      {typesData.map((type) => (
        <TypeRow
          type={type}
          key={type.id}          
        />
      ))}

      <Pressable  style={{
        marginTop: 30,
        backgroundColor: '#332C54',
        padding: 10,
        margin: 10,
        alignItems: 'center',
      }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Confirmar Taxi
        </Text>
      </Pressable>
    </View>
  )
}

export default VehicleTypes

const styles = StyleSheet.create({})