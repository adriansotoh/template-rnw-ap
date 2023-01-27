import React from 'react';
import {SafeAreaView, StatusBar, Text, TextInput, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text style={{fontSize: 24}}>Hello World</Text>
        <TextInput placeholder="Hola"></TextInput>
      </View>
    </SafeAreaView>
  );
};

export default App;
