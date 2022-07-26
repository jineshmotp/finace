import React from 'react';
import { StyleSheet, View } from 'react-native';


const ViewSubLeft = ({ children }) => (

  <View style={styles.Section}>
  {children}
  </View>


)

const styles = StyleSheet.create({
  Section: {
    flex:1, 
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center'
        
    },
})

export default ViewSubLeft
