import React, { useState, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';
import Geolocation from 'react-native-geolocation-service';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// import styles from './styles';

const styles = StyleSheet.create({
   container: {
      // ...StyleSheet.absoluteFillObject,
      flex: 1,
   },
   map: {
      height: '80%',
      width: '100%',
      // ...StyleSheet.absoluteFillObject,
   },
});

const GeoTasks = () => {
   const [minhasCoordenadas, setMinhasCoordenadas] = useState({
      latitude: null,
      longitude: null,
   });

   useEffect(() => {
      Geolocation.getCurrentPosition((position) => {
         setMinhasCoordenadas({
            latitude: parseFloat(position.coords.latitude),
            longitude: parseFloat(position.coords.longitude),
         });
      });
   }, []);

   return (
      <View style={styles.container}>
         <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
               latitude: -6.9873296, // -6.98021, // minhasCoordenadas.latitude, //
               longitude: -34.8323767, // -34.8304, // minhasCoordenadas.longitude, //
               latitudeDelta: 0.015,
               longitudeDelta: 0.0121,
            }}
         />
         <TouchableOpacity>
            <Text>Minha Latitude é: {minhasCoordenadas.latitude}</Text>
            <Text>Minha Longitude é: {minhasCoordenadas.longitude}</Text>
         </TouchableOpacity>
      </View>
   );
};

export default GeoTasks;

// <Text>Minha Longitude é: {test.coords}</Text>
