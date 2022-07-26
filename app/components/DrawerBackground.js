import React from 'react';
import { ImageBackground, StyleSheet, KeyboardAvoidingView , View } from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const DrawerBackground = ({ children }) => (

<ImageBackground
source={require('../assets/background_dot.png')}
resizeMode="repeat"
style={styles.background}
>
<KeyboardAvoidingView style={styles.container} behavior="padding">      
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
   },
})

export default DrawerBackground
