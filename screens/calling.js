import 'react-native-gesture-handler';
import * as React from 'react';
import {
    View, 
    Text, 
    TextInput, 
    Image,
    Button,
} from 'react-native';
import { styles } from './../styles/styles';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CallingScreen()
{
    const navigation = useNavigation();
    return(
        <View style={styles.container} >
            <Image style={{marginTop: 10}}
                source={require('./../assets/logo.png')}></Image>

            <Text style={{color: 'white',
                fontWeight: 'bold', fontSize: 28}} >DATA PENELPON</Text>

            <TouchableOpacity style={{marginBottom: 50, marginTop: 290}} >
                <Image 
                source={require('./../assets/accept_call.png')}></Image>
            </TouchableOpacity>

        </View>
    );
}