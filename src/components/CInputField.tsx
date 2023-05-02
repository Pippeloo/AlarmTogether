import React, { useState } from 'react';
import { InputModeOptions, SafeAreaView, StyleSheet, TextInput } from 'react-native';

interface InputFieldProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  inputMode?: InputModeOptions;
  secureTextEntry?: boolean;
}

const CInputField: React.FC<InputFieldProps> = ({
    placeholder = '',
    value = '',
    onChangeText = () => {},
    inputMode = 'text',
    secureTextEntry = false,
}) => {
    // Styles
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 50,
            backgroundColor: '#fff',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
        },
        input: {
            width: '90%',
            height: '100%',
            fontSize: 18,
            padding: 10,
        },
    });

    // Create state for the input value
    const [inputValue, setInputValue] = useState(value);

    // Handle input change
    const handleInputChange = (text: string): void => {
        // Update the state
        setInputValue(text);
        onChangeText(text);

        value = text;
    };

    return (
        <SafeAreaView style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={inputValue}
            onChangeText={handleInputChange}
            inputMode={inputMode}
            secureTextEntry={secureTextEntry}
        />
        </SafeAreaView>
    );
}

export default CInputField;
