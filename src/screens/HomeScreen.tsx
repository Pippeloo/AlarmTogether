import React from 'react';
import {
    View,
    Text,
    Button,
    Alert
} from 'react-native';

import { CButton } from '../components';

import AuthService from '../classes/AuthService';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation }: any) {

    // Create a function for the alert
    const alert = (message: string) => {
        Alert.alert(
            "Alert",
            message,

            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    }

    // Create a function to show the token
    const showToken = async () => {
        // Create a new instance of the AuthService class

        const authService = new AuthService();

        // Get the token from the storage
        const token = await authService.getToken();

        // Check if the token is null
        if (token === null) {
            alert('Token is null');
            return;
        }

        // Show the token
        alert(token);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0f3057' }}>
            <Text style={{color: '#FFD700', fontSize: 60}}
            >Home Screen</Text>
            {/* Set view at the bottom */}
            <View style={{position: 'absolute', bottom: 20, width: '90%'}}>
                {/* Add a button to show the token in the storage */}
                <CButton text="Show token" onPress={() => showToken()}/>
                <CButton text="Go to Details" onPress={() => navigation.navigate('Details')}/>
                <CButton text="Go to Register" onPress={() => navigation.navigate('Register')}/>
            </View>
        </View>
    );
}

export default HomeScreen;