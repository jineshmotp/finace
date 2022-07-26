import React from 'react';
import { StyleSheet, View } from 'react-native';


const ViewLeft = ({ children }) => (

  <View style={styles.Section}>
  {children}
  </View>


)

const styles = StyleSheet.create({
  Section: {
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'flex-start',
    alignSelf:'flex-start'
        
    },
})

export default ViewLeft
