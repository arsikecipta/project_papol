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

export default function LoginInstansiScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image style={{marginTop: -90, marginBottom: -40}}
                source={require('./../assets/logo.png')}></Image>

            <Text style={{color: 'white',
                marginLeft: -180,
                marginBottom: 5,
                marginTop: 35,
                fontWeight: 'bold'}}>Identitas Instansi</Text>

            <TextInput style={styles.inputbox}></TextInput>

            <Text style={styles.placeholdertext} >Password</Text>

            <TextInput style={styles.inputbox}></TextInput>

            <TouchableOpacity style={styles.loginbutton}
            onPress={() => navigation.navigate('HomeInstansi')}>
                <Text style={{color: 'white', textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold'}} >Masuk</Text>
            </TouchableOpacity>

        </View>
    );
}