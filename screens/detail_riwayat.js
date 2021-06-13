import * as React from 'react';
import {
    View, 
    Text, 
    TextInput, 
    Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import {styles} from './../styles/styles';
import { beginAsyncEvent } from 'react-native/Libraries/Performance/Systrace';

export default function DetailRiwayat() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image style={{marginBottom: 50, height: 70, width: 70}}
                source={require('./../assets/call.png')}></Image>

            <Text style={{fontSize: 28, color: 'white', fontWeight: 'bold'}}>Arsike Cipta Pelangi</Text>
            <Text style={{fontSize: 22, color: 'white', marginTop: 20}}>085451211566</Text>

            <View style={{flexDirection: 'row'}} >
                <Text style={{color: 'white', fontSize: 15, marginRight: 70, marginTop: 45}}>20 November 2020</Text>
                <Text style={{marginTop: 45, color: 'white', marginBottom: 70}}>21.31</Text>
            </View>
            <TouchableOpacity style={styles.loginbutton}
            onPress={() => navigation.navigate('HomeInstansi')}>
                <Text style={{color: 'white', textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold'}} >Kembali Ke Menu</Text>
            </TouchableOpacity>
        </View>

    );
}