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

export default function HomeInstansi() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image style={{ marginBottom: 50}}
                source={require('./../assets/logo.png')}></Image>

            <TouchableOpacity style={styles.loginbutton}
            onPress={() => navigation.navigate('Profile Instansi')}>
                <Text style={{color: 'white', textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold'}} >Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginbutton}
            onPress={() => navigation.navigate('Riwayat')}>
                <Text style={{color: 'white', textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold'}} >Riwayat Panggilan</Text>
            </TouchableOpacity>
        </View>
    );
}