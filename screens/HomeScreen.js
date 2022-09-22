import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';


const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-4`}>
        <Image 
            style={styles.logoWrapper}
            source={require('../assets/Uber_logo.png')} 
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    logoWrapper:{
      width: 100,
      height: 60,
      marginLeft:8,
      resizeMode: 'contain',
    }
});

export default HomeScreen;

