import React from 'react';
import {
    View,
    Text,
    Button,
    Alert
} from 'react-native';

import { CButton, CInputField } from '../components';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthService from '../classes/AuthService';


function RegisterScreen({ navigation }: any) {

    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

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


    // Create a registration function
    const register = () => {
        // Check if the username is empty
        if (username.length === 0) {
            alert('Username is empty');
            return;
        }

        // Check if the email is empty
        if (email.length === 0) {
            alert('Email is empty');
            return;
        }

        // Check if the password is empty
        if (password.length === 0) {
            alert('Password is empty');
            return;
        }

        // Check if the confirm password is empty
        if (confirmPassword.length === 0) {
            alert('Confirm password is empty');
            return;
        }

        // Check if the password and confirm password are the same
        if (password !== confirmPassword) {
            alert('Password and confirm password are not the same');
            return;
        }

        // Check if the password is less than 8 characters
        if (password.length < 8) {
            alert('Password must be at least 8 characters');
            return;
        }

        // Check if the email is valid
        if (!email.includes('@')) {
            alert('Email is not valid');
            return;
        }

        // Send the data to the server
        const authService = new AuthService();
        const isRegistered = authService.register(username, email, password);

        isRegistered.then((result) => {
            if (result) {
                alert('Registration successful');
                navigation.navigate('Home');
            } else {
                alert('Registration failed');
            }
        });
    }

        




    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0f3057' }}>
            {/* Create a registration form with username, email and password */}
            <Text style={{color: '#FFD700', fontSize: 60}}
            >Register</Text>
            
            <View style={{width: '90%'}}>
                <CInputField placeholder="Username" onChangeText={setUsername}/>
                <CInputField placeholder="Email" inputMode='email' onChangeText={setEmail}/>
                <CInputField placeholder="Password" secureTextEntry onChangeText={setPassword}/>
                <CInputField placeholder="Confirm Password" secureTextEntry onChangeText={setConfirmPassword}/>

                <CButton text="Register" onPress={() => register()}/>
            </View>

        </View>
    );
}

export default RegisterScreen;