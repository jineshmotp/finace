import React from 'react';
import { StyleSheet, View } from 'react-native';


const ViewHalf = ({ children }) => (

  <View style={styles.Section}>
  {children}
  </View>


)

const styles = StyleSheet.create({
  Section: {
     
    flex:1,
    width:'100%',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
    
    },
})

export default ViewHalf
