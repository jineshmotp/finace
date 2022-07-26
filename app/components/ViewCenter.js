import React from 'react';
import { StyleSheet, View } from 'react-native';


const ViewCenter = ({ children }) => (

  <View style={styles.Section}>
  {children}
  </View>


)

const styles = StyleSheet.create({
  Section: {
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
    },
})

export default ViewCenter
