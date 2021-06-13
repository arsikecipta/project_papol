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

export default function Riwayat() {
    const navigation = useNavigation();
    return (
        <View style={{flex: 1, backgroundColor: '#173248'}}>
            <Image style={{marginTop: -40, justifyContent: 'center', marginLeft: 40}}
                source={require('./../assets/logo.png')}></Image>

            <Text style={{color: 'white', fontWeight: 'bold',
                marginLeft: 45, fontSize: 20, marginBottom: 25, marginTop: -25}}>Riwayat Panggilan</Text>

            
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                <View>
                    <Text style={{marginLeft: 45, color: 'white',
                    fontWeight: 'bold'}} >Arsike Cipta Pelangi</Text>
                    <Text style={{marginTop: 10, marginLeft: 45, color: 'white'}} >
                        20 November 2020</Text>
                </View>
                <Text style={{marginLeft: 110, color: 'white'}} >21.31</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Detail Riwayat')}>
                <Image source={require('./../assets/detail.png')}
                    style={{marginLeft: 15}}></Image>
                </TouchableOpacity>
            </View>
            

        </View>

    );
}