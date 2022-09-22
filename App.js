import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import tw from 'twrnc';
import { SafeAreaProvider } from 'react-native-safe-area-view';

const App = () => {
  return (
    <Provider store={store}>
      
        <HomeScreen />
      
    </Provider>
  );
}

const styles = StyleSheet.create({

});

export default App;
