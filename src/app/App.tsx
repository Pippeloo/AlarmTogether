import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';

// Import all the components from the "components" folder
import { CInputField, CButton } from '../components';


function App(): JSX.Element {

  const backgroundStyle = {
    backgroundColor: 'gray',
  };

  const [inputEmail, setInputEmail] = React.useState('');
  const [inputPassword, setInputPassword] = React.useState('');

  function handleSignIn() {
    console.log('Sign in');
    console.log('Email: ', inputEmail);
    console.log('Password: ', inputPassword);
  }


  return (
    <SafeAreaView style={backgroundStyle}>
      <CInputField placeholder='info@example.com' value={inputEmail} inputMode='email' onChangeText={setInputEmail}></CInputField>
      <CInputField placeholder='Password' value={inputPassword} secureTextEntry onChangeText={setInputPassword}></CInputField>
      <CButton text='Sign in' onPress={handleSignIn}></CButton>

    </SafeAreaView>
  );
}

export default App;
