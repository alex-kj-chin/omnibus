import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import MapView from 'react-native-maps';
import {
  createStackNavigator,
} from 'react-navigation';
import FetchLocation from './components/FetchLocation';

export default class App extends React.Component {
  getUserLocationHander = () => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position)
    }, err => console.log(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.backgroundMap}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
        >
          <MapView.Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324
            }}
            title={"Me"}
            descirption={"Where I am"}
          />
        </MapView>
        <View style={styles.footer}>
          <TouchableOpacity onPress={()=>{alert("clicked me")}}>
            <Image source={require("./images/calendar.png")}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("./images/car.png")}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundMap: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    zIndex: 0,
  },
  footer: {
    width: '100%',
    height: 150,
    position: 'absolute',
    left: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    zIndex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
});
