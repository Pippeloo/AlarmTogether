import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';

// Import all the components from the "components" folder
import { InputField } from '../components';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  function hi(text: string): void {
    // console.log(text);
  }

  return (
    <SafeAreaView>
      <InputField placeholder='info@example.com' onChangeText={hi} value='' secureTextEntry></InputField>
    </SafeAreaView>
  );
}

export default App;
