import MapView, {Marker} from 'react-native-maps';
import * as React from 'react';
import {
    View, 
    Text, 
    TextInput, 
    Image,
    Button,
    Dimensions
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import MapViewDirections from 'react-native-maps-directions';
import {getDistance, getPreciseDistance} from 'geolib';

import {styles} from './../styles/styles';
import {coordinates} from './../data/koordinat';

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
navigator.geolocation = require('@react-native-community/geolocation');

const Telkom_University = {latitude: -6.97210152702763, longitude: 107.6335199509465};
const RSU_Bina_Sehat = {latitude: -6.985840977655017, longitude: 107.62477902533556};
const RSU_Pindad = {latitude: -6.937750845355122, longitude: 107.6463946978692};
const Polisi_Buah_Batu = {latitude: -6.981119816215248, longitude: 107.63637049739064};
const Polsekta_Buah_Batu = {latitude: -6.9411859933856634, longitude: 107.62752108084675};
const RS_SARTIKA_SARI_ASIH = {latitude: -6.956435224869796, longitude: 107.61230148068346};
const RS_Muhammadiyah = {latitude: -6.933302533699649, longitude: 107.62320969784741};
const RS_Edelweiss = {latitude: -6.943336075539749, longitude: 107.64964142780906};
const Damkar_Kota_Bandung = {latitude: -6.940600205258198, longitude: 107.67256386793157};
const RSIA_Bandung = {latitude: -6.938885675101045, longitude: 107.66915786121412};
const RS_Immanuel = {latitude: -6.935405897526335, longitude: 107.59579024486986};
const RSIA_Khusus = {latitude: -6.943090645980279, longitude: 107.5914020928606};
const RS_Santosa = {latitude: -6.952408642577875, longitude: 107.58618338980756};
const RS_Bersalin_Ratmidjah = {latitude: -6.9448263473423335, longitude: 107.58212958143149};

var heuristic = getPreciseDistance(Telkom_University, RSU_Bina_Sehat);

const GOOGLE_MAPS_APIKEY = "AIzaSyBedLtUGLofpnMs1160pn-1ezP667VeO7c";

var direction = [];

var marker = [];

var node = [];

for(let i = 0; i < coordinates.length; i++){
    /*if(getPreciseDistance(coordinates[i], Telkom_University) <= heuristic
        && getPreciseDistance(coordinates[i], RSU_Bina_Sehat) <= heuristic){
            node.push(coordinates[i]);

            marker.push(
                <MapView.Marker 
                    coordinate={coordinates[i]}>
                    <View style={{backgroundColor: "red"}}>
                        <Text style={{color: 'white'}}>{i}</Text>
                    </View>
                </MapView.Marker>
            )
        } */
    
    /*direction.push(
        <MapViewDirections
            origin={coordinates[i]}
            destination={coordinates[i+1]}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3} 
            strokeColor="#0496ff"
        />
        
    ) */
    
    marker.push(
        <MapView.Marker 
            coordinate={coordinates[i]}>
            <View style={{backgroundColor: "red"}}>
                <Text style={{color: 'white'}}>{i}</Text>
            </View>
        </MapView.Marker>
    ) 
}

export default class MapsScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            initialPosition: {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0,
            longitudeDelta: 0,
            },
        }
    }
    
    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)
    
            var initialRegion = {
            latitude: lat,
            longitude: long,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        }
    
        this.setState({initialPosition: initialRegion})
        },
        (error) => alert(JSON.stringify(error)));
    }
    
    
    renderScreen = () => {
        return (
            <View style={styles.container}>
                <MapView
                style={styles.map}
                initialRegion={this.state.initialPosition}
                >
                    { marker }

                    { direction }
                </MapView>
            </View>
        );
    }
    
    render() {
        return (
            this.renderScreen()
        );
    }
}


function Maps_Screen () {
    const navigation = useNavigation();

    return(
        <>
            <MapView
            style={styles.map}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.03,
                longitudeDelta: 0.03,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: this.state.initialPosition.latitude,
                        longitude: this.state.initialPosition.longitude,
                    }}
                    title="Your Position"
                    description="Accurete Up To 80 percent"
                    ><Image source={require('./../assets/marker.png')} style={{height: 70, width: 70}}/>
                    </Marker>
            </MapView>
            
        </>
    );
}