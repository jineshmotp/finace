import React from 'react';
import { StyleSheet, View } from 'react-native';


const ViewLeft2 = ({ children }) => (

  <View style={styles.Section}>
  {children}
  </View>


)

const styles = StyleSheet.create({
  Section: {
    flex:2,
    flexDirection:'column',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'flex-start',
    alignSelf:'flex-start'
        
    },
})

export default ViewLeft2
