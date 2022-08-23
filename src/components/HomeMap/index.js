import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import cars from '../../assets/data/cars';

const HomeMap = () => {

const getImage = (type) => {
if (type === 'Taxi(Omni)') {
    return require('../../assets/top-UberXL.png');
}
return require('../../assets/top-UberX.png');
}

  return (
    <View style = {styles.container} >
      <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: -14.07473678578905,
        longitude: -75.73796848426764,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}> 

      {cars.map((car) => (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}
        >
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              transform: [{
                rotate: `${car.heading}deg`
              }]
            }}
            source={getImage(car.type)}
          />
        </Marker>
       ))}
      </MapView>
    </View>
  )
}

export default HomeMap

const styles = StyleSheet.create({
    container : {height: 300,
    backgroundColor:'#a0abff',
    justifyContent: 'center'}
})