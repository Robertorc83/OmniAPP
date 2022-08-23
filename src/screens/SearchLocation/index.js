import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from "./placeRow";
import { useNavigation } from '@react-navigation/native';

const homePlace = {
    description: 'Casa',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
    description: 'Trabajo',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };  

const SearchLocation = () => {

  const [originPlace, setOriginPlace] = useState('')
  const [destinationPlace, setDestinationPlace] = useState('')

  const navigation = useNavigation();

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults', {
        originPlace,
        destinationPlace,
      })
    }
  }

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);

  return (

    <View style={styles.container}>
      <Text style={styles.text}>Prepara tu ruta</Text>
      <GooglePlacesAutocomplete
      placeholder='Punto de Partida'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        setOriginPlace({data, details});
      }}
      enablePoweredByContainer={false}
      suppressDefaultStyles
      currentLocation={true}
      currentLocationLabel='Ubicación Actual'
      renderRow={(data) => <PlaceRow data={data} />}
      predefinedPlaces={[homePlace, workPlace]}
      renderDescription={(data) => data.description || data.vicinity}
      styles={{
        textInput: styles.textInput,
        container: styles.autocompleteContainer,
        listView: styles.listView,
        separator: styles.separator,
      }}
      fetchDetails={true}
      query={{
        key: 'AIzaSyBc-PQEI5c-9Eot0HvzMN7tEbhXSSVY_yU',
        language: 'es',
      }}
    />
    <GooglePlacesAutocomplete
      placeholder='Punto de llegada'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        setDestinationPlace({data, details});
      }}
      enablePoweredByContainer={false}
      predefinedPlaces={[homePlace, workPlace]}
      suppressDefaultStyles
      styles={{
        textInput: styles.textInput,
        container: {
          ...styles.autocompleteContainer,
          top: 95,
        },
        separator: styles.separator,
      }}
      fetchDetails={true}
      query={{
        key: 'AIzaSyBc-PQEI5c-9Eot0HvzMN7tEbhXSSVY_yU',
        language: 'es',
      }}
    />

    </View>
  )
}

export default SearchLocation

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },
  textInput: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
  },

  separator: {
    backgroundColor: '#efefef',
    height: 1,
  },
  listView: {
    position: 'absolute',
      top: 105,
  },
  autocompleteContainer: {
    position: 'absolute',
    top: 40,
    left: 10,
    right: 10,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#332C54',
  }
})