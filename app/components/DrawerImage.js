import React from 'react';
import { Image , StyleSheet, KeyboardAvoidingView , View } from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const Background = ({ children }) => (
  <View  style={styles.container} >   
         <Image  source={require('../assets/logo.png')} style={styles.imgstyle} />   
  </View>
)

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: COLORS.surface,
  },
  container: {
    flex: 1,
    padding: 5,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgstyle:
  {
    width: 180,
    height: 180,
    marginBottom: 8,

  }
})

export default Background
