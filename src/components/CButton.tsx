import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
    text: string;
    onPress: () => void;
}

const CButton: React.FC<ButtonProps> = ({ text, onPress }) => {
    // Styles
    const styles = StyleSheet.create({
        button: {
            width: '100%',
            height: 50,
            backgroundColor: '#fff',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
        },
        buttonText: {
            fontSize: 18,
        },
    });

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}

export default CButton;