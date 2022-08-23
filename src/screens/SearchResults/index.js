import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RouteMap from '../../components/RouteMap'
import VehicleTypes from '../../components/VehicleTypes'

import { useRoute, useNavigation } from '@react-navigation/native';

const SearchResults = () => {

  const route = useRoute();
  const navigation = useNavigation();

  const {originPlace, destinationPlace} = route.params

  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <RouteMap origin={originPlace} destination={destinationPlace} />
      <View style={{height: 400}}>
        <VehicleTypes />
      </View>
    </View>
  )
}

export default SearchResults

const styles = StyleSheet.create({})