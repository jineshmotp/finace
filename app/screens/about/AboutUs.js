import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { AuthContext } from '../../components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeBackground from '../../components/HomeBackground';


import { createStackNavigator } from '@react-navigation/stack';


const AboutUs = () =>  {

  const { signOut } = React.useContext(AuthContext);

  const logout = () => {

    signOut();
  }

  return (
    <HomeBackground>
      <Text>AboutUs</Text>           

               <Text>check</Text>
          
     
    </HomeBackground>
  );
}

const styles = StyleSheet.create({
 
});


export default AboutUs;


