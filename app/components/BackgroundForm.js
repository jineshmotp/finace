import React from 'react';
import { ImageBackground, StyleSheet, KeyboardAvoidingView , View,ScrollView } from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';


const BackgroundForm = ({ children }) => (
  <ImageBackground
    source={require('../assets/background_dot.png')}
    resizeMode="repeat"
    style={styles.background}
  >
    <KeyboardAvoidingView style={styles.container}>    
      
         {children}
      
    </KeyboardAvoidingView>
  </ImageBackground>
)

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: COLORS.surface,
   },
  container: {
    flex: 1,
    padding: 0,
    width: '100%',
    maxWidth: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
       
  },
})

export default BackgroundForm
