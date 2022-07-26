import React from 'react';
import { StyleSheet, View } from 'react-native';

const Viewcolumn = ({ colors, children }) => (

  <View style={[styles.Section,{ backgroundColor : colors} ]}>
  {children}
  </View>


)

const styles = StyleSheet.create({
  Section: {
    flex:1, 
    flexDirection:'column',
   // backgroundColor:theme.colors.lightBlue
   
    },
})

export default Viewcolumn
