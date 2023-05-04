import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

import { CButton } from '../components';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation }: any) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0f3057' }}>
            <Text style={{color: '#FFD700', fontSize: 60}}
            >Home Screen</Text>
            {/* Set view at the bottom */}
            <View style={{position: 'absolute', bottom: 20, width: '90%'}}>
                <CButton text="Go to Details" onPress={() => navigation.navigate('Details')}/>
            </View>
        </View>
    );
}

export default HomeScreen;