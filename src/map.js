import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker } from 'react-native-maps';


export default function MapVC() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  var dropDownAlertRef;

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setLatitude(info.coords.latitude);
      setLongitude(info.coords.longitude);
    });
  })

  return (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      <MapView
      style={{flex: 1}}
      initialRegion={{
        latitude: 48.864716,
        longitude: 2.349014,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      >
        <Marker
        coordinate={{
          latitude: latitude,
          longitude: longitude
        }}>
        </Marker>
      </MapView>
    </View>
  );
}