import React from 'react';
import { StyleSheet, View } from 'react-native';


const ViewSubRow = ({ children }) => (

  <View style={styles.Section}>
  {children}
  </View>


)

const styles = StyleSheet.create({
  Section: {
    flex:1, 
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center'
        
    },
})

export default ViewSubRow
