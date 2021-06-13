import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/login_screen'
import RegisterScreen from './screens/register_screen'
import HelpScreen from './screens/help_screen'
import ProfileScreen from './screens/profile_screen'
import HomeInstansi from './screens/home_instansi';
import ProfileInstansi from './screens/profile_instansi';
import Riwayat from './screens/riwayat_panggilan';
import HomeScreen from './screens/home_screen';
import ChangePasswordScreen from './screens/change_password';
import CallingScreen from './screens/calling';
import MapsScreen from './screens/maps_screen';
import LoginInstansiScreen from './screens/login_instansi';
import DetailRiwayat from './screens/detail_riwayat';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" 
        component={LoginScreen} 
        options={{headerShown: false}}/>

        <Stack.Screen name="Register" 
        component={RegisterScreen} 
        options={{headerStyle: {
          backgroundColor: '#173248'
        },
        headerTitleStyle: {
          color: 'white'
        },
        headerTintColor: 'white'}}/>

        <Stack.Screen name="Home" 
        component={HomeScreen} 
        options={{headerShown: false}}/>

        <Stack.Screen name="Help" 
        component={HelpScreen} 
        options={{headerStyle: {
          backgroundColor: '#173248'
        },
        headerTitleStyle: {
          color: 'white'
        },
        headerTintColor: 'white'}}/>

        <Stack.Screen name="Profile" 
        component={ProfileScreen} 
        options={{headerStyle: {
          backgroundColor: '#173248'
        },
        headerTitleStyle: {
          color: 'white'
        },
        headerTintColor: 'white'}}/>

        <Stack.Screen name="Change Password" 
        component={ChangePasswordScreen} 
        options={{headerShown: false}}/>

        <Stack.Screen name="Calling" 
        component={CallingScreen} 
        options={{headerShown: false}}/>

        <Stack.Screen name="Login Instansi" 
        component={LoginInstansiScreen} 
        options={{headerShown: false}}/>

        <Stack.Screen name="HomeInstansi" 
        component={HomeInstansi}
        options={{headerShown: false,
          headerStyle: {
            backgroundColor: '#173248'
          }}}/>

        <Stack.Screen name="Profile Instansi" 
        component={ProfileInstansi} 
        options={{headerStyle: {
          backgroundColor: '#173248'
        },
        headerTitleStyle: {
          color: 'white'
        },
        headerTintColor: 'white'}}/>

        <Stack.Screen name="Riwayat" 
        component={Riwayat} 
        options={{headerStyle: {
          backgroundColor: '#173248'
        },
        headerTitleStyle: {
          color: 'white'
        },
        headerTintColor: 'white'}}/>

        <Stack.Screen name="Detail Riwayat" 
        component={DetailRiwayat} 
        options={{headerStyle: {
          backgroundColor: '#173248'
        },
        headerTitleStyle: {
          color: 'white'
        },
        headerTintColor: 'white'}}/>

        <Stack.Screen name="Maps" 
        component={MapsScreen} 
        options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
